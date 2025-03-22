// Mudar cor de tema

const themeSwitch = document.getElementById('theme-switch');
        const htmlElement = document.documentElement;
      
        themeSwitch.addEventListener('click', () => {
          htmlElement.classList.toggle('dark-theme');
          if (htmlElement.classList.contains('dark-theme')) {
            themeSwitch.textContent = '☀️ Tema Claro';
          } else {
            themeSwitch.textContent = '🌙 Tema Escuro';
          }
        });


// Menu Mobile
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
   menu.classList.toggle('show');
});