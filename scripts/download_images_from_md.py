#!/usr/bin/env python3

from __future__ import annotations

import argparse
import logging
import mimetypes
import re
import time
import sys
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    target = parser.add_mutually_exclusive_group(required=True)
    target.add_argument("--md", help="Markdown file path")
    target.add_argument("--root", help="Root directory to scan (e.g. md2)")
    target.add_argument("--retry-log", help="Retry failed downloads from an existing log file")
    parser.add_argument("--out", help="Output directory for downloaded images (only for --md)")
    parser.add_argument("--overwrite", action="store_true", help="Overwrite existing files")
    parser.add_argument("--timeout", type=float, default=300.0, help="HTTP timeout seconds")
    parser.add_argument("--retries", type=int, default=5, help="Retry count per url")
    parser.add_argument("--retry-sleep", type=float, default=1.0, help="Base sleep seconds between retries")
    parser.add_argument("--workers", type=int, default=6, help="Concurrent download workers per markdown file")
    parser.add_argument("--log", help="Log file path (default: <out>/download_images.log or <root>/download_images.log)")
    parser.add_argument("--log-overwrite", action="store_true", help="Overwrite log file instead of append")
    parser.add_argument(
        "--resume",
        action=argparse.BooleanOptionalAction,
        default=True,
        help="Resume from existing log in --root mode (ignored with --log-overwrite)",
    )
    parser.add_argument(
        "--extract-only",
        action="store_true",
        help="Only extract failed url + target hint from --retry-log and exit",
    )
    return parser.parse_args()


def extract_urls(text: str) -> list[str]:
    urls: list[str] = []

    for match in re.finditer(r"!\[[^\]]*]\(([^)]+)\)", text):
        raw = match.group(1).strip()
        if raw.startswith("<") and raw.endswith(">"):
            raw = raw[1:-1].strip()
        url = raw.split()[0].strip()
        if url:
            urls.append(url)

    for match in re.finditer(r"""<img\b[^>]*\bsrc=(['"])(.*?)\1""", text, flags=re.IGNORECASE):
        url = match.group(2).strip()
        if url:
            urls.append(url)

    deduped: list[str] = []
    seen: set[str] = set()
    for url in urls:
        if url not in seen:
            seen.add(url)
            deduped.append(url)
    return deduped


def safe_filename(name: str) -> str:
    name = name.strip()
    name = re.sub(r"[\\/:\0]", "_", name)
    name = re.sub(r"\s+", "_", name)
    name = re.sub(r"[^0-9A-Za-z._-]+", "_", name)
    name = name.strip("._")
    return name or "image"


def ext_from_content_type(content_type: str | None) -> str | None:
    if not content_type:
        return None
    value = content_type.split(";", 1)[0].strip().lower()
    if value == "image/jpeg":
        return ".jpg"
    if value == "image/png":
        return ".png"
    if value == "image/gif":
        return ".gif"
    if value == "image/webp":
        return ".webp"
    if value == "image/svg+xml":
        return ".svg"
    guessed = mimetypes.guess_extension(value)
    return guessed


def choose_target_path(out_dir: Path, url: str, content_type: str | None) -> Path:
    parsed = urllib.parse.urlparse(url)
    base = Path(parsed.path).name or "image"
    base = safe_filename(base)
    suffix = Path(base).suffix
    if not suffix:
        ext = ext_from_content_type(content_type)
        if ext:
            base = f"{base}{ext}"
    return out_dir / base


def target_hint(out_dir: Path, url: str) -> Path:
    parsed = urllib.parse.urlparse(url)
    base = Path(parsed.path).name or "image"
    base = safe_filename(base)
    if not Path(base).suffix:
        base = f"{base}.img"
    return out_dir / base


def download(url: str, out_dir: Path, overwrite: bool, timeout: float) -> tuple[str, Path | None, str | None]:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (oeasy-python-tutorial downloader)",
            "Accept": "image/*,*/*;q=0.8",
            "Referer": "https://doc.shiyanlou.com/",
        },
    )

    with urllib.request.urlopen(req, timeout=timeout) as resp:
        content_type = resp.headers.get("Content-Type")
        target = choose_target_path(out_dir, resp.geturl(), content_type)

        if target.exists() and not overwrite:
            return ("exists", target, content_type)

        out_dir.mkdir(parents=True, exist_ok=True)
        if target.exists() and overwrite:
            target.unlink()
        tmp_path = out_dir / f"{target.name}.part"
        try:
            with tmp_path.open("wb") as f:
                while True:
                    chunk = resp.read(64 * 1024)
                    if not chunk:
                        break
                    f.write(chunk)
            tmp_path.replace(target)
        finally:
            if tmp_path.exists():
                tmp_path.unlink()
        return ("downloaded", target, content_type)


def download_with_retries(
    url: str,
    out_dir: Path,
    overwrite: bool,
    timeout: float,
    retries: int,
    retry_sleep: float,
) -> tuple[str, Path | None, str | None]:
    last_error: Exception | None = None
    for attempt in range(retries + 1):
        try:
            return download(url, out_dir, overwrite=overwrite, timeout=timeout)
        except Exception as e:
            last_error = e
            if attempt >= retries:
                raise
            sleep = retry_sleep * (2**attempt)
            time.sleep(min(30.0, sleep))
    raise last_error or RuntimeError("download failed")


def format_pct(numerator: int, denominator: int) -> str:
    if denominator <= 0:
        return "0.00%"
    return f"{(numerator / denominator) * 100:.2f}%"


def process_md(md_path: Path, out_dir: Path, args: argparse.Namespace, logger: logging.Logger) -> dict[str, int]:
    text = md_path.read_text(encoding="utf-8", errors="replace")
    urls = [u for u in extract_urls(text) if u.startswith("http://") or u.startswith("https://")]

    downloaded = 0
    exists = 0
    failed = 0

    total_images = len(urls)
    logger.info("file: %s images=%s", md_path, total_images)

    workers = max(1, args.workers)
    if total_images == 0:
        return {"urls": 0, "downloaded": 0, "exists": 0, "failed": 0}

    def task(image_url: str) -> str:
        status, _, _ = download_with_retries(
            image_url,
            out_dir,
            overwrite=args.overwrite,
            timeout=args.timeout,
            retries=args.retries,
            retry_sleep=args.retry_sleep,
        )
        return status

    completed = 0
    if workers == 1:
        for index, url in enumerate(urls, start=1):
            logger.info("image: %s/%s (%s) %s", index, total_images, format_pct(index, total_images), url)
            try:
                status = task(url)
                if status == "downloaded":
                    downloaded += 1
                elif status == "exists":
                    exists += 1
                logger.info("image-result: %s (%s)", status, url)
            except Exception as e:
                failed += 1
                logger.error("image-result: failed (%s) (%s)", url, e)
    else:
        with ThreadPoolExecutor(max_workers=workers) as pool:
            future_to_url: dict[object, str] = {}
            for index, url in enumerate(urls, start=1):
                logger.info("image: %s/%s (%s) %s", index, total_images, format_pct(index, total_images), url)
                future_to_url[pool.submit(task, url)] = url

            for future in as_completed(future_to_url):
                url = future_to_url[future]
                completed += 1
                try:
                    status = future.result()
                    if status == "downloaded":
                        downloaded += 1
                    elif status == "exists":
                        exists += 1
                    logger.info("image-result: %s (%s) done=%s/%s (%s)", status, url, completed, total_images, format_pct(completed, total_images))
                except Exception as e:
                    failed += 1
                    logger.error("image-result: failed (%s) (%s) done=%s/%s (%s)", url, e, completed, total_images, format_pct(completed, total_images))

    return {"urls": len(urls), "downloaded": downloaded, "exists": exists, "failed": failed}


def determine_log_path(args: argparse.Namespace, out_dir: Path | None) -> Path:
    if args.log:
        return Path(args.log)
    if args.retry_log:
        return Path(args.retry_log).parent / "download_images_retry.log"
    if args.root:
        return Path(args.root) / "download_images.log"
    if out_dir is not None:
        return out_dir / "download_images.log"
    return Path("download_images.log")


def setup_logger(log_path: Path, overwrite: bool) -> logging.Logger:
    log_path.parent.mkdir(parents=True, exist_ok=True)

    logger = logging.getLogger("download_images")
    logger.setLevel(logging.INFO)
    logger.handlers.clear()

    formatter = logging.Formatter("%(asctime)s %(levelname)s %(message)s")

    stream_handler = logging.StreamHandler(sys.stdout)
    stream_handler.setFormatter(formatter)
    logger.addHandler(stream_handler)

    file_handler = logging.FileHandler(log_path, mode="w" if overwrite else "a", encoding="utf-8")
    file_handler.setFormatter(formatter)
    logger.addHandler(file_handler)

    return logger


def parse_resume_file_index(log_path: Path) -> int | None:
    if not log_path.exists():
        return None

    progress_re = re.compile(r"\bprogress:\s+file\s+(\d+)/(\d+)\b")

    last_progress_index: int | None = None
    for line in log_path.read_text(encoding="utf-8", errors="replace").splitlines():
        match = progress_re.search(line)
        if match:
            last_progress_index = int(match.group(1))

    return last_progress_index


def parse_failed_items(log_path: Path) -> list[tuple[Path, str]]:
    progress_re = re.compile(r"\bprogress:\s+file\s+\d+/\d+\b.*\s+(md2/\d{4}/\d{4}\.md)\b")
    file_re = re.compile(r"\bfile:\s+(md2/\d{4}/\d{4}\.md)\s+images=(\d+)\b")
    failed_re = re.compile(r"\bimage-result:\s+failed\s+\((https?://[^)]+)\)")

    current_out_dir: Path | None = None
    items: list[tuple[Path, str]] = []

    for line in log_path.read_text(encoding="utf-8", errors="replace").splitlines():
        match = progress_re.search(line)
        if match:
            md_path = Path(match.group(1))
            current_out_dir = md_path.parent
            continue

        match = file_re.search(line)
        if match:
            md_path = Path(match.group(1))
            current_out_dir = md_path.parent
            continue

        match = failed_re.search(line)
        if match and current_out_dir is not None:
            items.append((current_out_dir, match.group(1)))

    return items


def retry_failed_from_log(log_path: Path, args: argparse.Namespace, logger: logging.Logger) -> dict[str, int]:
    raw_items = parse_failed_items(log_path)
    deduped: list[tuple[Path, str]] = []
    seen: set[tuple[str, str]] = set()
    for out_dir, url in raw_items:
        key = (out_dir.as_posix(), url)
        if key in seen:
            continue
        seen.add(key)
        deduped.append((out_dir, url))

    total = len(deduped)
    logger.info("retry-start log=%s failed_items=%s", log_path, total)

    if total == 0:
        logger.info("retry-done failed_items=0 downloaded=0 exists=0 failed=0")
        return {"total": 0, "downloaded": 0, "exists": 0, "failed": 0}

    for out_dir, url in deduped:
        logger.info("retry-item: out=%s target_hint=%s url=%s", out_dir, target_hint(out_dir, url), url)

    if args.extract_only:
        logger.info("retry-extract-only done failed_items=%s", total)
        return {"total": total, "downloaded": 0, "exists": 0, "failed": 0}

    downloaded = 0
    exists = 0
    failed = 0

    workers = max(1, args.workers)

    def task(out_dir: Path, url: str) -> str:
        status, _, _ = download_with_retries(
            url,
            out_dir,
            overwrite=args.overwrite,
            timeout=args.timeout,
            retries=args.retries,
            retry_sleep=args.retry_sleep,
        )
        return status

    completed = 0
    with ThreadPoolExecutor(max_workers=workers) as pool:
        future_to_item: dict[object, tuple[Path, str]] = {}
        for out_dir, url in deduped:
            future_to_item[pool.submit(task, out_dir, url)] = (out_dir, url)

        for future in as_completed(future_to_item):
            out_dir, url = future_to_item[future]
            completed += 1
            try:
                status = future.result()
                if status == "downloaded":
                    downloaded += 1
                elif status == "exists":
                    exists += 1
                logger.info(
                    "retry-result: %s done=%s/%s (%s) out=%s url=%s",
                    status,
                    completed,
                    total,
                    format_pct(completed, total),
                    out_dir,
                    url,
                )
            except Exception as e:
                failed += 1
                logger.error(
                    "retry-result: failed done=%s/%s (%s) out=%s url=%s (%s)",
                    completed,
                    total,
                    format_pct(completed, total),
                    out_dir,
                    url,
                    e,
                )

    logger.info("retry-done failed_items=%s downloaded=%s exists=%s failed=%s", total, downloaded, exists, failed)
    return {"total": total, "downloaded": downloaded, "exists": exists, "failed": failed}


def main() -> int:
    args = parse_args()

    total_urls = 0
    total_downloaded = 0
    total_exists = 0
    total_failed = 0

    if args.retry_log:
        log_path = Path(args.retry_log)
        logger = setup_logger(determine_log_path(args, None), overwrite=args.log_overwrite)
        retry_failed_from_log(log_path, args, logger)
        return 0
    if args.md:
        if not args.out:
            raise SystemExit("--out is required when using --md")
        md_path = Path(args.md)
        out_dir = Path(args.out)
        logger = setup_logger(determine_log_path(args, out_dir), overwrite=args.log_overwrite)
        logger.info("start mode=single md=%s out=%s", md_path, out_dir)
        result = process_md(md_path, out_dir, args, logger)
        total_urls += result["urls"]
        total_downloaded += result["downloaded"]
        total_exists += result["exists"]
        total_failed += result["failed"]
    else:
        root = Path(args.root)
        if not root.is_dir():
            raise SystemExit(f"Root directory does not exist: {root}")
        folders: list[Path] = []
        for folder in sorted(root.iterdir()):
            if not folder.is_dir():
                continue
            md_path = folder / f"{folder.name}.md"
            if not md_path.exists():
                continue
            folders.append(folder)

        log_path = determine_log_path(args, None)
        logger = setup_logger(log_path, overwrite=args.log_overwrite)
        total_files = len(folders)
        logger.info("start mode=root root=%s files=%s", root, total_files)

        resume_from: int | None = None
        if args.resume and not args.log_overwrite:
            resume_from = parse_resume_file_index(log_path)
            if resume_from is not None:
                resume_from = max(1, min(resume_from, total_files + 1))
                logger.info("resume: from file %s/%s", resume_from, total_files)

        for file_index, folder in enumerate(folders, start=1):
            if resume_from is not None and file_index < resume_from:
                continue
            md_path = folder / f"{folder.name}.md"
            logger.info("progress: file %s/%s (%s) %s", file_index, total_files, format_pct(file_index, total_files), md_path)
            result = process_md(md_path, folder, args, logger)
            total_urls += result["urls"]
            total_downloaded += result["downloaded"]
            total_exists += result["exists"]
            total_failed += result["failed"]

    logger.info("done urls=%s downloaded=%s exists=%s failed=%s", total_urls, total_downloaded, total_exists, total_failed)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
