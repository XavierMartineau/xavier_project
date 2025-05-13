document.addEventListener("DOMContentLoaded", function () {
  console.log("JS is running!"); // Pour debug

  document.querySelectorAll(".couleur").forEach((div) => {
    div.addEventListener("click", () => {
      const couleur = div.getAttribute("data-code");
      navigator.clipboard
        .writeText(couleur)
        .then(() => {
          console.log("La couleur est copiée.");
          console.log(`La couleur ${couleur} est copiée.`);
        })
        .catch((err) => {
          console.error("Échec de la copie :", err);
        });
    });
  });
});
