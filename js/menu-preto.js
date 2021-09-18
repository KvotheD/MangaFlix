const nav = document.getElementById("menu");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    nav.classList.add("menu-preto");
  } else {
    nav.classList.remove("menu-preto");
  }
});
