// Função para abrir o menu mobile
function openMenu() {
  const ul = document.querySelector('nav ul');
  ul.classList.add('open');
}

// Função para fechar o menu mobile
function closeMenu() {
  const ul = document.querySelector('nav ul');
  ul.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function () {
  const closeIcon = document.querySelector('.close-icon');
  const menuIcon = document.querySelector('.menu-icon');

  if (closeIcon) {
    closeIcon.addEventListener('click', closeMenu);
  }

  if (menuIcon) {
    menuIcon.addEventListener('click', openMenu);
  }
});

// Animações extras com JS
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');

  sections.forEach((section) => {
    const position = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      section.classList.add('animate');
    }
  });
});
