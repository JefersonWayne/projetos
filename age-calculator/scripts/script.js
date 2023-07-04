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
		fieldError.classList.add("fieldErrorText");
		input.parentNode.appendChild(fieldError);
		input.classList.add("fieldErrorText");
		input.setAttribute("aria-describedby", `${input.id}-error`);
		input.setAttribute("aria-invalid", "true");
		input.parentNode.querySelector("label").classList.add("fieldErrorText");
	};
	const removeError = (input) => {
		const fieldError = input.parentNode.querySelector(`#${input.id}-error`);
		if (fieldError) {
			fieldError.parentNode.removeChild(fieldError);
		}
		input.classList.remove("fieldErrorText");
		input.removeAttribute("aria-describedby");
		input.removeAttribute("aria-invalid");
		input.parentNode.querySelector("label").classList.remove("fieldErrorText");
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
	const validateInput = (value, input, errorMessage) => {
		if (isNaN(value) || value <= 0 || value > 31) {
			showError(input, errorMessage);
			return false;
		}
		removeError(input);
		return true;
	};
	const validateYearInput = (value, input) => {
		if (value === "") {
			showError(input, "This field is required");
			return false;
		}
		if (isNaN(value) || value <= 0 || input.value.length !== 4) {
			showError(input, "Invalid year");
			return false;
		}
		removeError(input);
		return true;
	};
	const allInputsValid = () => {
		let isValid = true;
		isValid = validateInput(dayValue, dayInput, "Invalid day") && isValid;
		isValid = validateInput(monthValue, monthInput, "Invalid month") && isValid;
		isValid = validateYearInput(yearValue, yearInput) && isValid;
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
	if (inputYear > currentYear) {
		removeError(yearInput);
		showError(yearInput, "Entered year is in the future");
		return;
	}
	if (inputMonth <= 0 || inputMonth > 12) {
		removeError(monthInput);
		showError(monthInput, "Invalid month");
		return;
	}
	const enteredDate = new Date(inputYear, inputMonth - 1, inputDay);
	const currentDateObj = new Date(currentYear, currentMonth - 1, currentDay);
	if (enteredDate.getTime() > currentDateObj.getTime()) {
		removeError(dayInput);
		removeError(monthInput);
		removeError(yearInput);
		showError(dayInput, "Entered date is in the future");
		showError(monthInput, "Entered date is in the future");
		showError(yearInput, "Entered date is in the future");
		return;
	}
	const totalDays = (currentYear - inputYear) * 365 + (currentMonth - inputMonth) * 30.4 + (currentDay - inputDay);
	const years = Math.floor(totalDays / 365);
	const months = Math.floor((totalDays % 365) / 30.4);
	const days = Math.floor((totalDays % 365) % 30.4);
	document.getElementById("years-value").textContent = years;
	document.getElementById("months-value").textContent = months;
	document.getElementById("days-value").textContent = days;
}