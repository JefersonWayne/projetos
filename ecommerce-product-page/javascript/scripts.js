// Referências do DOM
const domReferences = {
    productName: document.querySelector("h1#product-name"),
    productDescription: document.querySelector("#product-description"),
    productPercentage: document.querySelector("#discount-percentage"),
    originalPrice: document.querySelector("#original-price"),
    discountedPrice: document.querySelector("#discounted-price"),
    decreaseQuantity: document.querySelector("#decrease-quantity"),
    currentQuantity: document.querySelector("#current-quantity"),
    increaseQuantity: document.querySelector("#increase-quantity"),
    addCart: document.querySelector("#add-to-cart"),
};

// Informações do produto
const product = {
    name: "Fall Limited Edition Sneakers",
    description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    discountPercentage: 50,
    price: 250,
    currentQuantity: 1,
};

// Evento de clique no botão "Decrease Quantity"
domReferences.decreaseQuantity.addEventListener("click", decreaseQuantityHandler);

// Evento de clique no botão "Increase Quantity"
domReferences.increaseQuantity.addEventListener("click", increaseQuantityHandler);

// Função para atualizar os detalhes do produto
function updateProduct() {
    const pricetopayNoDiscount = product.price * product.currentQuantity;
    const pricetopay = pricetopayNoDiscount * (product.discountPercentage / 100);

    domReferences.productName.textContent = product.name;
    domReferences.productDescription.textContent = product.description;
    domReferences.productPercentage.textContent = product.discountPercentage + "%";
    domReferences.originalPrice.textContent = formatCurrency(pricetopayNoDiscount);
    domReferences.discountedPrice.textContent = formatCurrency(pricetopay);
    domReferences.currentQuantity.textContent = product.currentQuantity;
}

// Função para lidar com o clique no botão "Decrease Quantity"
function decreaseQuantityHandler() {
    if (product.currentQuantity === 1) {
        return alert("A quantidade mínima de produtos no carrinho é 1");
    }

    product.currentQuantity--;
    updateProduct();
}

// Função para lidar com o clique no botão "Increase Quantity"
function increaseQuantityHandler() {
    if (product.currentQuantity === 10) {
        return alert("A quantidade máxima de produtos no carrinho é 10");
    }
    product.currentQuantity++;
    updateProduct();
}

// Função utilitária para formatar o preço como moeda
function formatCurrency(price) {
    return price.toLocaleString("en", { style: "currency", currency: "USD" });
}

// Evento de carregamento da janela
window.addEventListener("load", updateProduct);
