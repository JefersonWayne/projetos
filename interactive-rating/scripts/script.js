// Buttons

var rating_buttons = document.getElementsByClassName("rating-buttons");
var selected_button;

var button_1 = document.getElementById("rating-1");
var button_2 = document.getElementById("rating-2");
var button_3 = document.getElementById("rating-3");
var button_4 = document.getElementById("rating-4");
var button_5 = document.getElementById("rating-5");

button_1.addEventListener('click', function() {
    setRating(1); // Chama a função setRating() com a classificação 1
});
button_2.addEventListener('click', function() {
    setRating(2); // Chama a função setRating() com a classificação 2
});
button_3.addEventListener('click', function() {
    setRating(3); // Chama a função setRating() com a classificação 3
});
button_4.addEventListener('click', function() {
    setRating(4); // Chama a função setRating() com a classificação 4
});
button_5.addEventListener('click', function() {
    setRating(5); // Chama a função setRating() com a classificação 5
});

function setRating(rating) {
    for (var i = 1; i <= 5; i++) {
        var button = document.getElementById("rating-" + i); // Obtém o botão de classificação pelo ID
        button.removeAttribute('class', 'selected'); // Remove a classe 'selected' do botão
    }

    var selected_button = document.getElementById("rating-" + rating); // Obtém o botão selecionado pela classificação
    selected_button.setAttribute('class', 'selected'); // Adiciona a classe 'selected' ao botão selecionado
}

// Submit Click

var submit = document.querySelector("button#submit");
submit.addEventListener('click', onSubmit);

function onSubmit() {
    var section_1 = document.querySelector("section#rating-state");
    var section_2 = document.querySelector("section#thank-you-state");
    var selected_button = document.querySelector("button.selected");

    if (selected_button == undefined) {
        window.alert("Dear user, it seems that you haven't selected any rating. Please make sure to choose a rating before submitting. Thank you!")
    } else {
        section_1.style.display = 'none';
        section_2.setAttribute('style', 'display: flex;');
    }
}