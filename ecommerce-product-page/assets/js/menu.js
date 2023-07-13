const dom = {
    menu: document.querySelector('#menu'),
    openMenu: document.querySelector("#btn-menu"),
    closeMenu: document.querySelector("#btn-fechar-menu")
}

function removeMenu() {
    dom.menu.classList.remove('active');
}

function addMenu() {
    dom.menu.classList.add('active');
}

dom.openMenu.addEventListener('click', addMenu);

dom.closeMenu.addEventListener('click', removeMenu);
window.addEventListener('resize', removeMenu);