// Buttons

// Get all elements with the class "rating-buttons" and store them in a variable
var rating_buttons = document.getElementsByClassName("rating-buttons");
var selected_button;

// Get individual buttons by their ID and store them in separate variables
var button_1 = document.getElementById("rating-1");
var button_2 = document.getElementById("rating-2");
var button_3 = document.getElementById("rating-3");
var button_4 = document.getElementById("rating-4");
var button_5 = document.getElementById("rating-5");

// Add a click event listener to each button
button_1.addEventListener('click', function() {
    setRating(1); // Call the setRating() function with rating 1
});
button_2.addEventListener('click', function() {
    setRating(2); // Call the setRating() function with rating 2
});
button_3.addEventListener('click', function() {
    setRating(3); // Call the setRating() function with rating 3
});
button_4.addEventListener('click', function() {
    setRating(4); // Call the setRating() function with rating 4
});
button_5.addEventListener('click', function() {
    setRating(5); // Call the setRating() function with rating 5
});

// Function to set the rating
function setRating(rating) {
    // Iterate through the rating buttons from 1 to 5
    for (var i = 1; i <= 5; i++) {
        var button = document.getElementById("rating-" + i); // Get the rating button by ID
        button.removeAttribute('class', 'selected'); // Remove the 'selected' class from the button
    }

    var selected_button = document.getElementById("rating-" + rating); // Get the selected button based on the rating
    selected_button.setAttribute('class', 'selected'); // Add the 'selected' class to the selected button

    var rating_value = document.querySelector("span#rating");
    rating_value.innerHTML = rating;
}

// Submit Click

var submit = document.querySelector("button#submit");
submit.addEventListener('click', onSubmit);

function onSubmit() {
    var section_1 = document.querySelector("section#rating-state");
    var section_2 = document.querySelector("section#thank-you-state");
    var selected_button = document.querySelector("button.selected");

    // Check if a button is selected
    if (selected_button == undefined) {
        // Display an alert if no button is selected
        window.alert("Dear user, it seems that you haven't selected any rating. Please make sure to choose a rating before submitting. Thank you!");
    } else {
        // Hide the rating section and display the thank-you section
        section_1.style.display = 'none';
        section_2.setAttribute('style', 'display: flex;');
    }
}

// This educational script was created by Flávio Jeferson in collaboration with the ChatGPT AI.