function abrir() {
  const abrircap0 = document.getElementById("modal-container-cap0");
  const fecharcap0 = document.getElementById("fechar");

  abrircap0.style.display = "block";
  fecharcap0.onclick = function () {
    abrircap0.style.display = "none";
  };
}
