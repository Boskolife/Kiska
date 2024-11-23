burgerInit();
findHref();
searchFaq();

function burgerInit() {
  const burger = document.querySelector('.burger_menu');
  const menu = document.querySelector('.header_nav');
  const logo = document.querySelector('.header_logo');

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

function searchFaq() {
  const searchInput = document.querySelector('.search_input');
  const items = document.querySelectorAll('.list_item');

  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();

    items.forEach((item) => {
      const title = item.querySelector('.item_title').textContent.toLowerCase();
      const text = item.querySelector('.list_text').textContent.toLowerCase();

      if (title.includes(query) || text.includes(query)) {
        item.classList.remove('hidden_item');
      } else {
        item.classList.add('hidden_item');
      }
    });
  });
}
