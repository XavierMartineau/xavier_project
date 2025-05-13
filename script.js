document.addEventListener("DOMContentLoaded", () => {
  // Sélectionner toutes les couleurs dans chaque palette
  const colorDivs = document.querySelectorAll(".palette .colors div");

  // Ajouter un événement de clic à chaque couleur
  colorDivs.forEach((colorDiv) => {
    colorDiv.addEventListener("click", function () {
      // Récupérer le code hexadécimal de la couleur
      const colorCode = this.querySelector("span").getAttribute("data-code");

      // Copier la couleur dans le presse-papiers
      navigator.clipboard
        .writeText(colorCode)
        .then(() => {
          // Afficher une alerte en anglais que la couleur a été copiée
          alert(`Color ${colorCode} copied to clipboard!`);
        })
        .catch((err) => {
          console.error("Failed to copy to clipboard", err);
        });
    });
  });
});
