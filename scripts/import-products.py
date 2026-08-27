#!/usr/bin/env python3
"""Convert OEM product CSV + photos into js/products-data.js."""

from __future__ import annotations

import csv
import json
from collections import OrderedDict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSV_PATH = Path("/Users/simon/Downloads/OEM產品相/商品分類與品牌對照.csv")
OUT_PATH = ROOT / "js" / "products-data.js"

L1_ORDER = ["health", "beauty", "personal-care", "household"]

L1_IDS = {
    "健康": "health",
    "美容": "beauty",
    "個人護理": "personal-care",
    "家居": "household",
}

L2_IDS = {
    "中式保健品及藥油": "chinese-supplements",
    "維他命及礦物質": "vitamins",
    "關節及肌肉": "joints",
    "傷風感冒": "cold",
    "兒童及母嬰": "kids-baby",
    "急救及醫療用品": "first-aid",
    "成人營養": "adult-nutrition",
    "男女士保健品": "mens-womens",
    "敏感肌膚／沐浴護膚": "sensitive-skin",
    "殺蟲驅蚊": "insect",
    "洗衣及家居消毒": "laundry",
    "頭髮護理": "hair",
    "口腔護理": "oral",
}


def stem(filename: str) -> str:
    return filename.rsplit(".", 1)[0]


def main() -> None:
    with CSV_PATH.open(newline="", encoding="utf-8-sig") as handle:
        rows = list(csv.DictReader(handle))

    products: OrderedDict[str, dict] = OrderedDict()
    tree: OrderedDict[str, list[str]] = OrderedDict((key, []) for key in L1_ORDER)

    for row in rows:
        l1_label = row["mannings_category_l1"].strip()
        l2_label = row["mannings_category_l2"].strip()
        l1 = L1_IDS[l1_label]
        l2 = L2_IDS[l2_label]
        if l2 not in tree[l1]:
            tree[l1].append(l2)

        uid = row["product_uuid"]
        index = int(row["image_index"] or "1")
        if uid not in products:
            products[uid] = {
                "id": uid,
                "name": row["product_name"].strip(),
                "brand": row["brand"].strip(),
                "spec": row["spec"].strip(),
                "l1": l1,
                "l2": l2,
                "photo": None,
            }
        if index == 1 or products[uid]["photo"] is None:
            products[uid]["photo"] = "images/products/" + stem(row["filename"])

    missing = [item["id"] for item in products.values() if not item["photo"]]
    if missing:
        raise SystemExit("missing primary photo for: " + ", ".join(missing))

    unknown_l1 = set(L1_IDS.values()) - set(tree)
    extra_l1 = set(tree) - set(L1_IDS.values())
    if unknown_l1 or extra_l1:
        raise SystemExit(f"l1 mismatch {unknown_l1} {extra_l1}")

    payload_tree = [{"id": l1, "children": children} for l1, children in tree.items() if children]
    payload_products = list(products.values())

    body = (
        "const PRODUCT_TREE = "
        + json.dumps(payload_tree, ensure_ascii=False, indent=2)
        + ";\n\nconst PRODUCTS = "
        + json.dumps(payload_products, ensure_ascii=False, indent=2)
        + ";\n"
    )
    OUT_PATH.write_text(body, encoding="utf-8")
    print(f"wrote {OUT_PATH} ({len(payload_products)} products, {len(payload_tree)} l1)")


if __name__ == "__main__":
    main()
