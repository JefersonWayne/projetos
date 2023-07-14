const icone = document.querySelector('#icone-carrinho');
const divCarrinho = document.querySelector('#carrinho');

icone.addEventListener('click', () => {
    if (document.querySelector('#menu').classList.contains('active')) {
        document.querySelector('#menu').classList.remove('active');
        setTimeout(() => {
            divCarrinho.classList.toggle('active');
        }, 500);
        return;
    }
    divCarrinho.classList.toggle('active');
});

window.addEventListener('resize', () => {
    divCarrinho.classList.remove('active');
});

window.addEventListener('click', (event) => {
    if (!divCarrinho.contains(event.target) && !icone.contains(event.target)) {
        divCarrinho.classList.remove('active');
    }
});
