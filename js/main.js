// ============================================================
// MAIN.JS — Animationen, Interaktionen, DOM-Injection
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  injectStudioName();
  buildHeroChips();
  buildProofMarquee();
  buildServices();
  buildStats();
  buildReferenceGrid();
  buildCases();
  buildMiniCases();
  buildProcess();
  buildFounders();
  buildTargetGroups();
  buildFAQ();
  buildContact();
  buildFooter();
  initScrollEffects();
  initCounters();
  initFAQAccordion();
  initHeaderScroll();
  initMobileMenu();
});

// ─── Studio Name Injection ────────────────────────────────────
function injectStudioName() {
  document.querySelectorAll("[data-studio-name]").forEach((el) => {
    el.textContent = STUDIO_NAME;
  });
  document.title = META.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", META.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", META.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", META.description);
}

// ─── Hero Floating Chips ──────────────────────────────────────
function buildHeroChips() {
  const refContainer  = document.getElementById("hero-chips-ref");
  const svcContainer  = document.getElementById("hero-chips-svc");
  const numContainer  = document.getElementById("hero-chips-num");
  if (!refContainer) return;

  REFERENCE_CHIPS.forEach((name, i) => {
    refContainer.appendChild(createChip(name, "chip-ref", i));
  });
  SERVICE_CHIPS.forEach((name, i) => {
    svcContainer.appendChild(createChip(name, "chip-svc", i));
  });
  NUMBER_CHIPS.forEach((name, i) => {
    numContainer.appendChild(createChip(name, "chip-num", i));
  });
}

function createChip(text, cls, index) {
  const chip = document.createElement("span");
  chip.className = `floating-chip ${cls}`;
  chip.textContent = text;
  chip.style.animationDelay = `${index * 0.4}s`;
  return chip;
}

// ─── Proof Marquee ───────────────────────────────────────────
function buildProofMarquee() {
  const row1 = document.getElementById("marquee-artists");
  const row2 = document.getElementById("marquee-brands");
  if (!row1 || !row2) return;

  const buildRow = (container, items) => {
    const doubled = [...items, ...items, ...items];
    const inner = doubled.map((name) => `<span class="marquee-item">${name}</span>`).join(
      `<span class="marquee-dot">·</span>`
    );
    container.innerHTML = `<div class="marquee-track">${inner}</div>`;
  };

  buildRow(row1, ARTISTS);
  buildRow(row2, BRANDS);
}

// ─── Services ────────────────────────────────────────────────
function buildServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;

  SERVICES.forEach((s) => {
    const el = document.createElement("article");
    el.className = "service-panel reveal";
    el.innerHTML = `
      <div class="service-number">${s.number}</div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.description}</p>
      <div class="service-tags">
        ${s.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>`;
    container.appendChild(el);
  });
}

// ─── Stats ───────────────────────────────────────────────────
function buildStats() {
  const container = document.getElementById("stats-grid");
  if (!container) return;

  STATS.forEach((s) => {
    const el = document.createElement("div");
    el.className = "stat-item reveal";
    el.innerHTML = `
      <div class="stat-value" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
      <div class="stat-label">${s.label}</div>`;
    container.appendChild(el);
  });
}

// ─── Reference Grid ──────────────────────────────────────────
function buildReferenceGrid() {
  const artistContainer = document.getElementById("ref-artists");
  const brandContainer  = document.getElementById("ref-brands");
  if (!artistContainer) return;

  ARTISTS.forEach((name) => {
    artistContainer.appendChild(createRefItem(name));
  });
  BRANDS.forEach((name) => {
    brandContainer.appendChild(createRefItem(name));
  });
}

function createRefItem(name) {
  const el = document.createElement("div");
  el.className = "ref-item reveal";
  el.textContent = name;
  return el;
}

// ─── Cases ───────────────────────────────────────────────────
function buildCases() {
  const container = document.getElementById("cases-grid");
  if (!container) return;

  CASES.forEach((c, i) => {
    const el = document.createElement("article");
    el.className = "case-card reveal";
    el.style.setProperty("--case-accent", c.color);
    el.innerHTML = `
      <div class="case-visual">
        <div class="case-placeholder">
          <div class="case-play-icon">▶</div>
          <div class="case-overlay-text">${c.client}</div>
        </div>
      </div>
      <div class="case-content">
        <div class="case-client">${c.client}</div>
        <h3 class="case-project">${c.project}</h3>
        <p class="case-desc">${c.description}</p>
        <div class="case-tags">
          ${c.tags.map((t) => `<span class="tag tag-accent">${t}</span>`).join("")}
        </div>
        ${c.videoUrl ? `<a href="${c.videoUrl}" target="_blank" rel="noopener noreferrer" class="case-link">Video ansehen →</a>` : ""}
      </div>`;
    container.appendChild(el);
  });
}

function buildMiniCases() {
  const container = document.getElementById("mini-cases-grid");
  if (!container) return;

  MINI_CASES.forEach((c) => {
    const el = document.createElement("div");
    el.className = "mini-case reveal";
    el.innerHTML = `
      <div class="mini-case-visual"></div>
      <div class="mini-case-info">
        <span class="mini-case-client">${c.client}</span>
        <span class="mini-case-project">${c.project}</span>
        <div class="mini-case-tags">
          ${c.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>`;
    container.appendChild(el);
  });
}

// ─── Process ─────────────────────────────────────────────────
function buildProcess() {
  const container = document.getElementById("process-steps");
  if (!container) return;

  PROCESS_STEPS.forEach((s) => {
    const el = document.createElement("div");
    el.className = "process-step reveal";
    el.innerHTML = `
      <div class="process-number">${s.number}</div>
      <div class="process-content">
        <h3 class="process-title">${s.title}</h3>
        <p class="process-desc">${s.description}</p>
      </div>`;
    container.appendChild(el);
  });
}

// ─── Founders ────────────────────────────────────────────────
function buildFounders() {
  const container = document.getElementById("founders-grid");
  if (!container) return;

  FOUNDERS.forEach((f) => {
    const el = document.createElement("div");
    el.className = "founder-card reveal";
    el.innerHTML = `
      <div class="founder-avatar"></div>
      <div class="founder-info">
        <h3 class="founder-name">${f.name}</h3>
        <p class="founder-role">${f.role}</p>
        <div class="founder-skills">
          ${f.skills.map((s) => `<span class="skill-tag">${s}</span>`).join("")}
        </div>
      </div>`;
    container.appendChild(el);
  });
}

// ─── Target Groups ────────────────────────────────────────────
function buildTargetGroups() {
  const yesContainer = document.getElementById("target-yes");
  const noContainer  = document.getElementById("target-no");
  if (!yesContainer) return;

  TARGET_YES.forEach((item) => {
    const el = document.createElement("li");
    el.className = "target-item target-yes-item";
    el.innerHTML = `<span class="target-icon">✓</span>${item}`;
    yesContainer.appendChild(el);
  });

  TARGET_NO.forEach((item) => {
    const el = document.createElement("li");
    el.className = "target-item target-no-item";
    el.innerHTML = `<span class="target-icon">✗</span>${item}`;
    noContainer.appendChild(el);
  });
}

// ─── FAQ ─────────────────────────────────────────────────────
function buildFAQ() {
  const container = document.getElementById("faq-list");
  if (!container) return;

  FAQ_ITEMS.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "faq-item";
    el.innerHTML = `
      <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}">
        <span>${item.question}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}" hidden>
        <p>${item.answer}</p>
      </div>`;
    container.appendChild(el);
  });
}

// ─── Contact Form Checkboxes ──────────────────────────────────
function buildContact() {
  const container = document.getElementById("contact-services");
  if (!container) return;

  CONTACT_SERVICES.forEach((s) => {
    const label = document.createElement("label");
    label.className = "service-check";
    label.innerHTML = `
      <input type="checkbox" name="services" value="${s}">
      <span>${s}</span>`;
    container.appendChild(label);
  });
}

// ─── Footer ──────────────────────────────────────────────────
function buildFooter() {
  const nameEl = document.getElementById("footer-studio-name");
  if (nameEl) nameEl.textContent = STUDIO_NAME;
}

// ─── Scroll Reveal ───────────────────────────────────────────
function initScrollEffects() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ─── Counter Animation ────────────────────────────────────────
function initCounters() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll("[data-target]").forEach((el) => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || "";
  const duration = 2000;
  const start = performance.now();

  const tick = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

// ─── FAQ Accordion ────────────────────────────────────────────
function initFAQAccordion() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-question");
    if (!btn) return;

    const expanded = btn.getAttribute("aria-expanded") === "true";
    const answer = document.getElementById(btn.getAttribute("aria-controls"));
    const icon = btn.querySelector(".faq-icon");

    document.querySelectorAll(".faq-question[aria-expanded='true']").forEach((open) => {
      if (open !== btn) {
        open.setAttribute("aria-expanded", "false");
        const a = document.getElementById(open.getAttribute("aria-controls"));
        if (a) a.hidden = true;
        const ic = open.querySelector(".faq-icon");
        if (ic) ic.textContent = "+";
      }
    });

    btn.setAttribute("aria-expanded", String(!expanded));
    if (answer) answer.hidden = expanded;
    if (icon) icon.textContent = expanded ? "+" : "−";
  });
}

// ─── Header Scroll Effect ─────────────────────────────────────
function initHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

// ─── Mobile Menu ─────────────────────────────────────────────
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav    = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.classList.toggle("is-open", open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.classList.remove("is-open");
    });
  });
}

// ─── Contact Form ─────────────────────────────────────────────
document.addEventListener("submit", (e) => {
  if (!e.target.closest("#contact-form")) return;
  e.preventDefault();
  const btn = e.target.querySelector('[type="submit"]');
  if (!btn) return;
  btn.textContent = "Anfrage eingegangen ✓";
  btn.disabled = true;
  btn.classList.add("btn-success");
});
