/* GoStudios Real hub — small, dependency-free interactions */
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* Mobile navigation */
  const menuToggle = $("#menuToggle");
  const nav = $("#nav");
  if (menuToggle && nav) {
    const close = () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
    };
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    $$("a", nav).forEach((link) => link.addEventListener("click", close));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 920) close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }

  /* Header state + scroll progress */
  const header = $("#siteHeader");
  const progress = $("#scrollProgress");
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      const y = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (header) header.classList.toggle("scrolled", y > 12);
      if (progress) progress.style.width = (height > 0 ? (y / height) * 100 : 0) + "%";
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Reveal on scroll */
  const revealItems = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  /* Theme toggle */
  const themeToggle = $("#themeToggle");
  if (themeToggle) {
    const saved = localStorage.getItem("gs-theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    const syncIcon = () => {
      themeToggle.textContent = document.documentElement.getAttribute("data-theme") === "light" ? "☾" : "◐";
    };
    syncIcon();
    themeToggle.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      if (next === "dark") document.documentElement.removeAttribute("data-theme");
      else document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("gs-theme", next);
      syncIcon();
    });
  }

  /* Catalogue filter + search */
  const grid = $("#catalogueGrid");
  const cards = grid ? $$(".repo-card", grid) : [];
  const chips = $$(".chip");
  const searchInput = $("#catalogueSearch");
  const sortSelect = $("#catalogueSort");
  const emptyState = $("#emptyState");
  let activeFilter = "all";

  const sortCards = () => {
    if (!grid || !sortSelect) return;
    const mode = sortSelect.value;
    const ordered = cards.slice();
    if (mode === "name") {
      ordered.sort((a, b) => {
        const an = (a.querySelector("h3") || {}).textContent || "";
        const bn = (b.querySelector("h3") || {}).textContent || "";
        return an.localeCompare(bn);
      });
    } else if (mode === "category") {
      ordered.sort((a, b) => (a.dataset.cats || "").localeCompare(b.dataset.cats || ""));
    }
    ordered.forEach((card) => grid.appendChild(card));
  };

  const applyCatalogue = () => {
    sortCards();
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const cats = (card.dataset.cats || "").split(/\s+/);
      const matchesFilter = activeFilter === "all" || cats.includes(activeFilter);
      const haystack = (
        card.textContent + " " + (card.dataset.search || "") + " " + (card.dataset.cats || "")
      ).toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      const show = matchesFilter && matchesQuery;
      card.classList.toggle("hidden", !show);
      if (show) visible += 1;
    });
    if (emptyState) emptyState.hidden = visible !== 0;
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      activeFilter = chip.dataset.filter || "all";
      chips.forEach((other) => other.classList.toggle("active", other === chip));
      applyCatalogue();
    });
  });
  if (searchInput) {
    searchInput.addEventListener("input", applyCatalogue);
    searchInput.addEventListener("search", applyCatalogue);
  }
  if (sortSelect) {
    sortSelect.addEventListener("change", applyCatalogue);
  }

  /* Copy buttons */
  $$(".copy-btn").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(text);
        const old = button.textContent;
        button.textContent = "Copied";
        button.classList.add("copied");
        window.setTimeout(() => {
          button.textContent = old;
          button.classList.remove("copied");
        }, 1600);
      } catch (error) {
        button.textContent = "Select & copy";
        window.setTimeout(() => { button.textContent = "Copy"; }, 2000);
      }
    });
  });

  /* Footer year */
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* Back to top */
  const backToTop = $("#backToTop");
  if (backToTop) {
    const toggleBackToTop = () => {
      backToTop.hidden = false;
      backToTop.classList.toggle("show", window.scrollY > 600);
    };
    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* If the visitor lands on a filtered hash, reveal that section cleanly */
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      window.setTimeout(() => target.scrollIntoView({ behavior: "auto", block: "start" }), 30);
    }
  }
})();
