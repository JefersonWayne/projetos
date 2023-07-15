const elements = {
    botaoMenu: document.querySelector("#btn-menu"),
    botaoFecharMenu: document.querySelector("#btn-fechar-menu"),
    botaoCart: document.querySelector("#icone-carrinho"),
    navMenu: document.querySelector("#menu"),
    divCart: document.querySelector("#carrinho"),
    destaque: document.querySelector(".imagem-destaque"),
    thumb: document.getElementsByClassName("imagens-thumb"),
    botaoRetirarCarrinho: document.querySelector("#btn-retirar"),
    botaoAdicionarCarrinho: document.querySelector("#btn-adicionar"),
    quantidadeCarrinho: document.querySelector("#quantidade"),
    loadProductName: document.querySelector("#nome-do-produto"),
    loadProductDescription: document.querySelector("#descricao-do-produto"),
    loadProductPrice: document.querySelector("#preco-sem-desconto"),
    loadProductPriceWithDiscount: document.querySelector("#preco-com-desconto"),
    loadProductDiscount: document.querySelector("#desconto"),
    addtoCart: document.querySelector("#adicionar-ao-carrinho"),
    cart: document.querySelector("#carrinho"),
};

let qtdCart = 0;

const cart = {
    name: "",
    price: "",
    quantity: "",
    total: "",
};

const product = {
    name: "Fall Limited Edition Sneakers",
    description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250,
    thumbnail: "ecommerce-product-page-main/images/image-product-1-thumbnail.jpg",
    discount: 0.5,
};

function atualizarCart() {
    if (qtdCart === 0) {
        const empty = document.createElement("p");
        empty.parentElement(document.getElementById("pedido"));
        empty.innerHTML = "Cart is empty";
        empty.setAttribute("id", "empty");
        return;
    }
    
}

elements.addtoCart.addEventListener("click", () => {
    if (qtdCart === 0) {
        alert("Add at least one item to cart");
        return;
    }
    atualizarCart();
});

window.addEventListener("load", () => {
    atualizarCart();
    elements.quantidadeCarrinho.innerHTML = qtdCart;
    elements.loadProductName.innerHTML = product.name;
    elements.loadProductDescription.innerHTML = product.description;

    const formattedPrice = product.price.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    const discountedPrice = (product.price * (1 - product.discount)).toLocaleString("en", { style: "currency", currency: "USD" });

    elements.loadProductPrice.innerHTML = formattedPrice;
    elements.loadProductPriceWithDiscount.innerHTML = discountedPrice;

    const discountPercentage = `${product.discount * 100}%`;
    elements.loadProductDiscount.innerHTML = discountPercentage;
});

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

elements.botaoRetirarCarrinho.addEventListener("click", () => {
    if (qtdCart === 0) {
        alert("The cart is empty");
        return;
    }
    elements.quantidadeCarrinho.innerHTML = --qtdCart;
});

elements.botaoAdicionarCarrinho.addEventListener("click", () => {
    elements.quantidadeCarrinho.innerHTML = ++qtdCart;
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
