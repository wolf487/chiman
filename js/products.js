function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function catName(id) {
  return t("cat." + id);
}

function productCard(product) {
  const rows = [];
  if (product.brand) {
    rows.push(`<div><dt>${escapeHtml(t("products.brand"))}</dt><dd>${escapeHtml(product.brand)}</dd></div>`);
  }
  if (product.spec) {
    rows.push(`<div><dt>${escapeHtml(t("products.spec"))}</dt><dd>${escapeHtml(product.spec)}</dd></div>`);
  }
  return `
    <article class="product-card">
      <picture>
        <source type="image/webp" srcset="${escapeHtml(product.photo)}.webp" />
        <img class="product-photo" src="${escapeHtml(product.photo)}.jpg" alt="${escapeHtml(product.name)}" width="600" height="600" loading="lazy" decoding="async" />
      </picture>
      <div class="product-body">
        <h3>${escapeHtml(product.name)}</h3>
        ${rows.length ? `<dl>${rows.join("")}</dl>` : ""}
      </div>
    </article>
  `;
}

let catChoices = null;

function catLink(id, label, className) {
  return `<a class="${className}" href="#${escapeHtml(id)}">${escapeHtml(label)}</a>`;
}

function catSelectOptions() {
  const opts = [`<option value="product-groups">${escapeHtml(t("products.all"))}</option>`];
  for (const node of PRODUCT_TREE) {
    opts.push(`<optgroup label="${escapeHtml(catName(node.id))}">`);
    for (const child of node.children) {
      opts.push(`<option value="${escapeHtml(child)}">${escapeHtml(catName(child))}</option>`);
    }
    opts.push("</optgroup>");
  }
  return opts.join("");
}

function jumpToCategory(id) {
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", "#" + id);
}

function renderProductTree(containerId) {
  const root = document.getElementById(containerId);
  if (!root) return;
  if (catChoices) {
    catChoices.destroy();
    catChoices = null;
  }
  const items = [
    `<li>${catLink("product-groups", t("products.all"), "cat-all")}</li>`,
    ...PRODUCT_TREE.map((node) => {
      const kids = node.children
        .map((child) => `<li class="cat-l2">${catLink(child, catName(child), "")}</li>`)
        .join("");
      return `<li class="cat-l1">${catLink(node.id, catName(node.id), "")}<ul>${kids}</ul></li>`;
    }),
  ].join("");
  root.innerHTML = `
    <nav class="cat-tree" aria-label="${escapeHtml(t("products.treeLabel"))}"><ul>${items}</ul></nav>
    <div class="cat-select">
      <select id="product-cat" aria-label="${escapeHtml(t("products.treeLabel"))}">${catSelectOptions()}</select>
    </div>
  `;
  const select = document.getElementById("product-cat");
  const hash = location.hash.slice(1);
  if (hash && [...select.options].some((option) => option.value === hash)) {
    select.value = hash;
  }
  catChoices = new Choices(select, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: "",
    allowHTML: false,
  });
  select.addEventListener("change", () => jumpToCategory(select.value));
}

function renderProductGroups(containerId) {
  const root = document.getElementById(containerId);
  if (!root) return;
  const html = PRODUCT_TREE.map((l1) => {
    const kids = l1.children
      .map((l2) => {
        const products = PRODUCTS.filter((product) => product.l2 === l2);
        if (!products.length) return "";
        return `
          <section class="product-group" id="${escapeHtml(l2)}">
            <h2>${escapeHtml(catName(l2))}</h2>
            <div class="product-grid">
              ${products.map(productCard).join("")}
            </div>
          </section>
        `;
      })
      .join("");
    if (!kids) return "";
    return `<div id="${escapeHtml(l1.id)}">${kids}</div>`;
  }).join("");
  root.innerHTML = html || `<p>${escapeHtml(t("products.empty"))}</p>`;
}

function refreshProductViews() {
  if (document.getElementById("product-tree")) renderProductTree("product-tree");
  if (document.getElementById("product-groups")) renderProductGroups("product-groups");
}

window.addEventListener("langchange", refreshProductViews);

console.assert(typeof Choices === "function", "choices.js must load first");
console.assert(typeof PRODUCTS !== "undefined" && PRODUCTS.length > 0, "products-data.js must load first");
console.assert(
  PRODUCTS.every((product) => product.photo && product.name),
  "every product needs a photo stem and name",
);
