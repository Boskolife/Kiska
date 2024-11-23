burgerInit();
findHref();

function burgerInit() {
  const burger = document.querySelector('.burger_menu');
  const menu = document.querySelector('.header_nav');
  const logo = document.querySelector('.header_logo')

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('menu_active');
    logo.classList.toggle('logo_active');
    document.body.classList.toggle('body_lock');
  });
}

function findHref() {
  const menu = document.getElementById('menu');

  if (!menu) return;

  const links = menu.querySelectorAll('a');
  const url = window.location.href;

  links.forEach((link) => {
    if (url === link.href) {
      link.classList.add('menu_link_active');
    } else {
      link.classList.remove('menu_link_active'); // Очистка, если меняется URL
    }
  });
}
