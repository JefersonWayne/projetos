const PER_MONTH = 0.00135;
const PER_MONTH_DISCOUNT = PER_MONTH * 0.75;

// Verificar se os elementos do DOM estão presentes antes de acessá-los
const inputRange = document.getElementById("range");
const inputCheckbox = document.getElementById("checkbox");
const rangeSpan = document.getElementById("range-display");
const priceSpan = document.getElementById("price-display");

function setValue(perMonth) {
    const rangeValue = Number(inputRange.value);
    rangeSpan.textContent = rangeValue;

    const toDolar = (perMonth * rangeValue).toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });
    priceSpan.textContent = toDolar;
}

function updateValue() {
    const perMonth = inputCheckbox.checked ? PER_MONTH_DISCOUNT : PER_MONTH;
    setValue(perMonth);
}

// Chamar a função de atualização quando a página for carregada
window.addEventListener("load", updateValue);

// Atualizar o valor quando houver mudanças no intervalo ou na caixa de seleção
inputRange.addEventListener("input", updateValue);
inputCheckbox.addEventListener("input", updateValue);
