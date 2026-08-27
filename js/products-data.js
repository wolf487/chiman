const PRODUCT_TREE = [
  {
    "id": "health",
    "children": [
      "vitamins",
      "joints",
      "chinese-supplements",
      "cold",
      "mens-womens",
      "adult-nutrition",
      "kids-baby",
      "first-aid"
    ]
  },
  {
    "id": "beauty",
    "children": [
      "sensitive-skin"
    ]
  },
  {
    "id": "personal-care",
    "children": [
      "hair",
      "oral"
    ]
  },
  {
    "id": "household",
    "children": [
      "laundry",
      "insect"
    ]
  }
];

const PRODUCTS = [
  {
    "id": "5acd3b6f-f021-4479-ab82-09accc041e9e",
    "name": "A-1 超高液體鈣加 D3 軟膠囊（100軟膠囊）",
    "brand": "A-1（CRCM）",
    "spec": "100軟膠囊",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/5acd3b6f-f021-4479-ab82-09accc041e9e"
  },
  {
    "id": "c35a8d56-2c99-40e3-b940-7c34ec756eed",
    "name": "A-1 超高液體鈣加 D3 軟膠囊（300軟膠囊）",
    "brand": "A-1（CRCM）",
    "spec": "300軟膠囊",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/c35a8d56-2c99-40e3-b940-7c34ec756eed"
  },
  {
    "id": "e835c0c1-da56-44f4-ad0e-735e64438aba",
    "name": "JACKSON SUPER B-Co+C（100tabs）",
    "brand": "JACKSON 美國積信",
    "spec": "100tabs",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/e835c0c1-da56-44f4-ad0e-735e64438aba"
  },
  {
    "id": "108559fd-e6b7-411a-9b87-634f2e8bdb97",
    "name": "JACKSON Super-Lecithin 卵磷脂（100caps）",
    "brand": "JACKSON 美國積信",
    "spec": "100caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/108559fd-e6b7-411a-9b87-634f2e8bdb97"
  },
  {
    "id": "20253651-72e1-4b74-a5f8-665ec5f0c588",
    "name": "JACKSON 深海魚油精 Alaskan Fish Oil（100caps）",
    "brand": "JACKSON 美國積信",
    "spec": "100caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/20253651-72e1-4b74-a5f8-665ec5f0c588"
  },
  {
    "id": "9289dd51-7d88-4a92-bea4-d91b56e5ee75",
    "name": "JACKSON 維他命 C500（100tabs）",
    "brand": "JACKSON 美國積信",
    "spec": "100tabs",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/9289dd51-7d88-4a92-bea4-d91b56e5ee75"
  },
  {
    "id": "3bbea890-86f0-4743-a866-a2c1630ad926",
    "name": "JACKSON 維他命 E400（100caps）",
    "brand": "JACKSON 美國積信",
    "spec": "100caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/3bbea890-86f0-4743-a866-a2c1630ad926"
  },
  {
    "id": "93889097-3eb4-495a-b152-241130ae6fcf",
    "name": "JACKSON 鈣加 D3（100tabs）",
    "brand": "JACKSON 美國積信",
    "spec": "100tabs",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/93889097-3eb4-495a-b152-241130ae6fcf"
  },
  {
    "id": "7eed0230-a429-4e97-ad5f-c15367411751",
    "name": "JACKSON 魚肝油丸 Cod Liver Oil（300caps）",
    "brand": "JACKSON 美國積信",
    "spec": "300caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/7eed0230-a429-4e97-ad5f-c15367411751"
  },
  {
    "id": "8568821a-294b-4703-b30b-255da39bbfda",
    "name": "德國A-1 Aigozoil 強力利石素（150caps）",
    "brand": "德國 A-1（CRCM）",
    "spec": "150caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/8568821a-294b-4703-b30b-255da39bbfda"
  },
  {
    "id": "b6af055c-593f-45c3-aad9-9465cd0f0be2",
    "name": "德國A-1 Aigozoil 強力利石素（60caps）",
    "brand": "德國 A-1（CRCM）",
    "spec": "60caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/b6af055c-593f-45c3-aad9-9465cd0f0be2"
  },
  {
    "id": "79d50490-faa1-4fcc-ac83-8e75834ed147",
    "name": "德國A-1 Blancelsen 刺蝟素（60caps）",
    "brand": "德國 A-1（CRCM）",
    "spec": "60caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/79d50490-faa1-4fcc-ac83-8e75834ed147"
  },
  {
    "id": "5d440619-9614-4889-b105-0b1530e38c1a",
    "name": "德國A-1 Cunzityer 胰母健（60caps）",
    "brand": "德國 A-1（CRCM）",
    "spec": "60caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/5d440619-9614-4889-b105-0b1530e38c1a"
  },
  {
    "id": "3632ba05-6da6-4ccd-a9c1-662fb3599e8c",
    "name": "德國A-1 Goyacial 強力清肝素（60caps）",
    "brand": "德國 A-1（CRCM）",
    "spec": "60caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/3632ba05-6da6-4ccd-a9c1-662fb3599e8c"
  },
  {
    "id": "7a53de8f-464b-453c-a1f4-ab0a1605c411",
    "name": "德國A-1 Nioizoril 強力脈通（150caps）",
    "brand": "德國 A-1（CRCM）",
    "spec": "150caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/7a53de8f-464b-453c-a1f4-ab0a1605c411"
  },
  {
    "id": "d498d85c-f909-4ad9-8c98-ec4dc4867a4f",
    "name": "德國A-1 Nioizoril 強力脈通（60caps）",
    "brand": "德國 A-1（CRCM）",
    "spec": "60caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/d498d85c-f909-4ad9-8c98-ec4dc4867a4f"
  },
  {
    "id": "a76b8542-108e-4f9e-94a2-f8a356d966e1",
    "name": "德國A-1 Rinozopan 強力腦活素（150caps）",
    "brand": "德國 A-1（CRCM）",
    "spec": "150caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/a76b8542-108e-4f9e-94a2-f8a356d966e1"
  },
  {
    "id": "28ddc189-8564-4ea4-b956-ae0ebe94f984",
    "name": "德國A-1 Rinozopan 強力腦活素（60caps）",
    "brand": "德國 A-1（CRCM）",
    "spec": "60caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/28ddc189-8564-4ea4-b956-ae0ebe94f984"
  },
  {
    "id": "251781b6-70ec-46ea-9304-2b158e75fc8e",
    "name": "德國古堡 心腦脈通（60caps）",
    "brand": "GERMTLE 德國古堡",
    "spec": "60caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/251781b6-70ec-46ea-9304-2b158e75fc8e"
  },
  {
    "id": "04ca44d3-0d77-45d6-b3e0-f526110cda00",
    "name": "德國古堡 消石素（100caps）",
    "brand": "GERMTLE 德國古堡",
    "spec": "100caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/04ca44d3-0d77-45d6-b3e0-f526110cda00"
  },
  {
    "id": "c92fa0c2-b22b-4883-bbe8-b86b86b69478",
    "name": "德國古堡 腦活素 CoQ10 & Ginkgo（100softgels）",
    "brand": "GERMTLE 德國古堡",
    "spec": "100softgels",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/c92fa0c2-b22b-4883-bbe8-b86b86b69478"
  },
  {
    "id": "6227448b-6566-4b82-be1c-b87dfd809ec9",
    "name": "德國古堡 護肝寶 Milk Thistle（60caps）",
    "brand": "GERMTLE 德國古堡",
    "spec": "60caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/6227448b-6566-4b82-be1c-b87dfd809ec9"
  },
  {
    "id": "919afa62-6618-46af-8e3d-70a5b1500fef",
    "name": "德國古堡 鈣鎂鋅 100tabs",
    "brand": "GERMTLE 德國古堡",
    "spec": "100tabs",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/919afa62-6618-46af-8e3d-70a5b1500fef"
  },
  {
    "id": "f41fe347-335b-45c1-96ec-9884cd5fe2dd",
    "name": "美國A-1 免疫球蛋白 Immunoglobulins 500mg（100caps）",
    "brand": "美國 A-1（CRCM）",
    "spec": "100caps",
    "l1": "health",
    "l2": "vitamins",
    "photo": "images/products/f41fe347-335b-45c1-96ec-9884cd5fe2dd"
  },
  {
    "id": "6d1d269c-ed26-4915-aa12-81a14ce65376",
    "name": "A-1 GLUCO + CHONDROITIN 1500（60tabs）",
    "brand": "A-1（CRCM）",
    "spec": "60tabs",
    "l1": "health",
    "l2": "joints",
    "photo": "images/products/6d1d269c-ed26-4915-aa12-81a14ce65376"
  },
  {
    "id": "f5e1c2aa-60c6-4d48-a656-f408c9eee035",
    "name": "A-1 MIC水解素 膠原蛋白 MSM 軟骨素（90caps）",
    "brand": "A-1（CRCM）",
    "spec": "90caps",
    "l1": "health",
    "l2": "joints",
    "photo": "images/products/f5e1c2aa-60c6-4d48-a656-f408c9eee035"
  },
  {
    "id": "35eaa681-ad89-40d5-ae47-6631c50c4477",
    "name": "A-1 Snaikoza 強力筋骨通絡透骨布 10片",
    "brand": "A-1 Snaikoza",
    "spec": "10片",
    "l1": "health",
    "l2": "joints",
    "photo": "images/products/35eaa681-ad89-40d5-ae47-6631c50c4477"
  },
  {
    "id": "ee950303-11dd-428a-b061-021f5abf3732",
    "name": "A-1 活節靈 鎮痛貼 10片",
    "brand": "A-1（CRCM）",
    "spec": "10片",
    "l1": "health",
    "l2": "joints",
    "photo": "images/products/ee950303-11dd-428a-b061-021f5abf3732"
  },
  {
    "id": "78c458db-8262-4adf-8a4a-e958312ed074",
    "name": "A-1 關節修護啫喱 Glucosamine 100ml",
    "brand": "A-1（CRCM）",
    "spec": "100ml",
    "l1": "health",
    "l2": "joints",
    "photo": "images/products/78c458db-8262-4adf-8a4a-e958312ed074"
  },
  {
    "id": "c5d7e10b-18de-4e87-8795-df8b1c4fcb93",
    "name": "公牛王 追風活絡透骨膏 15片",
    "brand": "公牛王",
    "spec": "15片",
    "l1": "health",
    "l2": "joints",
    "photo": "images/products/c5d7e10b-18de-4e87-8795-df8b1c4fcb93_01"
  },
  {
    "id": "9d5ca473-35aa-4fb4-9db1-5e5547a12812",
    "name": "德國A-1 Snaikoza 強力筋骨通絡素（150caps）",
    "brand": "德國 A-1（CRCM）",
    "spec": "150caps",
    "l1": "health",
    "l2": "joints",
    "photo": "images/products/9d5ca473-35aa-4fb4-9db1-5e5547a12812"
  },
  {
    "id": "66b5e06d-c157-4711-a373-2b1a7ea2b56e",
    "name": "德國A-1 Snaikoza 強力筋骨通絡素（60caps）",
    "brand": "德國 A-1（CRCM）",
    "spec": "60caps",
    "l1": "health",
    "l2": "joints",
    "photo": "images/products/66b5e06d-c157-4711-a373-2b1a7ea2b56e"
  },
  {
    "id": "55e71705-ce9f-4a28-8993-890609316d34",
    "name": "德國古堡 補骨素 Glucosamine（60tabs）",
    "brand": "GERMTLE 德國古堡",
    "spec": "60tabs",
    "l1": "health",
    "l2": "joints",
    "photo": "images/products/55e71705-ce9f-4a28-8993-890609316d34"
  },
  {
    "id": "03e3ebae-8e10-4cb2-9373-58732d61e479",
    "name": "德國古堡 降酸靈 Devil's Claw（60caps）",
    "brand": "GERMTLE 德國古堡",
    "spec": "60caps",
    "l1": "health",
    "l2": "joints",
    "photo": "images/products/03e3ebae-8e10-4cb2-9373-58732d61e479"
  },
  {
    "id": "5e9752cf-6954-4b52-bb6e-fda1c2d9ab2a",
    "name": "德國古堡 骨康寶 Chondroitin（60caps）",
    "brand": "GERMTLE 德國古堡",
    "spec": "60caps",
    "l1": "health",
    "l2": "joints",
    "photo": "images/products/5e9752cf-6954-4b52-bb6e-fda1c2d9ab2a"
  },
  {
    "id": "50a08821-fea1-4b36-ab94-1e22e4097b75",
    "name": "生春堂 消腫透骨膏 10片",
    "brand": "生春堂 SHENG CHUN TANG",
    "spec": "10片",
    "l1": "health",
    "l2": "joints",
    "photo": "images/products/50a08821-fea1-4b36-ab94-1e22e4097b75"
  },
  {
    "id": "bfb3e2aa-d1d0-4a11-9e95-91682c01843e",
    "name": "痠痛敵 特效鎮痛膏 KENDOFLAN 100g",
    "brand": "痠痛敵 KENDOFLAN",
    "spec": "100g",
    "l1": "health",
    "l2": "joints",
    "photo": "images/products/bfb3e2aa-d1d0-4a11-9e95-91682c01843e_01"
  },
  {
    "id": "97378772-b661-4fa1-b5a6-f703fb433097",
    "name": "A-1 安宮牛黃丸",
    "brand": "A-1（CRCM）",
    "spec": "",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/97378772-b661-4fa1-b5a6-f703fb433097"
  },
  {
    "id": "516706e9-c6d8-427b-88f9-c04c5e9efeff",
    "name": "公牛王 刺骨靈油 45g",
    "brand": "公牛王",
    "spec": "45g",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/516706e9-c6d8-427b-88f9-c04c5e9efeff_01"
  },
  {
    "id": "9d3dbefe-44e5-4429-b66b-8fe5098d2f92",
    "name": "公牛王 千里追風油 45g",
    "brand": "公牛王",
    "spec": "45g",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/9d3dbefe-44e5-4429-b66b-8fe5098d2f92_01"
  },
  {
    "id": "c5e29d62-426f-4923-9664-e64e2f77ea53",
    "name": "公牛王 四季平安膏 12瓶",
    "brand": "公牛王",
    "spec": "",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/c5e29d62-426f-4923-9664-e64e2f77ea53"
  },
  {
    "id": "b35a286d-2d23-4293-b760-b7a9efc39490",
    "name": "公牛王 杜仲牛膝油 45g",
    "brand": "公牛王",
    "spec": "45g",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/b35a286d-2d23-4293-b760-b7a9efc39490"
  },
  {
    "id": "4e8b1d98-1f17-4270-9b0f-3c9ba87722bc",
    "name": "公牛王 正紅花油 45g",
    "brand": "公牛王",
    "spec": "45g",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/4e8b1d98-1f17-4270-9b0f-3c9ba87722bc_01"
  },
  {
    "id": "e88c466c-f277-4ada-ad68-6435afdccdae",
    "name": "公牛王 活絡油 48g",
    "brand": "公牛王",
    "spec": "48g",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/e88c466c-f277-4ada-ad68-6435afdccdae_01"
  },
  {
    "id": "94742041-be47-44b9-85b2-87440d384309",
    "name": "公牛王 獅油 Lion Oil 45g",
    "brand": "公牛王",
    "spec": "45g",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/94742041-be47-44b9-85b2-87440d384309_01"
  },
  {
    "id": "2bc12ca9-474c-4c88-b5eb-3e7574f7e63c",
    "name": "公牛王 破痛油 45g",
    "brand": "公牛王",
    "spec": "45g",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/2bc12ca9-474c-4c88-b5eb-3e7574f7e63c_01"
  },
  {
    "id": "a2100395-3f2d-4e1e-a748-f60bb34a62a5",
    "name": "公牛王 萬應莪木油 Minyak Gosok",
    "brand": "公牛王",
    "spec": "",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/a2100395-3f2d-4e1e-a748-f60bb34a62a5"
  },
  {
    "id": "79d60b25-1d93-400d-b099-24481edbdfe3",
    "name": "公牛王 頸腰椎生骨靈油 45g",
    "brand": "公牛王",
    "spec": "45g",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/79d60b25-1d93-400d-b099-24481edbdfe3_01"
  },
  {
    "id": "dce6280f-2868-45df-a171-04140b49fae4",
    "name": "公牛王 驅風油",
    "brand": "公牛王",
    "spec": "",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/dce6280f-2868-45df-a171-04140b49fae4"
  },
  {
    "id": "239e7def-f772-4b4d-8257-2e8c273e5839",
    "name": "公牛王 黑鬼油 45g",
    "brand": "公牛王",
    "spec": "45g",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/239e7def-f772-4b4d-8257-2e8c273e5839_01"
  },
  {
    "id": "20edee14-85d0-4021-98b6-d63dd6b1dffe",
    "name": "奔雷豹 正獅子油 45ml",
    "brand": "奔雷豹 BUN LUI",
    "spec": "45ml",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/20edee14-85d0-4021-98b6-d63dd6b1dffe_01"
  },
  {
    "id": "da883250-d1db-48f8-9251-03acb2851418",
    "name": "奔雷豹 正紅花油 45ml",
    "brand": "奔雷豹 BUN LUI",
    "spec": "45ml",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/da883250-d1db-48f8-9251-03acb2851418_01"
  },
  {
    "id": "fcf456b9-8816-4a2d-a1c1-ec7e770f7aae",
    "name": "奔雷豹 正骨腰痺靈 45ml",
    "brand": "奔雷豹 BUN LUI（新寶藥業代理）",
    "spec": "45ml",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/fcf456b9-8816-4a2d-a1c1-ec7e770f7aae_01"
  },
  {
    "id": "9d38e540-a8f0-404a-a21c-f36e714157ad",
    "name": "奔雷豹 正黑鬼油 45ml",
    "brand": "奔雷豹 BUN LUI",
    "spec": "45ml",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/9d38e540-a8f0-404a-a21c-f36e714157ad_01"
  },
  {
    "id": "a9913122-ab51-4aa8-9fd7-df1dd86b871c",
    "name": "奔雷豹 活絡油 45ml／50ml BUN LUI",
    "brand": "奔雷豹 BUN LUI（華星製藥）",
    "spec": "45ml",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/a9913122-ab51-4aa8-9fd7-df1dd86b871c_01"
  },
  {
    "id": "e3e0b05f-176e-48b6-a2e3-95d82d881ba4",
    "name": "奔雷豹 活絡油 45ml／50ml BUN LUI",
    "brand": "奔雷豹 BUN LUI（華星製藥）",
    "spec": "50ml",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/e3e0b05f-176e-48b6-a2e3-95d82d881ba4"
  },
  {
    "id": "cb9d9fb4-da9e-4420-bfdb-61dc29478b3d",
    "name": "奔雷豹 破痛油 45ml",
    "brand": "奔雷豹 BUN LUI",
    "spec": "45ml",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/cb9d9fb4-da9e-4420-bfdb-61dc29478b3d_01"
  },
  {
    "id": "9ff36428-8e7b-4ca8-967d-f2ed98cf053c",
    "name": "奔雷豹 透骨千里追風油 45ml",
    "brand": "奔雷豹 BUN LUI",
    "spec": "45ml",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/9ff36428-8e7b-4ca8-967d-f2ed98cf053c_01"
  },
  {
    "id": "5ad74d4e-aab7-43e4-b226-c3ff6f9b7d6e",
    "name": "新寶藥業 阿膠 500g",
    "brand": "新寶藥業",
    "spec": "500g",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/5ad74d4e-aab7-43e4-b226-c3ff6f9b7d6e"
  },
  {
    "id": "b0657d5a-0461-4ad9-90c2-53257bc58cd7",
    "name": "日本強力雙囍救心丹（100粒）",
    "brand": "日本東洋會社",
    "spec": "100粒",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/b0657d5a-0461-4ad9-90c2-53257bc58cd7"
  },
  {
    "id": "29e02ddd-dec1-44b9-a41f-6cc88dc93014",
    "name": "日本強力雙囍救心丹（200粒）",
    "brand": "日本東洋會社",
    "spec": "200粒",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/29e02ddd-dec1-44b9-a41f-6cc88dc93014"
  },
  {
    "id": "c6f55f85-0b5b-4455-a5d2-8b5d262bdf1b",
    "name": "日本強力雙囍救心丹（50粒）",
    "brand": "日本東洋會社",
    "spec": "50粒",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/c6f55f85-0b5b-4455-a5d2-8b5d262bdf1b"
  },
  {
    "id": "1576db21-df8c-4dfa-a951-7f4949accd5d",
    "name": "日本極品 冬蟲夏草",
    "brand": "日本極品（日本製造）",
    "spec": "",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/1576db21-df8c-4dfa-a951-7f4949accd5d"
  },
  {
    "id": "8a93fb3c-7dcb-49f2-b79f-211c503d15d8",
    "name": "日本極品 靈芝孢子",
    "brand": "日本極品（日本製造）",
    "spec": "",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/8a93fb3c-7dcb-49f2-b79f-211c503d15d8"
  },
  {
    "id": "2a7c7a11-22a3-420e-8b6b-aa8ab21f4cc2",
    "name": "益安寧丸（舊裝／新裝）",
    "brand": "新寶藥業／同溢藥業",
    "spec": "舊裝",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/2a7c7a11-22a3-420e-8b6b-aa8ab21f4cc2"
  },
  {
    "id": "7b7360f0-b6eb-419c-b2b3-c606a901a8e9",
    "name": "益安寧丸（舊裝／新裝）",
    "brand": "新寶藥業／同溢藥業",
    "spec": "新裝",
    "l1": "health",
    "l2": "chinese-supplements",
    "photo": "images/products/7b7360f0-b6eb-419c-b2b3-c606a901a8e9"
  },
  {
    "id": "f2e924fc-6c93-406d-a62c-cabe4dab3c0b",
    "name": "A1-EX 小兒感冒素 120ml",
    "brand": "A1-EX",
    "spec": "120ml",
    "l1": "health",
    "l2": "cold",
    "photo": "images/products/f2e924fc-6c93-406d-a62c-cabe4dab3c0b_01"
  },
  {
    "id": "2034719a-eda4-44a7-bea9-c8bc593e65dc",
    "name": "MediLife 治喉速 草本潤喉糖 EXTRA 30粒",
    "brand": "MediLife 醫健活",
    "spec": "30粒",
    "l1": "health",
    "l2": "cold",
    "photo": "images/products/2034719a-eda4-44a7-bea9-c8bc593e65dc"
  },
  {
    "id": "6f4d16dd-c225-40f0-be3e-407b3b67c1f4",
    "name": "德國A-1 Flansoyzer 強力氣敏靜（60caps）",
    "brand": "德國 A-1（CRCM）",
    "spec": "60caps",
    "l1": "health",
    "l2": "cold",
    "photo": "images/products/6f4d16dd-c225-40f0-be3e-407b3b67c1f4"
  },
  {
    "id": "40d3ec31-6d93-4136-b820-c7aaf0c59fd3",
    "name": "德國A-1 Panyenily 強力鼻達清（60caps）",
    "brand": "德國 A-1（CRCM）",
    "spec": "60caps",
    "l1": "health",
    "l2": "cold",
    "photo": "images/products/40d3ec31-6d93-4136-b820-c7aaf0c59fd3"
  },
  {
    "id": "7257e61b-7226-48e6-b9dd-6cd2fdea31ce",
    "name": "德國古堡 咳喘靈（60caps）",
    "brand": "GERMTLE 德國古堡",
    "spec": "60caps",
    "l1": "health",
    "l2": "cold",
    "photo": "images/products/7257e61b-7226-48e6-b9dd-6cd2fdea31ce"
  },
  {
    "id": "8b20cc9a-f761-40b7-a3fd-169537bc05ac",
    "name": "德國古堡 鼻敏清 接骨木（60softgels）",
    "brand": "GERMTLE 德國古堡",
    "spec": "60softgels",
    "l1": "health",
    "l2": "cold",
    "photo": "images/products/8b20cc9a-f761-40b7-a3fd-169537bc05ac"
  },
  {
    "id": "babb33a5-9b61-4795-89fc-4b89ceb51859",
    "name": "治威速 速效傷風感冒止咳素 10粒",
    "brand": "治威速（VICKMANS USA）",
    "spec": "10粒",
    "l1": "health",
    "l2": "cold",
    "photo": "images/products/babb33a5-9b61-4795-89fc-4b89ceb51859"
  },
  {
    "id": "509f3334-9dc3-4d26-a257-3c8f7f69265a",
    "name": "德國A-1 Karaniso 強力前列腺路靈（60caps）",
    "brand": "德國 A-1（CRCM）",
    "spec": "60caps",
    "l1": "health",
    "l2": "mens-womens",
    "photo": "images/products/509f3334-9dc3-4d26-a257-3c8f7f69265a"
  },
  {
    "id": "45d93d8a-b255-4d8a-8d8c-1d8c3339b27d",
    "name": "維健堡 活關節 高鈣脫脂奶粉 JOINT CARE",
    "brand": "Kalvits Health 維健堡",
    "spec": "",
    "l1": "health",
    "l2": "adult-nutrition",
    "photo": "images/products/45d93d8a-b255-4d8a-8d8c-1d8c3339b27d"
  },
  {
    "id": "8f5eb6d7-34f1-4ee2-852d-46341b05dd07",
    "name": "兒童鈣鎂鋅 小熊咀嚼片 100tabs",
    "brand": "（包裝未標大品牌，德國製造）",
    "spec": "100tabs",
    "l1": "health",
    "l2": "kids-baby",
    "photo": "images/products/8f5eb6d7-34f1-4ee2-852d-46341b05dd07"
  },
  {
    "id": "e569e7f0-8308-4c90-a93f-a15e0eaf48ca",
    "name": "張一龍 七星茶 輕糖顆粒沖劑 20包",
    "brand": "張一龍",
    "spec": "20包",
    "l1": "health",
    "l2": "kids-baby",
    "photo": "images/products/e569e7f0-8308-4c90-a93f-a15e0eaf48ca"
  },
  {
    "id": "de7d35ec-30ac-4f6f-b881-ce569233ccda",
    "name": "張一龍 開奶茶 輕糖顆粒沖劑 20包",
    "brand": "張一龍",
    "spec": "20包",
    "l1": "health",
    "l2": "kids-baby",
    "photo": "images/products/de7d35ec-30ac-4f6f-b881-ce569233ccda"
  },
  {
    "id": "8d522053-19fd-4254-83be-2f1640d53a21",
    "name": "德國古堡 兒童鈣鎂鋅（100tabs）",
    "brand": "GERMTLE 德國古堡",
    "spec": "100tabs",
    "l1": "health",
    "l2": "kids-baby",
    "photo": "images/products/8d522053-19fd-4254-83be-2f1640d53a21"
  },
  {
    "id": "a2a35d1e-7f29-4f45-8f84-1897552e6d88",
    "name": "德國古堡 奧米加3 DHA鈣 咀嚼魚油（60softgels）",
    "brand": "GERMTLE 德國古堡",
    "spec": "60softgels",
    "l1": "health",
    "l2": "kids-baby",
    "photo": "images/products/a2a35d1e-7f29-4f45-8f84-1897552e6d88"
  },
  {
    "id": "2f659b76-52d8-4efd-b056-49e1bdda8a23",
    "name": "A-1 防水透氣膠布 100片",
    "brand": "A-1（CRCM）",
    "spec": "100片",
    "l1": "health",
    "l2": "first-aid",
    "photo": "images/products/2f659b76-52d8-4efd-b056-49e1bdda8a23"
  },
  {
    "id": "2d42bd68-a969-45d3-a552-dd02570d1a44",
    "name": "A-1 薑皇 傳統古方生薑洗髮乳 900ml",
    "brand": "A-1（CRCM）薑皇",
    "spec": "900ml",
    "l1": "personal-care",
    "l2": "hair",
    "photo": "images/products/2d42bd68-a969-45d3-a552-dd02570d1a44"
  },
  {
    "id": "11e0b304-74ae-409a-affb-ff3c388952b1",
    "name": "A-1 適特療去屑去癢洗髮露 250ml",
    "brand": "A-1 適特療",
    "spec": "250ml",
    "l1": "personal-care",
    "l2": "hair",
    "photo": "images/products/11e0b304-74ae-409a-affb-ff3c388952b1"
  },
  {
    "id": "1d056f5e-ba56-459a-99c9-e16ceab67cc3",
    "name": "A-1 柔潤橄欖油 90ml",
    "brand": "A-1 Essential",
    "spec": "90ml",
    "l1": "beauty",
    "l2": "sensitive-skin",
    "photo": "images/products/1d056f5e-ba56-459a-99c9-e16ceab67cc3"
  },
  {
    "id": "14c010f5-3c6f-4804-b1dc-59b4aca6ad16",
    "name": "A-1 柔潤精華甘油 90ml",
    "brand": "A-1 Essential",
    "spec": "90ml",
    "l1": "beauty",
    "l2": "sensitive-skin",
    "photo": "images/products/14c010f5-3c6f-4804-b1dc-59b4aca6ad16"
  },
  {
    "id": "3024a7d4-c7d1-4178-9a4b-dbdc64951494",
    "name": "A-1 適特療松焦沐浴露 Pine Tar（1000ml）",
    "brand": "A-1 適特療",
    "spec": "1000ml",
    "l1": "beauty",
    "l2": "sensitive-skin",
    "photo": "images/products/3024a7d4-c7d1-4178-9a4b-dbdc64951494"
  },
  {
    "id": "fd2a0098-71e9-4197-9b5f-9f82ed1638b0",
    "name": "A-1 適特療松焦沐浴露 Pine Tar（500ml）",
    "brand": "A-1 適特療",
    "spec": "500ml",
    "l1": "beauty",
    "l2": "sensitive-skin",
    "photo": "images/products/fd2a0098-71e9-4197-9b5f-9f82ed1638b0"
  },
  {
    "id": "1abc0b8d-e04e-47de-9db8-984cd4124a31",
    "name": "A-1 適特療潤膚露 Dry Skin Therapy（100ml）",
    "brand": "A-1 適特療",
    "spec": "100ml",
    "l1": "beauty",
    "l2": "sensitive-skin",
    "photo": "images/products/1abc0b8d-e04e-47de-9db8-984cd4124a31"
  },
  {
    "id": "330dddda-6eb2-47dc-bbcf-bca3c5d59836",
    "name": "A-1 適特療潤膚露 Dry Skin Therapy（500ml）",
    "brand": "A-1 適特療",
    "spec": "500ml",
    "l1": "beauty",
    "l2": "sensitive-skin",
    "photo": "images/products/330dddda-6eb2-47dc-bbcf-bca3c5d59836"
  },
  {
    "id": "0a9303ba-3d26-4f97-a21f-12396de6edd8",
    "name": "FASELING 凡士林 Petroleum Jelly 100g",
    "brand": "FASELING",
    "spec": "100g",
    "l1": "beauty",
    "l2": "sensitive-skin",
    "photo": "images/products/0a9303ba-3d26-4f97-a21f-12396de6edd8"
  },
  {
    "id": "54690866-63f8-49dd-a380-7c69c9746b1e",
    "name": "Perio Anti-Plaque 漱口水",
    "brand": "Perio（西班牙）",
    "spec": "",
    "l1": "personal-care",
    "l2": "oral",
    "photo": "images/products/54690866-63f8-49dd-a380-7c69c9746b1e"
  },
  {
    "id": "82a8b49a-1a80-472a-95ec-b6edd06e66b9",
    "name": "A-1 低泡超濃縮洗衣粉 2.5kg",
    "brand": "A-1（CRCM）",
    "spec": "2.5kg",
    "l1": "household",
    "l2": "laundry",
    "photo": "images/products/82a8b49a-1a80-472a-95ec-b6edd06e66b9"
  },
  {
    "id": "4089d95a-44da-45a2-8beb-1a7580056ecf",
    "name": "A-1 衣物家居消毒液 2000ml",
    "brand": "A-1（CRCM）",
    "spec": "2000ml",
    "l1": "household",
    "l2": "laundry",
    "photo": "images/products/4089d95a-44da-45a2-8beb-1a7580056ecf"
  },
  {
    "id": "1abf5b6c-bc3e-4a42-a91e-c493d7736e0d",
    "name": "SHOW 驅蚊綠水 全能消毒清潔劑 4000ml",
    "brand": "SHOW",
    "spec": "4000ml",
    "l1": "household",
    "l2": "laundry",
    "photo": "images/products/1abf5b6c-bc3e-4a42-a91e-c493d7736e0d"
  },
  {
    "id": "6a0f2c02-2695-459a-a1dd-f07bb936b5a3",
    "name": "兔潔靈 超濃縮洗衣粉 2.5kg",
    "brand": "兔潔靈 the CLEAN POWER",
    "spec": "2.5kg",
    "l1": "household",
    "l2": "laundry",
    "photo": "images/products/6a0f2c02-2695-459a-a1dd-f07bb936b5a3"
  },
  {
    "id": "57766b37-ae93-4bc4-892a-2bcf024b8c7d",
    "name": "A-1 液體電熱驅蚊液 45夜",
    "brand": "A-1（CRCM）",
    "spec": "45夜",
    "l1": "household",
    "l2": "insect",
    "photo": "images/products/57766b37-ae93-4bc4-892a-2bcf024b8c7d"
  },
  {
    "id": "a06bfe47-7630-49b2-be24-83f54cedb758",
    "name": "A-1 滅蚊貼驅蚊貼",
    "brand": "A-1（CRCM）",
    "spec": "",
    "l1": "household",
    "l2": "insect",
    "photo": "images/products/a06bfe47-7630-49b2-be24-83f54cedb758"
  },
  {
    "id": "2d19d6ba-2197-4a67-a14e-d05099aa9211",
    "name": "A-1 煙霧殺蟲劑 20g",
    "brand": "A-1（CRCM）",
    "spec": "20g",
    "l1": "household",
    "l2": "insect",
    "photo": "images/products/2d19d6ba-2197-4a67-a14e-d05099aa9211"
  },
  {
    "id": "efa4674e-a503-4092-8779-916841a8e47f",
    "name": "A-1 蕃茄紅素驅蚊噴霧 100ml",
    "brand": "A-1（CRCM）",
    "spec": "100ml",
    "l1": "household",
    "l2": "insect",
    "photo": "images/products/efa4674e-a503-4092-8779-916841a8e47f"
  },
  {
    "id": "1dc80454-e390-495d-a4f4-395b914fe7b3",
    "name": "A-1 貫死無生 殺蟲噴霧",
    "brand": "A-1（CRCM）",
    "spec": "",
    "l1": "household",
    "l2": "insect",
    "photo": "images/products/1dc80454-e390-495d-a4f4-395b914fe7b3"
  },
  {
    "id": "36f4c92c-a903-4c45-a28b-00e89392a2e0",
    "name": "迅速瞬殺 滅蟲噴霧",
    "brand": "迅速瞬殺",
    "spec": "",
    "l1": "household",
    "l2": "insect",
    "photo": "images/products/36f4c92c-a903-4c45-a28b-00e89392a2e0"
  }
];
