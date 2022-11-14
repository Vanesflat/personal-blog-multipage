const body = document.body;
const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page');

const mask = document.createElement('div');
mask.classList.add('page__mask');

burger.addEventListener('click', (evt) => {
  body.classList.contains('show-sidebar') ? closeSidebar() : showSidebar();
});

function showSidebar() {
  body.classList.add('show-sidebar');
  mask.addEventListener('click', closeSidebar);
  page.append(mask);
}

function closeSidebar() {
  body.classList.remove('show-sidebar');
  mask.remove();
}
