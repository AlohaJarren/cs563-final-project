document.addEventListener("DOMContentLoaded", () => {
  // Activate Bootstrap ScrollSpy for navbar highlighting on scroll
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#navbar",
    offset: 70,
  });

  // Smooth scroll for internal navigation links
  document.querySelectorAll('a.nav-link[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Contact form validation and confirmation modal
  const form = document.getElementById("contactForm");
  const confirmationModal = new bootstrap.Modal(
    document.getElementById("confirmationModal")
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
    } else {
      // Reset form after mock submission
      form.reset();
      form.classList.remove("was-validated");

      // Show confirmation modal
      confirmationModal.show();
    }
  });

  console.log(
    "Script loaded: ScrollSpy, smooth scroll, and form behavior initialized."
  );
});
