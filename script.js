document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  // toggle menu
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // scroll vers la bonne section
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // referme le menu sur mobile
      navLinks.classList.remove("show");
    });
  });
});
