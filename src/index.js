import './index.css';

const menu = document.querySelector('.mobile-menu__inner');
const menuLinks = document.querySelectorAll('.mobile-menu a');

document.querySelector('.js-menu-active').addEventListener('click', () => {
  const isActive = menu.classList.toggle('mobile-menu__inner--active');
  document.body.style.overflow = isActive ? 'hidden' : '';
});

// Закрытие меню при клике на ссылку
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('mobile-menu__inner--active');
    document.body.style.overflow = '';
  });
});
