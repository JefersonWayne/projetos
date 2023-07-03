function calculateAge() {
    var resetFields = document.querySelectorAll(".fieldErrorText");

    resetFields.forEach(element => {
        element.classList.remove("fieldErrorText");
        if (element.tagName.toLowerCase() === "p") {
            element.parentNode.removeChild(element);
        }
    });

    var divDay = document.querySelector("#divDay");
    var divMonth = document.querySelector("#divMonth");
    var divYear = document.querySelector("#divYear");

    var dayInput = divDay.querySelector("#inputDay");
    var monthInput = divMonth.querySelector("#inputMonth");
    var yearInput = divYear.querySelector("#inputYear");

    var dayValue = Number(dayInput.value);
    var monthValue = Number(monthInput.value);
    var yearValue = Number(yearInput.value);

    var daysRange = 31;
    var monthsRange = 12;

    var classInput = document.getElementsByClassName("input");

    // Verificação básica para o campo de dia (day)
    if (dayValue <= 0 || dayInput.value.length <= 0 || dayValue > daysRange) {
        let fieldError = document.createElement("p");
        fieldError.textContent = "";
        classInput[0].appendChild(fieldError);

        divDay.querySelector("label").classList.add("fieldErrorText");
        dayInput.classList.add("fieldErrorText");
        fieldError.classList.add("fieldErrorText");

        if (dayInput.value.length <= 0) {
            fieldError.textContent = "This field is required";
        } else if (dayValue <= 0 || dayValue > daysRange) {
            fieldError.textContent = "Must be a valid day";
        }
    }

    // Verificação básica para o campo de mês (month)
    if (monthValue <= 0 || monthInput.value.length <= 0 || monthValue > monthsRange) {
        let fieldError = document.createElement("p");
        fieldError.textContent = "";
        classInput[1].appendChild(fieldError);

        divMonth.querySelector("label").classList.add("fieldErrorText");
        monthInput.classList.add("fieldErrorText");
        fieldError.classList.add("fieldErrorText");

        if (monthInput.value.length <= 0) {
            fieldError.textContent = "This field is required";
        } else if (monthValue <= 0 || monthValue > monthsRange) {
            fieldError.textContent = "Must be a valid month";
        }
    }

    // Verificação básica para o campo de ano (year)
    if (yearValue <= 0 || yearInput.value.length <= 0) {
        let fieldError = document.createElement("p");
        fieldError.textContent = "";
        classInput[2].appendChild(fieldError);

        divYear.querySelector("label").classList.add("fieldErrorText");
        yearInput.classList.add("fieldErrorText");
        fieldError.classList.add("fieldErrorText");

        if (yearInput.value.length <= 0) {
            fieldError.textContent = "This field is required";
        }
    }
}
