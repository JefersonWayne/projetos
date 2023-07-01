
var questionOne = document.querySelector("#faq-question-1")
var questionTwo = document.querySelector("#faq-question-2")
var questionThree = document.querySelector("#faq-question-3")
var questionFor = document.querySelector("#faq-question-4")
var questionFive = document.querySelector("#faq-question-5")

questionOne.addEventListener('click', function() {
    openTopic(1)
});

questionTwo.addEventListener('click', function() {
    openTopic(2)
});

questionThree.addEventListener('click', function() {
    openTopic(3)
});

questionFor.addEventListener('click', function() {
    openTopic(4)
});

questionFive.addEventListener('click', function() {
    openTopic(5)
});



function openTopic(topicNumber) {
    for (var i = 1; i <= 5; i++) {
        var removeTitleBold = document.querySelector(`#faq-question-${i} > .topic-title`);
        var removeTopic = document.querySelector(`#faq-question-${i} > .topic-paragraph`);
        var removeImg = document.querySelector(`#faq-question-${i} > img`);

        removeImg.removeAttribute('class', 'selected');
        removeTopic.setAttribute('class', 'topic-paragraph');
        removeTitleBold.style.cssText = "font-weight: 400;";
    }

    var setTitleBold = document.querySelector(`#faq-question-${topicNumber} > .topic-title`);
    var setTopic = document.querySelector(`#faq-question-${topicNumber} > .topic-paragraph`);
    var setImg = document.querySelector(`#faq-question-${topicNumber} > img`);

    setTitleBold.style.cssText = "font-weight: 700;";
    setImg.setAttribute('class', 'selected');
    setTopic.setAttribute('class', 'topic-paragraph selected');
}