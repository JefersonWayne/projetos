const elements = {
    menu: document.querySelector('#menu'),
    openMenu: document.querySelector("#btn-menu"),
    closeMenu: document.querySelector("#btn-fechar-menu"),
    icone: document.querySelector('#icone-carrinho'),
    divCarrinho: document.querySelector('#carrinho')
};

/**
 * Hides the menu by removing the 'active' class.
 */
function hideMenu() {
    elements.menu.classList.remove('active');
}

/**
 * Shows the menu by adding the 'active' class.
 */
function showMenu() {
    elements.menu.classList.add('active');
}

elements.openMenu.addEventListener('click', () => {
    elements.divCarrinho.classList.remove('active');
    setTimeout(showMenu, 500);
});

elements.closeMenu.addEventListener('click', hideMenu);

function handleIconClick() {
    elements.menu.classList.toggle('active');
    if (elements.menu.classList.contains('active')) {
        elements.divCarrinho.classList.remove('active');
    } else {
        elements.divCarrinho.classList.toggle('active');
    }
}

elements.icone.addEventListener('click', handleIconClick);

window.addEventListener('resize', () => {
    hideMenu();
    elements.divCarrinho.classList.remove('active');
});

window.addEventListener('click', (event) => {
    const isIconClick = elements.icone.contains(event.target);
    const isMenuClick = elements.menu.contains(event.target);
    const isClickOutsideMenu = !isMenuClick && !isIconClick;

    if (isClickOutsideMenu && elements.menu.classList.contains('active')) {
        hideMenu();
    } else if (!isMenuClick && !isIconClick) {
        elements.menu.classList.remove('active');
    }
});
