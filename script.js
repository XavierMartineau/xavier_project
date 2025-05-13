document.querySelectorAll(".color").forEach((el) => {
  el.addEventListener("click", () => {
    const color = el.getAttribute("data-color");
    navigator.clipboard
      .writeText(color)
      .then(() => {
        // Petit feedback visuel ou sonore
        el.classList.add("copied");
        setTimeout(() => el.classList.remove("copied"), 800);
      })
      .catch((err) => {
        console.error("Erreur de copie :", err);
      });
  });
});
