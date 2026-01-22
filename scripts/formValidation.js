function isEntryEmpty(input) {
  let inputLen = length(input.trim());
  if (inputLen > 0) {
    return False;
  } else {
    return True;
  }
}

function isEmailValid(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(email)) {
    return True;
  } else {
    return False;
  }
}

function obtainRequiredData() {
  const reqData = document.querySelectorAll(".must-fill");
  return reqData;
}

function obtainEmailField() {
  const emailField = document.querySelector("contact-email");
  return emailField;
}

function printEmptyError(inputField) {
  const errorField = inputField.nextElementSibling;
  errorField.textContent = "This field can't be empty";
}

function printEmailError(emailField) {
  const errorField = emailField.nextElementSibling;
  errorField.textContent = "Please enter a valid email";
}

function getTestPrint() {
  let requiredFields = obtainRequiredData();
  requiredFields.forEach((input) => {
    if (isEntryEmpty(input.value())) {
      printEmptyError(input);
    }
  });
  let emailBox = obtainEmailField();
  if (
    isEntryEmpty(emailBox.value()) == False &&
    isEmailValid(emailBox.value()) == False
  ) {
    printEmailError(emailBox);
  }
}

const bttn = document.querySelector('button[type="submit"]');
bttn.addEventListener("click", getTestPrint());
