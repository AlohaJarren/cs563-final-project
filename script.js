document.addEventListener("DOMContentLoaded", () => {
  // Bootstrap ScrollSpy activation
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#navbar",
    offset: 70,
  });

  console.log("Script loaded and ScrollSpy initialized.");
});
