#!/usr/bin/env python3

from __future__ import annotations

import argparse
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--base", default="md2", help="Base directory to create folders in")
    parser.add_argument("--start", type=int, default=0, help="Start number, inclusive")
    parser.add_argument("--end", type=int, default=900, help="End number, inclusive")
    parser.add_argument("--step", type=int, default=100, help="Step size")
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    if args.step <= 0:
        raise SystemExit("--step must be > 0")
    if args.start < 0 or args.end < 0:
        raise SystemExit("--start/--end must be >= 0")
    if args.start > args.end:
        raise SystemExit("--start must be <= --end")

    base_dir = Path(args.base)
    base_dir.mkdir(parents=True, exist_ok=True)

    for value in range(args.start, args.end + 1, args.step):
        (base_dir / f"{value:04d}").mkdir(parents=True, exist_ok=True)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
