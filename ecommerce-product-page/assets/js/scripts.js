const elements = {
    botaoMenu: document.querySelector("#btn-menu"),
    botaoFecharMenu: document.querySelector("#btn-fechar-menu"),
    botaoCart: document.querySelector("#icone-carrinho"),
    navMenu: document.querySelector("#menu"),
    divCart: document.querySelector("#carrinho"),
    destaque: document.querySelector(".imagem-destaque"),
    thumb: document.getElementsByClassName("imagens-thumb"),
};

// Função para lidar com o clique no botão do menu
function handleClickMenu() {
    elements.navMenu.classList.toggle("active");
}

// Função para lidar com o clique no botão do carrinho
function handleClickCart() {
    elements.divCart.classList.toggle("active");
}

// Função para remover a classe 'active' dos elementos
function removeActive() {
    elements.divCart.classList.remove("active");
    elements.navMenu.classList.remove("active");
}

// Event listener para o clique no botão do menu
elements.botaoMenu.addEventListener("click", () => {
    if (elements.divCart.classList.contains("active")) {
        removeActive();
        setTimeout(() => {
            handleClickMenu();
        }, 650);
        return;
    }
    handleClickMenu();
});

// Event listener para o clique no botão do carrinho
elements.botaoCart.addEventListener("click", () => {
    if (elements.navMenu.classList.contains("active")) {
        removeActive();
        setTimeout(() => {
            handleClickCart();
        }, 500);
        return;
    }
    handleClickCart();
});

// Event listener para o clique no botão de fechar o menu
elements.botaoFecharMenu.addEventListener("click", () => {
    elements.navMenu.classList.remove("active");
});

// Event listener para o redimensionamento da janela
window.addEventListener("resize", () => {
    if (elements.divCart.classList.contains("active") || elements.navMenu.classList.contains("active")) {
        removeActive();
    }
});

const thumbImages = [
    "ecommerce-product-page-main/images/image-product-1.jpg",
    "ecommerce-product-page-main/images/image-product-2.jpg",
    "ecommerce-product-page-main/images/image-product-3.jpg",
    "ecommerce-product-page-main/images/image-product-4.jpg",
];

// Adiciona um event listener utilizando event delegation para as thumbs
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("imagens-thumb")) {
        const clickedThumb = event.target;
        const thumbs = Array.from(elements.thumb);

        thumbs.forEach((thumb) => {
            thumb.classList.remove("selected");
        });

        clickedThumb.classList.add("selected");

        const thumbIndex = thumbs.indexOf(clickedThumb);

        if (thumbImages[thumbIndex]) {
            elements.destaque.src = thumbImages[thumbIndex];
        }
    }
});
