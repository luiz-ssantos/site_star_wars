document.addEventListener("DOMContentLoaded", function () {
  const menuHamburguer = document.getElementById("menu-hamburguer");
  const fecharMenu = document.getElementById("fechar-menu");
  const itensMenuHamburguer = document.getElementById("itens-menu-hamburguer");

  // Adiciona um evento de clique ao menu hambúrguer
  menuHamburguer.addEventListener("click", function () {
    // Alterna a visibilidade do menu
    if (itensMenuHamburguer.style.display === "block") {
      itensMenuHamburguer.style.display = "none";
      menuHamburguer.style.display = "block"; // Exibe o ícone de menu hambúrguer
      fecharMenu.style.display = "none"; // Oculta o ícone de "X"
    } else {
      itensMenuHamburguer.style.display = "block";
      menuHamburguer.style.display = "none"; // Oculta o ícone de menu hambúrguer
      fecharMenu.style.display = "block"; // Exibe o ícone de "X"
    }
  });

  // Adiciona um evento de clique ao ícone de "X"
  fecharMenu.addEventListener("click", function () {
    itensMenuHamburguer.style.display = "none"; // Oculta os itens do menu
    menuHamburguer.style.display = "block"; // Exibe o ícone de menu hambúrguer
    fecharMenu.style.display = "none"; // Oculta o ícone de "X"
  });
});
