/* Shared behavior: inject header/footer, set active nav, and enable mobile menu. */
(function () {
  async function inject(id, url) {
    const el = document.getElementById(id);
    if (!el) return;
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
    el.innerHTML = await res.text();
  }

  function setActiveNav() {
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    const map = new Map([
      ["index.html", "home"],
      ["aged-care.html", "aged"],
      ["disability-support.html", "disability"],
      ["about.html", "about"],
      ["contact.html", "contact"],
      ["donate.html", "contact"],
      ["become-a-carer.html", "contact"],
      ["privacy.html", "contact"],
    ]);
    const key = map.get(path);
    if (!key) return;
    const link = document.querySelector(`nav a[data-nav="${key}"]`);
    if (link) link.setAttribute("aria-current", "page");
  }

  function wireNavToggle() {
    const btn = document.querySelector(".navbtn");
    const nav = document.querySelector("#nav");
    if (!btn || !nav) return;
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("nav--open");
      btn.setAttribute("aria-expanded", String(open));
    });
  }

  function wireContactForm() {
    const form = document.getElementById("contact-form");
    const out = document.getElementById("contact-result");
    if (!form || !out) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      out.style.display = "block";
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

  async function main() {
    try {
      await inject("site-header", "partials/header.html");
      await inject("site-footer", "partials/footer.html");
      setActiveNav();
      wireNavToggle();
      wireContactForm();
    } catch (e) {
      // If includes fail (e.g., file://), keep the page usable.
      // eslint-disable-next-line no-console
      console.warn(e);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main);
  } else {
    main();
  }
})();
