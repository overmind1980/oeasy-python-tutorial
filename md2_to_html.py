from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import subprocess


@dataclass(frozen=True)
class Config:
    repo_root: Path
    md_root: Path
    html_root: Path
    max_width_from: str
    max_width_to: str


def strip_yaml_like_block(text: str) -> str:
    lines = text.splitlines(True)
    if not lines:
        return text
    if lines[0].strip() != "---":
        return text

    end_idx = None
    for i in range(1, min(len(lines), 200)):
        if lines[i].strip() == "---":
            end_idx = i
            break
    if end_idx is None:
        return text

    return "".join(lines[1:end_idx] + ["\n"] + lines[end_idx + 1 :])


def is_numeric_md(p: Path) -> bool:
    return p.suffix == ".md" and len(p.stem) == 4 and p.stem.isdigit()


def postprocess_html(html_path: Path, cfg: Config) -> None:
    text = html_path.read_text(encoding="utf-8", errors="replace")
    new_text = text.replace(cfg.max_width_from, cfg.max_width_to)
    new_text = new_text.replace('style="width:6%;"', 'style="width:100%;"')
    if new_text != text:
        html_path.write_text(new_text, encoding="utf-8")


def convert_one(md_path: Path, cfg: Config) -> tuple[bool, str]:
    num = md_path.stem
    rel = md_path.relative_to(cfg.md_root)
    out_path = (cfg.html_root / rel).with_suffix(".html")
    out_path.parent.mkdir(parents=True, exist_ok=True)

    raw = md_path.read_text(encoding="utf-8", errors="replace")
    cleaned = strip_yaml_like_block(raw)

    proc = subprocess.run(
        [
            "pandoc",
            "-s",
            "--from",
            "markdown-yaml_metadata_block",
            "--to",
            "html5",
            "--metadata",
            f"title=oeasy Python {num}",
            "-o",
            str(out_path),
        ],
        input=cleaned.encode("utf-8"),
        stdout=subprocess.DEVNULL,
        stderr=subprocess.PIPE,
    )
    if proc.returncode != 0:
        err = proc.stderr.decode("utf-8", errors="replace").strip()
        return False, err or f"pandoc exited with {proc.returncode}"

    postprocess_html(out_path, cfg)
    return True, ""


def main() -> int:
    repo_root = Path(__file__).resolve().parent
    cfg = Config(
        repo_root=repo_root,
        md_root=repo_root / "md2",
        html_root=repo_root / "html",
        max_width_from="max-width: 36em;",
        max_width_to="max-width: 1200px;",
    )

    md_files = sorted(p for p in cfg.md_root.rglob("*.md") if is_numeric_md(p))
    ok = 0
    failed: list[tuple[Path, str]] = []

    for p in md_files:
        success, err = convert_one(p, cfg)
        if success:
            ok += 1
        else:
            failed.append((p, err))

    print("md_files", len(md_files))
    print("converted", ok)
    print("failed", len(failed))
    for p, err in failed[:10]:
        print("fail", str(p), err.replace("\n", " ")[:200])

    return 0 if not failed else 1


if __name__ == "__main__":
    raise SystemExit(main())
