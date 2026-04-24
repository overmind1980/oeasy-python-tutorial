#!/usr/bin/env python3

from __future__ import annotations

import argparse
from pathlib import Path


INTRO_LINE_1_TEMPLATE = "- oeasy Python {id}"
INTRO_LINE_2 = "- 这是 oeasy 系统化 Python 教程，从基础一步步讲，扎实、完整、不跳步。愿意花时间学，就能真正学会。"

FOOTER_LINE_1 = "- 本文来自 oeasy Python 系统教程。 "
FOOTER_LINE_2 = "- 想完整、扎实学 Python， "
FOOTER_LINE_3 = "- 搜索 oeasy 即可。"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", default="md2", help="Root directory, e.g. md2")
    parser.add_argument("--start", type=int, default=2, help="Start id (inclusive), e.g. 2 -> 0002")
    parser.add_argument("--end", type=int, default=900, help="End id (inclusive), e.g. 900 -> 0900")
    return parser.parse_args()


def split_front_matter(text: str) -> tuple[str, str]:
    lines = text.splitlines(keepends=True)
    if not lines:
        return ("", "")
    if lines[0].strip() != "---":
        return ("", text)
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            return ("".join(lines[: i + 1]), "".join(lines[i + 1 :]))
    return ("", text)


def build_intro_block(file_id: str) -> str:
    return "\n".join(
        [
            "---",
            INTRO_LINE_1_TEMPLATE.format(id=file_id),
            INTRO_LINE_2,
            "---",
            "",
        ]
    )


def build_footer_block() -> str:
    return "\n".join(["---", FOOTER_LINE_1, FOOTER_LINE_2, FOOTER_LINE_3, ""])


def main() -> int:
    args = parse_args()

    root = Path(args.root)
    changed = 0
    skipped_missing = 0
    skipped_has_intro = 0
    skipped_has_footer = 0

    for n in range(args.start, args.end + 1):
        file_id = f"{n:04d}"
        md_path = root / file_id / f"{file_id}.md"
        if not md_path.exists():
            skipped_missing += 1
            continue

        original = md_path.read_text(encoding="utf-8", errors="replace")

        has_intro = INTRO_LINE_1_TEMPLATE.format(id=file_id) in original
        has_footer = "- 本文来自 oeasy Python 系统教程" in original

        front, body = split_front_matter(original)
        new_text = front + body

        if not has_intro:
            intro_block = build_intro_block(file_id)
            new_text = front + intro_block + body.lstrip("\n")
        else:
            skipped_has_intro += 1

        if not has_footer:
            if not new_text.endswith("\n"):
                new_text += "\n"
            new_text += build_footer_block()
        else:
            skipped_has_footer += 1

        if new_text != original:
            md_path.write_text(new_text, encoding="utf-8")
            changed += 1

    print(
        "done",
        {
            "changed": changed,
            "skipped_missing": skipped_missing,
            "skipped_has_intro": skipped_has_intro,
            "skipped_has_footer": skipped_has_footer,
        },
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

