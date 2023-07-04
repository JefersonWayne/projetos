function calculateAge() {
  const resetFields = document.querySelectorAll(".fieldErrorText");
  resetFields.forEach(element => {
    element.classList.remove("fieldErrorText");
    if (element.tagName.toLowerCase() === "p") {
      element.parentNode.removeChild(element);
    }
  });

  const getInputValue = (element) => Number(element.value);

  const showError = (input, errorMessage) => {
    const fieldError = document.createElement("p");
    fieldError.textContent = errorMessage;
    input.parentNode.appendChild(fieldError);
    input.parentNode.querySelector("label").classList.add("fieldErrorText");
    input.classList.add("fieldErrorText");
    fieldError.classList.add("fieldErrorText");
  };

  const divDay = document.querySelector("#divDay");
  const divMonth = document.querySelector("#divMonth");
  const divYear = document.querySelector("#divYear");
  const dayInput = divDay.querySelector("#inputDay");
  const monthInput = divMonth.querySelector("#inputMonth");
  const yearInput = divYear.querySelector("#inputYear");
  const dayValue = getInputValue(dayInput);
  const monthValue = getInputValue(monthInput);
  const yearValue = getInputValue(yearInput);

  const daysRange = 30.4;

  const validateInput = (value, input, errorMessage) => {
    if (value <= 0 || input.value.length <= 0 || value > daysRange) {
      showError(input, errorMessage);
      return false;
    }
    return true;
  };

  const allInputsValid = () => {
    let isValid = true;
    isValid = validateInput(dayValue, dayInput, "Must be a valid day") && isValid;
    isValid = validateInput(monthValue, monthInput, "Must be a valid month") && isValid;
    isValid = yearValue > 0 && yearInput.value.length > 0 && isValid;
    if (!isValid) {
      showError(yearInput, "This field is required");
    }
    return isValid;
  };

  if (!allInputsValid()) {
    return;
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const inputYear = getInputValue(yearInput);
  const inputMonth = getInputValue(monthInput);
  const inputDay = getInputValue(dayInput);
  const totalDays = (currentYear - inputYear) * 365 + (currentMonth - inputMonth) * 30 + (currentDay - inputDay);

  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);
  const days = Math.floor((totalDays % 365) % 30);

  document.getElementById('years-value').textContent = years;
  document.getElementById('months-value').textContent = months;
  document.getElementById('days-value').textContent = days;
}
