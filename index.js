// Mudar cor de tema

const themeSwitch = document.getElementById('theme-switch');
const themeLabel = themeSwitch.querySelector('.theme-label');
const htmlElement = document.documentElement;

themeSwitch.addEventListener('click', () => {
  htmlElement.classList.toggle('dark-theme');

  if (htmlElement.classList.contains('dark-theme')) {
    themeLabel.textContent = 'Tema Claro';
    themeSwitch.firstChild.textContent = '☀️ ';
  } else {
    themeLabel.textContent = 'Tema Escuro';
    themeSwitch.firstChild.textContent = '🌙 ';
  }
});



// Menu Mobile
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
   menu.classList.toggle('show');
});