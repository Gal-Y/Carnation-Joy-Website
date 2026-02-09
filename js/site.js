/* Shared behavior: set active nav, enable mobile menu, and enhance forms. */
(function () {
  function setActiveNav() {
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    const map = new Map([
      ["index.html", "home"],
      ["services.html", "services"],
      ["aged-care.html", "aged"],
      ["disability-support.html", "disability"],
      ["about.html", "about"],
      ["contact.html", "contact"],
      ["donate.html", "donate"],
      ["become-a-carer.html", "carers"],
      ["privacy.html", "privacy"],
    ]);
    const key = map.get(path);
    if (!key) return;
    const link = document.querySelector(`.nav a[data-nav="${key}"]`);
    if (link) link.setAttribute("aria-current", "page");
  }

  function wireNavToggle() {
    const btn = document.querySelector(".nav-toggle");
    const nav = document.getElementById(btn?.getAttribute("aria-controls") || "");
    if (!btn || !nav) return;
    const header = btn.closest(".site-header") || document.body;

    function setOpen(open) {
      nav.classList.toggle("nav--open", open);
      btn.setAttribute("aria-expanded", String(open));
    }

    btn.addEventListener("click", () => {
      setOpen(!nav.classList.contains("nav--open"));
    });

    // Close when a link is clicked (mobile).
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => setOpen(false));
    });

    // Close on outside click.
    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("nav--open")) return;
      if (header.contains(e.target)) return;
      setOpen(false);
    });
  }

  function wireContactForm() {
    const form = document.getElementById("contact-form");
    const out = document.getElementById("contact-result");
    if (!form || !out) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      out.hidden = false;
      out.className = "alert";
      out.textContent = "Sending...";

      const endpoint = (form.getAttribute("data-endpoint") || "").trim();
      const data = Object.fromEntries(new FormData(form).entries());

      // If no backend is configured, provide a helpful fallback without failing silently.
      if (!endpoint) {
        out.className = "alert alert--bad";
        out.innerHTML =
          'No form backend is configured yet. Please email <a class="link" href="mailto:carnationjoycare@gmail.com">carnationjoycare@gmail.com</a> or call <a class="link" href="tel:0452683988">0452 683 988</a>.';
        return;
      }

      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(String(res.status));
        out.className = "alert alert--ok";
        out.textContent = "Thanks. Your message has been sent.";
        form.reset();
      } catch (err) {
        out.className = "alert alert--bad";
        out.textContent = "Sorry, we could not send your message right now. Please email or call us instead.";
      }
    });
  }

  function main() {
    setActiveNav();
    wireNavToggle();
    wireContactForm();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main);
  } else {
    main();
  }
})();
