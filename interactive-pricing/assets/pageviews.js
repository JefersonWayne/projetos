function updateValues() {
    const spanPageviews = document.querySelector("span#pageviews-range-value");
    const range = document.querySelector("input#pageviews-range");
    const rangeValue = Number(range.value);
    const spanPrice = document.querySelector("span#price-value");
    spanPageviews.innerHTML = rangeValue / 1000 + " K";
    const priceValue = (0.00016 * rangeValue).toLocaleString('en', { style: 'currency', currency: 'USD' });
    spanPrice.innerHTML = priceValue;
}

document.body.addEventListener('load', updateValues());
document.getElementById("pageviews-range").addEventListener("input", function () {
    updateValues();
});