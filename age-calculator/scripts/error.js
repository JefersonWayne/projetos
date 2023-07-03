
function calculateAge() {
    let resetField = document.querySelectorAll(".fieldErrorText");

    resetField.forEach(resetField => {
        resetField.remove();
    });

    let divDay = document.querySelector("#divDay");
    let divMonth = document.querySelector("#divMonth");
    let divYear = document.querySelector("#divYear");

    let dayInput = divDay.querySelector("#inputDay");
    let monthInput = divMonth.querySelector("#inputMonth");
    let yearInput = divYear.querySelector("#inputYear");

    let dayValue = Number(divDay.querySelector("#inputDay").value);
    let monthValue = Number(divMonth.querySelector("#inputMonth").value);
    let yearValue = Number(divYear.querySelector("#inputYear").value);

    if (dayValue == 0 || monthValue == 0 || yearValue == 0) {
        let classInput = document.getElementsByClassName("input");

        if (dayValue == 0) {
            divDay.querySelector("label").style.cssText = "color: hsl(0, 100%, 67%);"
            dayInput.style.cssText = "border-color: hsl(0, 100%, 67%);"
            let fieldError = document.createElement("p");
            fieldError.setAttribute("class", "fieldErrorText");
            fieldError.textContent = "This field is required";
            classInput[0].appendChild(fieldError)
        }

        if (monthValue == 0) {
            divMonth.querySelector("label").style.cssText = "color: hsl(0, 100%, 67%);"
            monthInput.style.cssText = "border-color: hsl(0, 100%, 67%);"
            let fieldError = document.createElement("p");
            fieldError.setAttribute("class", "fieldErrorText");
            fieldError.textContent = "This field is required";
            classInput[1].appendChild(fieldError)
        }

        if (yearValue == 0) {
            divYear.querySelector("label").style.cssText = "color: hsl(0, 100%, 67%);"
            yearInput.style.cssText = "border-color: hsl(0, 100%, 67%);"
            let fieldError = document.createElement("p");
            fieldError.setAttribute("class", "fieldErrorText");
            fieldError.textContent = "This field is required";
            classInput[2].appendChild(fieldError)
        }


        return;
    }


    alert(`${dayValue} ${monthValue} ${yearValue}!`);
}