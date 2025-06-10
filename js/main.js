// Função para abrir o menu mobile
// Quando chamado, declara que o menu (tudo que tem "nav ul") está aberto
// (Adiciona classe "open")
function openMenu() {
  const ul = document.querySelector('nav ul');
  ul.classList.add('open');
}

// Função para fechar o menu mobile
// Quando chamado, declara que o menu (tudo que tem "nav ul") não está aberto
// (Remove classe "open")
function closeMenu() {
  const ul = document.querySelector('nav ul');
  ul.classList.remove('open');
}


document.addEventListener('DOMContentLoaded', function () {
  const closeIcon = document.getElementById('closeMenu');
  const menuIcon = document.getElementById('openMenu');

  if (closeIcon) {
    closeIcon.addEventListener('click', closeMenu);
  }

  if (menuIcon) {
    menuIcon.addEventListener('click', openMenu);
  }
});

// Animações extras com JS
// "=>" é só uma forma menor e mais preguiçosa de escrever "function" 
// (07/06/25) Ainda vou documentar o que isso está fazendo (acredito que nadakkkkk)
/*
window.addEventListener('scroll', () => {
  const header = document.querySelectorAll('header');

  sections.forEach((header) => {
    const position = header.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 0.3;

    if (position < screenPosition) {
      section.classList.add('teste');
    }
  });
});
*/


/* teste
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "30%";
  } else {
    document.getElementById("header").style.height = "";
  }
}
  */