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
  inputField.style.borderBottom = "1px solid rgba(255,0,0,0.5)";
  inputField.style.setProperty("--placeholder-color", "rgba(255,0,0,0.5)");
}

function printEmailError(emailField) {
  const errorField = emailField.nextElementSibling;
  errorField.textContent = "Please enter a valid email address";
  errorField.style.display = "block";
  emailField.style.borderBottom = "1px solid rgba(255,0,0,0.5)";
  emailField.style.color = "rgba(255,0,0,0.5)";
}

function clearErrors() {
  const errs = document.querySelectorAll(".error--mssg");
  errs.forEach((el) => (el.style.display = "none"));
  const req_fields = obtainRequiredData();
  req_fields.forEach((inputField) => {
    inputField.style.borderBottom =
      "1px solid var(--secondary-color-san-juan-blue-semi-opaque)";
    inputField.style.setProperty(
      "--placeholder-color",
      "var(--secondary-color-san-juan-blue-semi-opaque)",
    );
    inputField.setAttribute("aria-invalid", "false");
  });
}

function getTestPrint() {
  let formValid = true;
  let requiredFields = obtainRequiredData();
  requiredFields.forEach((input) => {
    if (isEntryEmpty(input.value)) {
      printEmptyError(input);
      input.setAttribute("aria-invalid", "true");
      formValid = false;
    }
  });
  const emailBox = document.querySelector("#contact-email");
  if (
    isEntryEmpty(emailBox.value) == false &&
    isEmailValid(emailBox.value) == false
  ) {
    printEmailError(emailBox);
    emailBox.setAttribute("aria-invalid", "true");
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
