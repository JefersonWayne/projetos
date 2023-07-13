const dom = {
    menu: document.querySelector("nav#menu"),
    closeMenu: document.querySelector("#btn-fechar-menu"),
}

if (dom.menu && dom.closeMenu) {
    dom.menu.addEventListener("click", () => {
        dom.menu.classList.add("active");
    })

    dom.closeMenu.addEventListener("click", () => {
        dom.menu.removeAttribute("class", "active");
    })
} else {
    console.error("One or both DOM elements do not exist.");
}
