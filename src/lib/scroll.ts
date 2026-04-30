export function scrollToHash(href: string) {
  if (typeof window === "undefined") return;
  const id = href.replace(/^#/, "");

  if (!id || id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  // Honors `scroll-margin-top` on the target — keeps the section
  // below the fixed nav and bypasses scroll-snap hijacking.
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}
