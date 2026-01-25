function isEntryEmpty(input) {
  let inputLen = input.trim().length;
  if (inputLen > 0) {
    return false;
  } else {
    return true;
  }
}

function isEmailValid(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}

function obtainRequiredData() {
  const reqData = document.querySelectorAll(".must-fill");
  return reqData;
}

function printEmptyError(inputField) {
  const errorField = inputField.nextElementSibling;
  errorField.textContent = "This field can't be empty";
  errorField.style.display = "block";
}

function printEmailError(emailField) {
  const errorField = emailField.nextElementSibling;
  errorField.textContent = "Please enter a valid email";
  errorField.style.display = "block";
}

function clearErrors() {
  const errs = document.querySelectorAll(".error--mssg");
  errs.forEach((el) => (el.style.display = "none"));
}

function getTestPrint() {
  let formValid = true;
  let requiredFields = obtainRequiredData();
  requiredFields.forEach((input) => {
    if (isEntryEmpty(input.value)) {
      printEmptyError(input);
      formValid = false;
    }
  });
  const emailBox = document.querySelector("#contact-email");
  if (
    isEntryEmpty(emailBox.value) == false &&
    isEmailValid(emailBox.value) == false
  ) {
    printEmailError(emailBox);
    formValid = false;
  }
  console.log(formValid);
  return formValid;
}

const form = document.querySelector(".contact--form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();
  if (getTestPrint()) {
    form.submit();
  }
});
