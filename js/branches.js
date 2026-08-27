const BRAND_ORDER = [
  {
    id: "brand-dai",
    name: { "zh-Hant": "智文大藥房", "zh-Hans": "智文大药房", en: "Chi Man Dispensary" },
  },
  {
    id: "brand-chiman",
    name: { "zh-Hant": "智文藥房", "zh-Hans": "智文药房", en: "Chi Man Pharmacy" },
  },
  {
    id: "brand-beauty",
    name: {
      "zh-Hant": "智文．美妝．生活百貨",
      "zh-Hans": "智文．美妆．生活百货",
      en: "Chi Man Beauty & Lifestyle",
    },
  },
  {
    id: "brand-national",
    name: { "zh-Hant": "國民大藥房", "zh-Hans": "国民大药房", en: "National Pharmacy" },
  },
];

const BRANCHES = [
  {
    brandId: "brand-dai",
    district: { "zh-Hant": "屯門", "zh-Hans": "屯门", en: "Tuen Mun" },
    address: {
      "zh-Hant": "屯門時代廣場南翼地下15號",
      "zh-Hans": "屯门时代广场南翼地下15号",
      en: "Shop 15, G/F, South Wing, Trend Plaza, Tuen Mun",
    },
    phone: "2404 2220",
    photo: "images/branches/tuen-mun",
    lng: 113.97599,
    lat: 22.39288,
    featured: true,
  },
  {
    brandId: "brand-dai",
    district: { "zh-Hant": "元朗", "zh-Hans": "元朗", en: "Yuen Long" },
    address: {
      "zh-Hant": "元朗教育路3-7號富好大廈2-3號舖",
      "zh-Hans": "元朗教育路3-7号富好大厦2-3号铺",
      en: "Shops 2-3, Fu Ho Building, 3-7 Kau Yuk Road, Yuen Long",
    },
    phone: "2470 7028",
    photo: "images/branches/yuen-long",
    lng: 114.027,
    lat: 22.44301,
    featured: true,
  },
  {
    brandId: "brand-dai",
    district: { "zh-Hant": "慈雲山", "zh-Hans": "慈云山", en: "Tsz Wan Shan" },
    address: {
      "zh-Hant": "九龍慈雲山慈雲山中心5樓507號",
      "zh-Hans": "九龙慈云山慈云山中心5楼507号",
      en: "Shop 507, 5/F, Tsz Wan Shan Shopping Centre, Tsz Wan Shan, Kowloon",
    },
    phone: "2353 6075",
    photo: "images/branches/tsz-wan-shan",
    lng: 114.2005844,
    lat: 22.3481705,
    featured: true,
  },
  {
    brandId: "brand-chiman",
    district: { "zh-Hant": "沙田", "zh-Hans": "沙田", en: "Sha Tin" },
    address: {
      "zh-Hant": "沙田沙田廣場3樓25E2號舖",
      "zh-Hans": "沙田沙田广场3楼25E2号铺",
      en: "Shop 25E2, 3/F, Shatin Plaza, Sha Tin",
    },
    phone: "2322 0960",
    photo: "images/branches/sha-tin-pharmacy",
    lng: 114.18904,
    lat: 22.38315,
  },
  {
    brandId: "brand-beauty",
    district: { "zh-Hant": "沙田", "zh-Hans": "沙田", en: "Sha Tin" },
    address: {
      "zh-Hant": "沙田沙田廣場3樓37-38號舖",
      "zh-Hans": "沙田沙田广场3楼37-38号铺",
      en: "Shops 37-38, 3/F, Shatin Plaza, Sha Tin",
    },
    phone: "2696 3693",
    photo: "images/branches/sha-tin-beauty",
    lng: 114.18918,
    lat: 22.38322,
  },
  {
    brandId: "brand-national",
    district: { "zh-Hant": "旺角", "zh-Hans": "旺角", en: "Mong Kok" },
    address: {
      "zh-Hant": "九龍旺角通菜街63、63A、65號國榮大廈地下A & B",
      "zh-Hans": "九龙旺角通菜街63、63A、65号国荣大厦地下A & B",
      en: "Shops A & B, G/F, Kwok Wing Building, 63, 63A & 65 Tung Choi Street, Mong Kok, Kowloon",
    },
    phone: "2322 8226",
    photo: "images/branches/mong-kok",
    lng: 114.1709,
    lat: 22.3183,
  },
];

const HONG_KONG = { "zh-Hant": "香港", "zh-Hans": "香港", en: "Hong Kong" };

function brandName(brandId) {
  const brand = BRAND_ORDER.find((item) => item.id === brandId);
  return brand ? loc(brand.name) : "";
}

function telHref(phone) {
  return "tel:+852" + phone.replace(/\s/g, "");
}

function mapsHref(address) {
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(loc(HONG_KONG) + " " + address)
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function branchCard(branch, { showBrand = true } = {}) {
  const district = loc(branch.district);
  const address = loc(branch.address);
  const title = showBrand ? brandName(branch.brandId) : t("branches.shop", { district });
  const alt = district + " · " + brandName(branch.brandId);
  return `
    <article class="branch-card">
      <picture>
        <source type="image/webp" srcset="${escapeHtml(branch.photo)}.webp" />
        <img class="branch-photo" src="${escapeHtml(branch.photo)}.jpg" alt="${escapeHtml(alt)}" width="1200" height="800" loading="lazy" />
      </picture>
      <div class="branch-body">
        <p class="kicker">${escapeHtml(district)}</p>
        <h3>${escapeHtml(title)}</h3>
        <dl>
          <div>
            <dt>${escapeHtml(t("branches.address"))}</dt>
            <dd>
              <a class="addr" href="${mapsHref(address)}" target="_blank" rel="noopener noreferrer">${escapeHtml(address)}</a>
            </dd>
          </div>
          <div>
            <dt>${escapeHtml(t("branches.phone"))}</dt>
            <dd>
              <a class="tel" href="${telHref(branch.phone)}">${escapeHtml(branch.phone)}</a>
            </dd>
          </div>
        </dl>
      </div>
    </article>
  `;
}

function renderFeatured(containerId) {
  const root = document.getElementById(containerId);
  if (!root) return;
  root.innerHTML = BRANCHES.filter((branch) => branch.featured)
    .map((branch) => branchCard(branch))
    .join("");
}

function renderGrouped(containerId) {
  const root = document.getElementById(containerId);
  if (!root) return;
  root.innerHTML = BRAND_ORDER.map((brand) => {
    const shops = BRANCHES.filter((branch) => branch.brandId === brand.id);
    return `
      <section class="group" aria-labelledby="${brand.id}">
        <h2 id="${brand.id}">${escapeHtml(loc(brand.name))}</h2>
        <div class="grid-cards">
          ${shops.map((branch) => branchCard(branch, { showBrand: false })).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function popupHtml(branch) {
  const title = loc(branch.district) + " · " + brandName(branch.brandId);
  return (
    "<p>" +
    escapeHtml(title) +
    "</p><p>" +
    escapeHtml(loc(branch.address)) +
    '</p><p><a href="' +
    telHref(branch.phone) +
    '">' +
    escapeHtml(branch.phone) +
    "</a></p>"
  );
}

let mapMarkers = [];

function refreshMapPopups() {
  mapMarkers.forEach(({ marker, branch }) => {
    const popup = marker.getPopup();
    if (popup) popup.setHTML(popupHtml(branch));
  });
}

function renderMap(containerId) {
  if (!window.maplibregl) return;
  const root = document.getElementById(containerId);
  if (!root) return;
  if (root.dataset.mapReady === "1") {
    refreshMapPopups();
    return;
  }

  const map = new maplibregl.Map({
    container: root,
    style: "https://tiles.openfreemap.org/styles/liberty",
    center: [114.12, 22.38],
    zoom: 10,
  });
  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

  const bounds = new maplibregl.LngLatBounds();
  mapMarkers = [];
  BRANCHES.forEach((branch) => {
    bounds.extend([branch.lng, branch.lat]);
    const marker = new maplibregl.Marker({ color: "#e9673b" })
      .setLngLat([branch.lng, branch.lat])
      .setPopup(new maplibregl.Popup({ offset: 18 }).setHTML(popupHtml(branch)))
      .addTo(map);
    mapMarkers.push({ marker, branch });
  });

  map.on("load", () => {
    map.fitBounds(bounds, { padding: 56, maxZoom: 13, duration: 0 });
  });
  root.dataset.mapReady = "1";
}

function refreshBranchViews() {
  if (document.getElementById("featured-branches")) renderFeatured("featured-branches");
  if (document.getElementById("branch-groups")) renderGrouped("branch-groups");
  refreshMapPopups();
}

window.addEventListener("langchange", refreshBranchViews);

console.assert(BRANCHES.length === 6, "expected 6 Facebook branches");
console.assert(
  BRANCHES.every((branch) => Number.isFinite(branch.lng) && Number.isFinite(branch.lat)),
  "every branch needs map coordinates",
);
console.assert(
  BRAND_ORDER.every((brand) => BRANCHES.some((branch) => branch.brandId === brand.id)),
  "every brand should have at least one shop",
);
console.assert(
  BRANCHES.every((branch) => loc(branch.address) && loc(branch.district)),
  "every branch needs a localized address and district",
);
console.assert(
  BRANCHES.every((branch) => branch.photo),
  "every branch needs a storefront photo",
);
