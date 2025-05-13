console.log("Script is loaded!"); // Pour tester si le script est chargé

document.addEventListener("DOMContentLoaded", () => {
  const colorDivs = document.querySelectorAll(".palette .colors div");

  colorDivs.forEach((colorDiv) => {
    colorDiv.addEventListener("click", function () {
      const colorCode = this.querySelector("span").getAttribute("data-code");
      navigator.clipboard
        .writeText(colorCode)
        .then(() => {
          alert(`Color ${colorCode} copied to clipboard!`);
        })
        .catch((err) => {
          console.error("Failed to copy to clipboard", err);
        });
    });
  });
});
