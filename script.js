// faz os pop ups no texto principal e no texto interior
function toggleText(element) {
  let next = element.nextElementSibling;

  while (
    next &&
    !next.classList.contains("popup") &&
    !next.classList.contains("popup-inside")
  ) {
    next = next.nextElementSibling;
  }

  if (next) {
    next.classList.toggle("show");
  }
}

// indentação dos pop ups interiores
document.querySelectorAll(".popup-inside").forEach(popup => {
  let level = 0;
  let parent = popup.parentElement;

  while (parent) {
    if (parent.classList.contains("popup") ||
        parent.classList.contains("popup-inside")) {
      level++;
    }
    parent = parent.parentElement;
  }

  popup.style.setProperty("--indent", `${level + 3}%`);
});

// mostrar/esconder a imagem ao clicar no número
document.querySelectorAll(".numbers").forEach(num => {
  const ref = num.nextElementSibling;
  if (ref && ref.classList.contains("ref")) {
    num.addEventListener("click", () => {
      ref.classList.toggle("show");
    });
  }
});