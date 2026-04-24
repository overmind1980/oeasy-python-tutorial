#!/usr/bin/env python3

from __future__ import annotations

import argparse
import re
import shutil
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--src", default="md", help="Source directory containing .md files")
    parser.add_argument("--dst", default="md2", help="Destination base directory")
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="Overwrite destination <id>.md if it already exists",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print actions without changing files",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    src_dir = Path(args.src)
    dst_dir = Path(args.dst)

    if not src_dir.is_dir():
        raise SystemExit(f"Source directory does not exist: {src_dir}")
    dst_dir.mkdir(parents=True, exist_ok=True)

    copied = 0
    skipped = 0
    skipped_exists = 0

    for path in sorted(src_dir.iterdir()):
        if not path.is_file() or path.suffix != ".md":
            continue

        match = re.match(r"^(\d{3})-", path.name)
        if not match:
            skipped += 1
            continue

        file_id = match.group(1).zfill(4)
        target_dir = dst_dir / file_id
        target_path = target_dir / f"{file_id}.md"

        if target_path.exists() and not args.overwrite:
            skipped_exists += 1
            continue

        if args.dry_run:
            print(f"copy: {path} -> {target_path}")
            continue

        target_dir.mkdir(parents=True, exist_ok=True)
        shutil.copy2(path, target_path)
        copied += 1

    print("done", {"copied": copied, "skipped": skipped, "skipped_exists": skipped_exists})
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
