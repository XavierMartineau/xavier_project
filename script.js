// Fonction pour calculer la luminosité d'une couleur
function getLuminance(r, g, b) {
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

// Fonction pour convertir une couleur hexadécimale en RGB
function hexToRgb(hex) {
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }
  return { r, g, b };
}

// Fonction pour ajuster la couleur du texte en fonction de la luminosité
function adjustTextColor() {
  // Sélectionner tous les divs avec un data-code
  const colorDivs = document.querySelectorAll("[data-code]");

  colorDivs.forEach(function (div) {
    // Récupérer le code hexadécimal de la couleur
    const hexColor = div.querySelector("span").getAttribute("data-code");

    // Convertir la couleur hexadécimale en RGB
    const { r, g, b } = hexToRgb(hexColor);

    // Calculer la luminosité de la couleur
    const luminance = getLuminance(r, g, b);

    // Sélectionner le nom et le code de la couleur dans le div
    const name = div.getAttribute("data-name");
    const span = div.querySelector("span");

    // Ajouter le nom et le code à afficher
    span.textContent = `${name} (${hexColor})`;

    // Si la luminosité est faible (couleur sombre), texte en blanc, sinon texte en noir
    if (luminance < 0.5) {
      span.style.color = "#FFFFFF"; // Texte en blanc
      div.style.color = "#FFFFFF"; // Nom en blanc
    } else {
      span.style.color = "#000000"; // Texte en noir
      div.style.color = "#000000"; // Nom en noir
    }
  });
}

// Appeler la fonction lorsque le DOM est complètement chargé
document.addEventListener("DOMContentLoaded", adjustTextColor);
