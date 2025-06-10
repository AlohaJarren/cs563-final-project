document.addEventListener("DOMContentLoaded", () => {
  // Bootstrap ScrollSpy activation
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#navbar",
    offset: 70,
  });

  // Smooth scroll for in-page anchor links (if not using native behavior)
  document.querySelectorAll('a.nav-link[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  console.log("Script loaded, ScrollSpy and smooth scroll initialized.");
});
