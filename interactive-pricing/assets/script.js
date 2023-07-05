const domReferences = {
    inputRange: document.getElementById("range"),
    inputCheckbox: document.getElementById("checkbox"),
    rangeSpan: document.getElementById("range-display"),
    priceSpan: document.getElementById("price-display")
};

const rangeConfig = {
    1: { range: "10K", price: 8, discount: 0.75 },
    2: { range: "50K", price: 12, discount: 0.75 },
    3: { range: "100K", price: 16, discount: 0.75 },
    4: { range: "500K", price: 24, discount: 0.75 },
    5: { range: "1M", price: 36, discount: 0.75 }
};

function setPrice(rangeValue, priceValue) {
    domReferences.rangeSpan.innerHTML = rangeValue;
    domReferences.priceSpan.innerHTML = priceValue.toLocaleString('en', { style: 'currency', currency: 'USD' });
}

function calcDiscount(range, price, discountValue) {
    const isChecked = domReferences.inputCheckbox.checked;
    const discountedPrice = price * discountValue;
    setPrice(range, isChecked ? discountedPrice : price);
}

function setValue() {
    const rangeValue = Number(domReferences.inputRange.value);
    const { range, price, discount } = rangeConfig[rangeValue];
    calcDiscount(range, price, discount);
}

window.addEventListener("load", setValue);
domReferences.inputRange.addEventListener("input", setValue);
domReferences.inputCheckbox.addEventListener("input", setValue);