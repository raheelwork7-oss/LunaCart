const ADMIN_CREDENTIALS = {
  email: "raheelraza@gmail.com",
  password: "raheelraza",
};

const products = [
  {
    id: 1,
    name: "AeroFit Pro",
    category: "Electronics",
    price: 249,
    oldPrice: 329,
    rating: 4.9,
    tag: "Best seller",
    desc: "A trail-ready fitness tracker with a week of battery life and a screen bright enough to read at noon.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    name: "Harbor Pack",
    category: "Accessories",
    price: 139,
    oldPrice: 189,
    rating: 4.8,
    tag: "New",
    desc: "A weatherproof carry pack for daily essentials with plenty of room without the extra bulk.",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    name: "Aster Lamp",
    category: "Electronics",
    price: 179,
    oldPrice: 229,
    rating: 4.7,
    tag: "Studio",
    desc: "Ambient lighting with adjustable warmth, perfect for evenings, reading corners, and compact workspaces.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    name: "Cinder Glass",
    category: "Accessories",
    price: 89,
    oldPrice: 118,
    rating: 4.8,
    tag: "Limited",
    desc: "A tumbler-inspired insulated cup designed for long commutes and slow mornings.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyGbMLiv-DwWxkYDjnVz_yCD2RJtRS94gy1xCicXvINhXXOICXYuBw5s&s=10",
  },
  {
    id: 12,
    name: "Oakline Chair",
    category: "Fashion",
    price: 260,
    oldPrice: 330,
    rating: 4.9,
    tag: "Featured",
    desc: "A structured lounge chair with a warm wood finish and a premium tactile feel for relaxed spaces.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Nova Pulse",
    category: "Accessories",
    price: 169,
    oldPrice: 219,
    rating: 4.8,
    tag: "Hot deal",
    desc: "A compact daypack with a padded laptop sleeve and weatherproof zippers, built for the commute and the trail alike.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Summit Hoodie",
    category: "Fashion",
    price: 98,
    oldPrice: 128,
    rating: 4.7,
    tag: "New",
    desc: "Brushed fleece with a wind-resistant shell panel — warm enough for early starts, light enough to pack away by noon.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Deck Mini",
    category: "Electronics",
    price: 449,
    oldPrice: 559,
    rating: 4.9,
    tag: "Premium",
    desc: "A pocketable action camera with stabilized 4K capture, built to survive drops, dust, and rain alike.",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Luma Glass",
    category: "Accessories",
    price: 64,
    oldPrice: 88,
    rating: 4.6,
    tag: "Trending",
    desc: "Polarized lenses in a lightweight titanium frame that folds flat for the side pocket of any pack.",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Arden Tote",
    category: "Fashion",
    price: 120,
    oldPrice: 165,
    rating: 4.8,
    tag: "Limited",
    desc: "Waxed canvas with leather trim and a structured base — holds its shape whether it's carrying books or groceries.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Atlas Speaker",
    category: "Electronics",
    price: 214,
    oldPrice: 279,
    rating: 4.9,
    tag: "Top rated",
    desc: "A rugged, IP67-rated speaker with 20 hours of playback and bass that doesn't get thin at outdoor volume.",
    image:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "Flow Watch",
    category: "Accessories",
    price: 199,
    oldPrice: 249,
    rating: 4.8,
    tag: "Popular",
    desc: "A minimalist analog watch with a sapphire face and a 10-year battery — one less thing to charge.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80",
  },
];

const productGrid = document.getElementById("productGrid");
const productPageGrid = document.getElementById("productPageGrid");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartToggle = document.querySelector(".cart-toggle");
const closeCartBtn = document.querySelector(".close-cart");
const cartDrawer = document.querySelector(".cart-drawer");
const cartOverlay = document.querySelector(".cart-overlay");
const cartCount = document.querySelector(".cart-count");
const ordersTable = document.getElementById("ordersTable");
const authOverlay = document.getElementById("authOverlay");
const signinForm = document.getElementById("signinForm");
const signupForm = document.getElementById("signupForm");
const authModeButtons = document.querySelectorAll(".auth-mode");
const authForms = document.querySelectorAll(".auth-form");
const userPill = document.getElementById("userPill");
const searchInput = document.getElementById("searchInput");
const filterBar = document.getElementById("filterBar");
const topbar = document.getElementById("topbar");
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
const toTopBtn = document.getElementById("toTop");
const quickView = document.getElementById("quickView");
const quickViewCard = document.getElementById("quickViewCard");
const toastStack = document.getElementById("toastStack");
const preloader = document.getElementById("preloader");

const state = {
  filter: "All",
  search: "",
  cart: [],
  user: null,
  liked: new Set(),
};

const recentOrders = [
  { id: "#1024", customer: "Ava Lee", product: "AeroFit Pro", total: 249, status: "Paid" },
  { id: "#1027", customer: "Noah West", product: "Atlas Speaker", total: 214, status: "Shipped" },
  { id: "#1031", customer: "Mila Chen", product: "Summit Hoodie", total: 98, status: "Pending" },
  { id: "#1038", customer: "Leo Grant", product: "Flow Watch", total: 199, status: "Paid" },
];

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

/* ---------- Toasts ---------- */
function showToast(message, variant = "default") {
  const toast = document.createElement("div");
  toast.className = `toast ${variant}`;
  toast.innerHTML = `<span class="dot"></span><span>${message}</span>`;
  toastStack.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("leaving");
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

/* ---------- Auth ---------- */
function switchAuthMode(mode) {
  authModeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  authForms.forEach((form) => {
    form.classList.toggle("active", form.id === `${mode}Form`);
  });
}

function saveSession(user) {
  state.user = user;
  try {
    localStorage.setItem("lunacartUser", JSON.stringify(user));
  } catch (error) {
    console.error("Could not persist session", error);
  }
}

function restoreSession() {
  let savedUser;
  try {
    savedUser = localStorage.getItem("lunacartUser");
  } catch (error) {
    return false;
  }
  if (!savedUser) return false;

  try {
    const parsedUser = JSON.parse(savedUser);
    state.user = parsedUser;
    applyUserUI();
    return true;
  } catch (error) {
    console.error("Failed to restore session", error);
    return false;
  }
}

function applyUserUI() {
  if (!state.user) {
    userPill.textContent = "Log in";
    document.body.classList.remove("admin-mode");
    return;
  }

  if (state.user.role === "admin") {
    document.body.classList.add("admin-mode");
    userPill.textContent = "Admin";
  } else {
    document.body.classList.remove("admin-mode");
    userPill.textContent = state.user.name || "Account";
  }
}

function hideAuth() {
  authOverlay.classList.add("hidden");
}

function showAuth() {
  authOverlay.classList.remove("hidden");
}

function handleLogin(role, name) {
  const user = { name, role };
  saveSession(user);
  applyUserUI();
  hideAuth();
  showToast(role === "admin" ? "Welcome back, Admin." : `Welcome, ${name}.`, "success");
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const activeMode = document.querySelector(".auth-mode.active")?.dataset.mode || "signin";

  if (activeMode === "signin") {
    const email = document.getElementById("signinEmail").value.trim();
    const password = document.getElementById("signinPassword").value.trim();

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      handleLogin("admin", "Admin");
      return;
    }

    if (email && password) {
      handleLogin("user", email.split("@")[0]);
      return;
    }

    showToast("Enter both an email and a password.");
    return;
  }

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!name || !email || !password) {
    showToast("Fill in all sign-up details.");
    return;
  }

  handleLogin("user", name || email.split("@")[0]);
  signupForm.reset();
}

/* ---------- Products ---------- */
function renderProducts() {
  const grid = productPageGrid || productGrid;
  if (!grid) return;

  const filteredProducts = products.filter((product) => {
    const matchesFilter = state.filter === "All" || product.category === state.filter;
    const matchesSearch = product.name.toLowerCase().includes(state.search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (!filteredProducts.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No products found</h3>
        <p>Try another keyword or category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredProducts
    .map((product) => {
      const liked = state.liked.has(product.id);
      return `
        <article class="product-card reveal visible">
          <div class="product-media" data-quick-view="${product.id}">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <span class="product-tag">${product.tag}</span>
            <span class="quick-view-trigger">Quick view</span>
          </div>
          <div class="product-info">
            <div class="product-topline">
              <span class="product-category">${product.category}</span>
              <span class="product-rating">★ ${product.rating}</span>
            </div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price-row">
              <span class="product-price">${money.format(product.price)}</span>
              <span class="product-price-old">${money.format(product.oldPrice)}</span>
            </div>
            <p class="product-desc">${product.desc}</p>
            <div class="product-actions">
              <button class="like-btn ${liked ? "liked" : ""}" data-like="${product.id}" aria-label="Add to favorites">${liked ? "♥" : "♡"}</button>
              <button class="add-cart" data-id="${product.id}">Add to cart</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function openQuickView(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  quickViewCard.innerHTML = `
    <button class="qv-close" aria-label="Close quick view">✕</button>
    <div class="qv-media"><img src="${product.image}" alt="${product.name}" /></div>
    <div class="qv-body">
      <span class="product-category">${product.category}</span>
      <h3>${product.name}</h3>
      <div class="qv-price-row">
        <span class="product-price">${money.format(product.price)}</span>
        <span class="product-price-old">${money.format(product.oldPrice)}</span>
      </div>
      <p class="qv-desc">${product.desc}</p>
      <button class="primary-btn" data-id="${product.id}" id="qvAddCart">Add to cart</button>
    </div>
  `;
  quickView.classList.add("open");
  quickView.setAttribute("aria-hidden", "false");

  quickViewCard.querySelector(".qv-close").addEventListener("click", closeQuickView);
  quickViewCard.querySelector("#qvAddCart").addEventListener("click", () => {
    addToCart(product.id);
    closeQuickView();
  });
}

function closeQuickView() {
  quickView.classList.remove("open");
  quickView.setAttribute("aria-hidden", "true");
}

function toggleLike(productId) {
  if (state.liked.has(productId)) {
    state.liked.delete(productId);
  } else {
    state.liked.add(productId);
    showToast("Saved to favorites.", "success");
  }
  renderProducts();
}

/* ---------- Cart ---------- */
function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  updateDashboardStats();
  openCart();
  cartCount.classList.remove("bump");
  void cartCount.offsetWidth;
  cartCount.classList.add("bump");
  showToast(`${product.name} added to cart.`, "success");
}

function updateCartUI() {
  const totalItems = state.cart.reduce((count, item) => count + item.qty, 0);
  cartCount.textContent = totalItems;

  if (!state.cart.length) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <p>Your cart is empty.</p>
      </div>
    `;
    cartTotal.textContent = money.format(0);
    return;
  }

  cartItems.innerHTML = state.cart
    .map(
      (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" />
          <div>
            <h4>${item.name}</h4>
            <div class="item-meta">${item.category}</div>
            <div class="qty-box">
              <button data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity">−</button>
              <span>${item.qty}</span>
              <button data-action="increase" data-id="${item.id}" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <div class="item-total">${money.format(item.price * item.qty)}</div>
        </div>
      `
    )
    .join("");

  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotal.textContent = money.format(subtotal);
}

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("visible");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("visible");
}

function updateQuantity(productId, action) {
  const item = state.cart.find((entry) => entry.id === productId);
  if (!item) return;

  if (action === "increase") {
    item.qty += 1;
  } else {
    item.qty -= 1;
    if (item.qty <= 0) {
      state.cart = state.cart.filter((entry) => entry.id !== productId);
    }
  }

  updateCartUI();
  updateDashboardStats();
}

/* ---------- Dashboard ---------- */
function renderOrders() {
  if (!ordersTable) return;

  ordersTable.innerHTML = recentOrders
    .map(
      (order) => `
        <tr>
          <td>${order.id}</td>
          <td>${order.customer}</td>
          <td>${order.product}</td>
          <td>${money.format(order.total)}</td>
          <td><span class="status-pill ${statusClass(order.status)}">${order.status}</span></td>
        </tr>
      `
    )
    .join("");
}

function statusClass(status) {
  if (status === "Paid") return "status-paid";
  if (status === "Shipped") return "status-shipped";
  return "status-pending";
}

function updateDashboardStats() {
  const totalSales = document.querySelector(".stat-total-sales");
  const totalOrders = document.querySelector(".stat-orders");
  const totalVisitors = document.querySelector(".stat-visitors");
  const totalConversion = document.querySelector(".stat-conversion");

  if (!totalSales || !totalOrders || !totalVisitors || !totalConversion) return;

  const revenue = 18450 + state.cart.reduce((sum, item) => sum + item.price * item.qty, 0) * 0.7;
  totalSales.textContent = money.format(revenue);
  totalOrders.textContent = 1248 + state.cart.length * 4;
  totalVisitors.textContent = 38500 + state.cart.length * 120;
  totalConversion.textContent = `${(4.8 + state.cart.length * 0.2).toFixed(1)}%`;
}

/* ---------- Animated counters (run once, on scroll into view) ---------- */
function animateCounters() {
  const counters = document.querySelectorAll(".hero-metrics strong[data-count]");
  counters.forEach((el) => {
    const target = Number(el.dataset.count);
    const decimal = Number(el.dataset.decimal || 0);
    const divisor = decimal ? 10 : 1;
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = (target * eased) / divisor;
      el.textContent = decimal ? value.toFixed(1) : Math.round(value).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* ---------- Scroll reveal ---------- */
function revealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

/* ---------- Event wiring ---------- */
if (filterBar) {
  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;
    state.filter = button.dataset.filter;
    filterBar.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.toggle("active", btn === button));
    renderProducts();
  });
}

document.querySelectorAll(".category-box").forEach((box) => {
  box.addEventListener("click", () => {
    const filter = box.dataset.filterJump;
    state.filter = filter;
    filterBar.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.filter === filter));
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    renderProducts();
  });
});

let searchDebounce;
if (searchInput) {
  searchInput.addEventListener("input", () => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
      state.search = searchInput.value.trim();
      renderProducts();
    }, 180);
  });
}

authModeButtons.forEach((button) => {
  button.addEventListener("click", () => switchAuthMode(button.dataset.mode));
});

signinForm.addEventListener("submit", handleAuthSubmit);
signupForm.addEventListener("submit", handleAuthSubmit);

document.getElementById("closeAuth").addEventListener("click", () => {
  if (!state.user) {
    showToast("Sign in to continue browsing.");
    return;
  }
  hideAuth();
});

userPill.addEventListener("click", () => {
  if (!state.user) {
    showAuth();
  }
});

if (productGrid) {
  productGrid.addEventListener("click", (event) => {
    const addButton = event.target.closest(".add-cart");
    if (addButton) {
      addToCart(Number(addButton.dataset.id));
      return;
    }

    const likeButton = event.target.closest(".like-btn");
    if (likeButton) {
      toggleLike(Number(likeButton.dataset.like));
      return;
    }

    const media = event.target.closest("[data-quick-view]");
    if (media) {
      openQuickView(Number(media.dataset.quickView));
    }
  });
}

if (productPageGrid) {
  productPageGrid.addEventListener("click", (event) => {
    const addButton = event.target.closest(".add-cart");
    if (addButton) {
      addToCart(Number(addButton.dataset.id));
      return;
    }

    const likeButton = event.target.closest(".like-btn");
    if (likeButton) {
      toggleLike(Number(likeButton.dataset.like));
      return;
    }

    const media = event.target.closest("[data-quick-view]");
    if (media) {
      openQuickView(Number(media.dataset.quickView));
    }
  });
}

cartItems?.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("button[data-action]");
  if (!actionTarget) return;

  const productId = Number(actionTarget.dataset.id);
  const action = actionTarget.dataset.action;
  updateQuantity(productId, action);
});

cartToggle?.addEventListener("click", openCart);
closeCartBtn?.addEventListener("click", closeCartDrawer);
cartOverlay?.addEventListener("click", closeCartDrawer);

document.querySelector(".checkout-btn")?.addEventListener("click", () => {
  if (!state.cart.length) {
    showToast("Your cart is empty.");
    return;
  }
  showToast("Order queued for processing.", "success");
  state.cart = [];
  updateCartUI();
  updateDashboardStats();
  closeCartDrawer();
});

quickView.addEventListener("click", (event) => {
  if (event.target === quickView) closeQuickView();
});

document.getElementById("unlockDeal")?.addEventListener("click", () => {
  showToast("Deal unlocked — 50% applied at checkout.", "success");
});

document.getElementById("generateReport")?.addEventListener("click", () => {
  showToast("Report generated and ready to download.", "success");
});

document.getElementById("newsletterForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("You're on the list.", "success");
  event.target.reset();
});

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", window.scrollY > 10);
  toTopBtn.classList.toggle("visible", window.scrollY > 500);
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeQuickView();
    closeCartDrawer();
  }
});

/* ---------- Init ---------- */
const hasExistingSession = restoreSession();
if (!hasExistingSession) {
  showAuth();
}

renderProducts();
renderOrders();
updateCartUI();
updateDashboardStats();
revealOnScroll();

const heroMetrics = document.querySelector(".hero-metrics");
if (heroMetrics) {
  const metricsObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );
  metricsObserver.observe(heroMetrics);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader?.classList.add("done");
    document.body.classList.add("loaded");
  }, 250);
});