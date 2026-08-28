const LANGS = [
  { id: "zh-Hant", short: "繁" },
  { id: "zh-Hans", short: "简" },
  { id: "en", short: "EN" },
];

const STORAGE_KEY = "chiman-lang";
const DEFAULT_LANG = "zh-Hant";

function defineMessages(rows) {
  const out = { "zh-Hant": {}, "zh-Hans": {}, en: {} };
  for (const [key, zhHant, zhHans, en] of rows) {
    out["zh-Hant"][key] = zhHant;
    out["zh-Hans"][key] = zhHans;
    out.en[key] = en;
  }
  return out;
}

const MESSAGES = defineMessages([
  ["lang.label", "語言", "语言", "Language"],
  ["nav.main", "主要", "主要", "Main"],
  ["nav.home", "首頁", "首页", "Home"],
  ["nav.products", "產品", "产品", "Products"],
  ["nav.services", "服務", "服务", "Services"],
  ["nav.branches", "分店", "分店", "Stores"],

  ["title.home", "智文藥房 Chi Man Pharmacy", "智文药房 Chi Man Pharmacy", "Chi Man Pharmacy"],
  [
    "meta.home",
    "智文藥房開業於2002年，香港 6 間分店遍佈屯門、元朗、沙田、慈雲山及旺角。中西成藥、配藥及藥物咨詢。",
    "智文药房开业于2002年，香港 6 间分店遍布屯门、元朗、沙田、慈云山及旺角。中西成药、配药及药物咨询。",
    "Chi Man Pharmacy, since 2002. Six Hong Kong shops in Tuen Mun, Yuen Long, Sha Tin, Tsz Wan Shan, and Mong Kok. Chinese and Western medicines, dispensing, and medication advice.",
  ],
  ["title.services", "服務｜智文藥房", "服务｜智文药房", "Services | Chi Man Pharmacy"],
  [
    "meta.services",
    "智文藥房提供配藥、中西成藥、藥物咨詢，以及關懷貼心計劃與智安康健康服務。",
    "智文药房提供配药、中西成药、药物咨询，以及关怀贴心计划与智安康健康服务。",
    "Chi Man Pharmacy offers dispensing, Chinese and Western medicines, medication advice, community care, and Chi On Hong health services.",
  ],
  ["title.products", "產品｜智文藥房", "产品｜智文药房", "Products | Chi Man Pharmacy"],
  [
    "meta.products",
    "智文藥房產品目錄。中西成藥、保健品同日常用品。",
    "智文药房产品目录。中西成药、保健品和日常用品。",
    "Chi Man Pharmacy product catalog. Chinese and Western medicines, supplements, and daily essentials.",
  ],
  ["title.branches", "分店｜智文藥房", "分店｜智文药房", "Stores | Chi Man Pharmacy"],
  [
    "meta.branches",
    "智文藥房、智文大藥房、智文．美妝．生活百貨及國民大藥房分店地址同電話。",
    "智文药房、智文大药房、智文．美妆．生活百货及国民大药房分店地址和电话。",
    "Addresses and phone numbers for Chi Man Pharmacy, Chi Man Dispensary, Chi Man Beauty & Lifestyle, and National Pharmacy.",
  ],
  ["title.products", "產品｜智文藥房", "产品｜智文药房", "Products | Chi Man Pharmacy"],
  [
    "meta.products",
    "智文藥房自家品牌及代理產品：保健、美妝、個人護理及家居用品。",
    "智文药房自家品牌及代理产品：保健、美妆、个人护理及家居用品。",
    "Chi Man Pharmacy house brands and distributed products: health, beauty, personal care, and household.",
  ],

  ["home.badge", "開業於 2002 · 智文與你常在", "开业于 2002 · 智文与你常在", "Since 2002 · Chi Man, always with you"],
  ["home.title", "智文藥房", "智文药房", "Chi Man Pharmacy"],
  [
    "home.lead",
    "中西成藥、配藥、藥物咨詢。鄰近社區，方便配藥同買日常用品。",
    "中西成药、配药、药物咨询。邻近社区，方便配药和购买日常用品。",
    "Chinese and Western medicines, prescription dispensing, and medication advice. Neighbourhood pharmacies for your prescriptions and daily essentials.",
  ],
  ["home.ctaBranches", "睇分店", "查看分店", "Find a store"],
  ["home.ctaServices", "睇服務", "查看服务", "See services"],
  ["home.aboutTitle", "關於我們", "关于我们", "About us"],
  [
    "home.aboutLead",
    "智文藥房 2002 年於香港開業，至今已有二十幾年。於2023 旗下新增加品牌「國民藥房」，全港共有6間分店，遍佈屯門、元朗、沙田、慈雲山同旺角，服務街坊同訪港旅客。我哋以多元化零售概念，提供中西成藥、保健、美妝同生活用品，照顧健康同美容需要。",
    "智文药房 2002 年于香港开业，至今已有二十几年。于2023 旗下新增加品牌「国民药房」，全港共有6间分店，遍布屯门、元朗、沙田、慈云山同旺角，服务街坊同访港旅客。我哋以多元化零售概念，提供中西成药、保健、美妆同生活用品，照顾健康同美容需要。",
    "Chi Man Pharmacy opened in Hong Kong in 2002 and has been operating for over twenty years. In 2023, it launched a new brand, (National Pharmacy). There are currently 6 branches across Hong Kong, located in Tuen Mun, Yuen Long, Sha Tin, Tsz Wan Shan, and Mong Kok, serving both local residents and visitors to Hong Kong. Based on a diversified retail concept, we provide Chinese and Western medicines, healthcare products, cosmetics, and daily necessities to meet your health and beauty needs.",
  ],
  ["home.aboutCommunityTitle", "社區與正貨", "社区与正货", "Community & genuine goods"],
  [
    "home.aboutCommunityBody",
    "秉持「關懷社區、貼身貼心」。旗下 5 間分店為香港政府註冊藥房，亦係港九藥房總商會會員，並參與知識產權署「正版正貨承諾」，杜絕冒牌、保障顧客權益。",
    "秉持「关怀社区、贴身贴心」。旗下 5 间分店为香港政府注册药房，亦是港九药房总商会会员，并参与知识产权署「正版正货承诺」，杜绝冒牌、保障顾客权益。",
    "We keep to \"care for the community, close at hand.\" Five of our shops are government-registered pharmacies and members of the Hong Kong General Chamber of Pharmacy. We take part in the Intellectual Property Department's No Fakes Pledge, so you can buy genuine products.",
  ],
  ["home.aboutPharmacistTitle", "專業藥劑師", "专业药剂师", "Pharmacist-led team"],
  [
    "home.aboutPharmacistBody",
    "由專業藥劑師帶領銷售團隊，免費為市民提供正確用藥知識，減低濫用或誤用藥物風險，同時推廣保健同疾病預防常識。",
    "由专业药剂师带领销售团队，免费为市民提供正确用药知识，减低滥用或误用药物风险，同时推广保健和疾病预防常识。",
    "Pharmacists lead our sales team. They give free advice on using medicines correctly, help reduce misuse, and share health and prevention knowledge.",
  ],
  ["home.aboutPartnersTitle", "零售夥伴", "零售伙伴", "Retail partner"],
  [
    "home.aboutPartnersBody",
    "同供應商建立長期合作。電腦化庫存配合中央採購同中央物流，為本地同海外品牌提供順暢銷售渠道。",
    "与供应商建立长期合作。电脑化库存配合中央采购和中央物流，为本地和海外品牌提供顺畅销售渠道。",
    "We build long-term relationships with suppliers. Computerised stock, central buying, and central logistics give local and overseas brands a smooth path to customers.",
  ],
  ["home.servicesKicker", "日常", "日常", "Everyday"],
  ["home.servicesTitle", "服務", "服务", "Services"],
  ["home.servicesAll", "睇晒服務", "查看全部服务", "All services"],
  ["home.dispenseTitle", "配藥", "配药", "Dispensing"],
  [
    "home.dispenseBody",
    "按醫生處方配藥。有需要可查詢用藥，減低誤用。",
    "按医生处方配药。有需要可查询用药，减低误用。",
    "We dispense to your doctor's prescription. Ask us about your medicines to help avoid misuse.",
  ],
  ["home.otcTitle", "中西成藥", "中西成药", "Chinese & Western medicines"],
  [
    "home.otcBody",
    "常用中西成藥、保健品同維他命齊全，方便街坊選購。",
    "常用中西成药、保健品和维生素齐全，方便街坊选购。",
    "Common Chinese and Western medicines, supplements, and vitamins, ready for the neighbourhood.",
  ],
  ["home.dailyTitle", "日常及嬰兒用品", "日常及婴儿用品", "Daily & baby products"],
  [
    "home.dailyBody",
    "美妝、個人護理、日用品同嬰兒用品，沙田廣場店有售。",
    "美妆、个人护理、日用品和婴儿用品，沙田广场店有售。",
    "Beauty, personal care, daily essentials, and baby products at the Shatin Plaza shop.",
  ],
  ["home.featuredKicker", "屯門 · 元朗 · 慈雲山", "屯门 · 元朗 · 慈云山", "Tuen Mun · Yuen Long · Tsz Wan Shan"],
  ["home.featuredTitle", "智文大藥房", "智文大药房", "Chi Man Dispensary"],
  ["home.featuredAll", "睇全部分店", "查看全部分店", "All stores"],

  ["services.badge", "智文與你常在", "智文与你常在", "Chi Man, always with you"],
  ["services.heading", "智文服務", "智文服务", "Our services"],
  [
    "services.lead",
    "智文藥房開業於2002年。我們明白大家會為家人和所愛的人在所不辭，每日努力為身邊的人拼搏。智文致力實踐社會責任，希望服務當地社區，幫助有需要的人，提供超越期望的服務。街坊嚟藥房，唔止係做生意。",
    "智文药房开业于2002年。我们明白大家会为家人和所爱的人在所不辞，每日努力为身边的人拼搏。智文致力实践社会责任，希望服务当地社区，帮助有需要的人，提供超越期望的服务。街坊来药房，不只是做生意。",
    "Chi Man Pharmacy opened in 2002. We know you would do anything for family and the people you love, and that you work hard for them every day. We take our place in the community seriously: serve locally, help those in need, and do more than expected. When neighbours come to the pharmacy, it is more than a transaction.",
  ],
  ["services.dailyTitle", "日常服務", "日常服务", "Everyday services"],
  ["services.careTitle", "關懷貼心計劃", "关怀贴心计划", "Community care"],
  ["services.careNote", "實際安排、按金及名額請向分店查詢。", "实际安排、按金及名额请向分店查询。", "Ask the shop about arrangements, deposits, and availability."],
  ["services.umbrellaTitle", "雨你常在", "雨你常在", "Rain cover"],
  [
    "services.umbrellaBody",
    "各分店提供雨傘借用，遮風擋雨。需繳付按金，三日內於任何分店交還完整雨傘即可取回按金。",
    "各分店提供雨伞借用，遮风挡雨。需缴付按金，三日内于任何分店交还完整雨伞即可取回按金。",
    "Borrow an umbrella at any shop. Pay a deposit and return the umbrella in good condition to any shop within three days to get it back.",
  ],
  ["services.coinsTitle", "散銀無憂", "散银无忧", "Coin exchange"],
  [
    "services.coinsBody",
    "營業時間內可將一元、二元及五元硬幣對換成相同價值的紙幣。數量視乎當天供應，每人每日有對換上限。",
    "营业时间内可将一元、二元及五元硬币对换成相同价值的纸币。数量视乎当天供应，每人每日有对换上限。",
    "During opening hours you can change $1, $2, and $5 coins for the same value in notes. Stock and a daily per-person limit apply.",
  ],
  ["services.greenTitle", "環保有責", "环保有责", "Reusable bags"],
  [
    "services.greenBody",
    "為減少使用膠袋，顧客可於門市消費後換購環保購物袋。換購價只適用於即日消費。",
    "为减少使用胶袋，顾客可于门市消费后换购环保购物袋。换购价只适用于即日消费。",
    "To cut down on plastic bags, you can get a reusable bag after a same-day in-store purchase, at the in-store offer price.",
  ],
  ["services.alongTitle", "沿途有我", "沿途有我", "Station pickup"],
  [
    "services.alongBody",
    "屯門時代廣場店購物滿指定金額，可安排於營業時間內在屯門、元朗、兆康、朗屏或天水圍西鐵站交收。",
    "屯门时代广场店购物满指定金额，可安排于营业时间内在屯门、元朗、兆康、朗屏或天水围西铁站交收。",
    "Spend a set amount at the Tuen Mun Trend Plaza shop and we can hand over your items during opening hours at Tuen Mun, Yuen Long, Siu Hong, Long Ping, or Tin Shui Wai MTR stations.",
  ],
  ["services.trolleyTitle", "輕鬆回家", "轻松回家", "Shopping trolley"],
  [
    "services.trolleyBody",
    "指定分店提供買餸車借用，減輕負擔。需繳付按金，三日內交還完整買餸車即可取回按金。",
    "指定分店提供买菜车借用，减轻负担。需缴付按金，三日内交还完整买菜车即可取回按金。",
    "Selected shops loan a shopping trolley. Pay a deposit and return the trolley in good condition within three days to get it back.",
  ],
  ["services.healthTitle", "智安康服務", "智安康服务", "Chi On Hong health"],
  [
    "services.healthNote",
    "部分項目或限會員及指定分店，並受條款限制。請向店員預約或查詢。",
    "部分项目或限会员及指定分店，并受条款限制。请向店员预约或查询。",
    "Some services may be for members or selected shops, and terms apply. Please book or ask in store.",
  ],
  ["services.woundTitle", "伴你左右", "伴你左右", "First aid help"],
  [
    "services.woundBody",
    "如有急需，分店可提供傷口護理指引及有關醫療用品，方便即時處理。",
    "如有急需，分店可提供伤口护理指引及相关医疗用品，方便即时处理。",
    "If you need help quickly, the shop can give wound-care guidance and the related supplies.",
  ],
  ["services.checkTitle", "健康檢查", "健康检查", "Health check"],
  [
    "services.checkBody",
    "指定分店可量體溫及血壓。詳情請向店員查詢。",
    "指定分店可量体温及血压。详情请向店员查询。",
    "Selected shops can take your temperature and blood pressure. Ask in store for details.",
  ],
  ["services.glucoseTitle", "血糖自我測試", "血糖自我测试", "Blood glucose test"],
  [
    "services.glucoseBody",
    "指定分店可借用血糖機及試紙。需自我採血，藥劑師會從旁協助及給予意見。請向店員預約。",
    "指定分店可借用血糖机及试纸。需自我采血，药剂师会从旁协助及给予意见。请向店员预约。",
    "Selected shops loan a glucose meter and test strips. You take your own blood sample; a pharmacist can help and advise. Please book in store.",
  ],
  ["services.chatTitle", "藥劑師，傾吓計", "药剂师，聊一聊", "Ask a pharmacist"],
  [
    "services.chatBody",
    "提供健康與藥物咨詢。可向分店店員預約，查詢中西成藥、保健品及日常用藥。",
    "提供健康与药物咨询。可向分店店员预约，查询中西成药、保健品及日常用药。",
    "Health and medication advice. Book with the shop to ask about Chinese and Western medicines, supplements, and everyday use.",
  ],
  ["services.seePhones", "睇分店電話", "查看分店电话", "Store phone numbers"],

  ["products.badge", "產品", "产品", "Products"],
  ["products.heading", "產品目錄", "产品目录", "Product catalog"],
  [
    "products.lead",
    "門市有售。價錢同存貨請向分店查詢。",
    "门市有售。价钱和存货请向分店查询。",
    "Available in store. Ask a shop about price and stock.",
  ],

  ["branches.badge", "分店", "分店", "Stores"],
  ["branches.heading", "全部分店", "全部分店", "All stores"],
  [
    "branches.lead",
    "地址同電話以 Facebook 公布為準。如需查詢請致電該分店。",
    "地址和电话以 Facebook 公布为准。如需查询请致电该分店。",
    "Addresses and phone numbers follow our Facebook updates. Please call the shop if you need help.",
  ],
  ["branches.mapLabel", "分店地圖", "分店地图", "Store map"],
  ["branches.address", "地址", "地址", "Address"],
  ["branches.phone", "電話", "电话", "Phone"],
  ["branches.shop", "{district}店", "{district}店", "{district} shop"],

  ["products.badge", "產品", "产品", "Products"],
  ["products.heading", "產品一覽", "产品一览", "Our products"],
  [
    "products.lead",
    "自家品牌同代理產品。實際供應請向分店查詢。",
    "自家品牌和代理产品。实际供应请向分店查询。",
    "House brands and distributed products. Ask the shop about current stock.",
  ],
  ["products.all", "全部", "全部", "All"],
  ["products.treeLabel", "產品分類", "产品分类", "Product categories"],
  ["products.brand", "品牌", "品牌", "Brand"],
  ["products.spec", "規格", "规格", "Size"],
  ["products.empty", "呢個分類暫時未有產品。", "这个分类暂时没有产品。", "No products in this category yet."],
  ["exclusive.title", "獨家代理", "独家代理", "Exclusive brands"],

  ["cat.health", "健康", "健康", "Health"],
  ["cat.beauty", "美容", "美容", "Beauty"],
  ["cat.personal-care", "個人護理", "个人护理", "Personal care"],
  ["cat.household", "家居", "家居", "Household"],
  ["cat.vitamins", "維他命及礦物質", "维他命及矿物质", "Vitamins & minerals"],
  ["cat.joints", "關節及肌肉", "关节及肌肉", "Joints & muscles"],
  ["cat.chinese-supplements", "中式保健品及藥油", "中式保健品及药油", "Chinese supplements & medicated oil"],
  ["cat.cold", "傷風感冒", "伤风感冒", "Cough & cold"],
  ["cat.mens-womens", "男女士保健品", "男女士保健品", "Men's & women's health"],
  ["cat.adult-nutrition", "成人營養", "成人营养", "Adult nutrition"],
  ["cat.kids-baby", "兒童及母嬰", "儿童及母婴", "Kids & baby"],
  ["cat.first-aid", "急救及醫療用品", "急救及医疗用品", "First aid"],
  ["cat.sensitive-skin", "敏感肌膚／沐浴護膚", "敏感肌肤／沐浴护肤", "Sensitive skin / bath & body"],
  ["cat.hair", "頭髮護理", "头发护理", "Hair care"],
  ["cat.oral", "口腔護理", "口腔护理", "Oral care"],
  ["cat.laundry", "洗衣及家居消毒", "洗衣及家居消毒", "Laundry & household disinfectant"],
  ["cat.insect", "殺蟲驅蚊", "杀虫驱蚊", "Insect & mosquito"],
]);

let currentLang = null;

function isLang(id) {
  return LANGS.some((lang) => lang.id === id);
}

function detectLang() {
  const param = new URLSearchParams(location.search).get("lang");
  if (isLang(param)) return param;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // ponytail: private mode can block storage; fall through to browser language
  }

  const nav = String(navigator.language || "").toLowerCase();
  if (nav.startsWith("en")) return "en";
  if (nav.startsWith("zh-cn") || nav.startsWith("zh-sg") || nav.includes("hans")) return "zh-Hans";
  return DEFAULT_LANG;
}

function persistLang(id) {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // ponytail: private mode can block storage
  }
}

function getLang() {
  if (!currentLang) {
    currentLang = detectLang();
    persistLang(currentLang);
  }
  return currentLang;
}

function t(key, vars) {
  const lang = getLang();
  let value = MESSAGES[lang][key] ?? MESSAGES[DEFAULT_LANG][key] ?? key;
  if (vars) {
    for (const [name, part] of Object.entries(vars)) {
      value = value.replaceAll("{" + name + "}", part);
    }
  }
  return value;
}

function loc(value) {
  if (value == null || typeof value === "string") return value;
  return value[getLang()] || value[DEFAULT_LANG] || "";
}

function applyI18n() {
  const lang = getLang();
  document.documentElement.lang = lang;

  const page = document.documentElement.dataset.page;
  if (page) {
    document.title = t("title." + page);
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = t("meta." + page);
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });

  document.querySelectorAll("a[href]").forEach((el) => {
    const href = el.getAttribute("href");
    if (!href || /^(https?:|tel:|mailto:|#)/i.test(href) || !href.includes(".html")) return;
    const url = new URL(href, location.href);
    url.searchParams.set("lang", lang);
    el.setAttribute("href", url.pathname.replace(/.*\//, "") + url.search);
  });
}

function renderLangSwitcher() {
  document.querySelectorAll("[data-lang-switcher]").forEach((root) => {
    const group = document.createElement("div");
    group.className = "lang-switch";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", t("lang.label"));

    LANGS.forEach((lang) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-pressed", String(lang.id === getLang()));
      btn.textContent = lang.short;
      btn.addEventListener("click", () => setLang(lang.id));
      group.appendChild(btn);
    });

    root.replaceChildren(group);
  });
}

function setLang(id) {
  if (!isLang(id) || id === getLang()) return;
  currentLang = id;
  persistLang(id);
  const url = new URL(location.href);
  url.searchParams.set("lang", id);
  history.replaceState(null, "", url);
  applyI18n();
  renderLangSwitcher();
  window.dispatchEvent(new CustomEvent("langchange"));
}

function initI18n() {
  applyI18n();
  renderLangSwitcher();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}

(function checkI18n() {
  const keys = Object.keys(MESSAGES[DEFAULT_LANG]);
  for (const lang of LANGS) {
    console.assert(
      Object.keys(MESSAGES[lang.id]).length === keys.length,
      "i18n key count mismatch: " + lang.id,
    );
    for (const key of keys) {
      console.assert(MESSAGES[lang.id][key], "missing i18n " + lang.id + "." + key);
    }
  }
  console.assert(t("nav.home"), "t() should resolve nav.home");
})();
