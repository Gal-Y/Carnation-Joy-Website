#!/usr/bin/env python3
"""Build static website from src/ into dist/."""

from __future__ import annotations

import shutil
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
DIST = ROOT / "dist"


def reset_dist() -> None:
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir(parents=True, exist_ok=True)


def copy_tree(src_dir: Path, dst_dir: Path) -> None:
    if not src_dir.exists():
        return
    shutil.copytree(src_dir, dst_dir)


def copy_files(src_dir: Path, dst_dir: Path) -> None:
    if not src_dir.exists():
        return
    dst_dir.mkdir(parents=True, exist_ok=True)
    for path in sorted(src_dir.glob("*")):
        if path.is_file():
            shutil.copy2(path, dst_dir / path.name)


def main() -> None:
    reset_dist()

    # Pages should end up at dist root (e.g. /index.html).
    copy_files(SRC / "pages", DIST)

    # Static root-level files (robots/sitemap, etc.)
    copy_files(SRC / "static", DIST)

    # Asset directories.
    copy_tree(SRC / "css", DIST / "css")
    copy_tree(SRC / "js", DIST / "js")
    copy_tree(SRC / "images", DIST / "images")

    print(f"Built site into: {DIST}")


if __name__ == "__main__":
    main()

