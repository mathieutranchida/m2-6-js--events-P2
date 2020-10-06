let form = document.getElementById("form");
let terms = document.getElementById("termsInputId");

let errorBox = document.getElementById("errorBoxId");
let password = document.getElementById("passwordInputId");
let confirmPassword = document.getElementById("confirmPasswordInputId");
let errorSmallPassword =
  "Your password is too short! Please provide a password that is at least 10 characters long.";
let errorDifferentPassword =
  '"Confirm password" do not match the "Password"! Please fix it!';

form.addEventListener("submit", checkValidity);

function checkValidity(event) {
  event.preventDefault();
  cleanForm();
  if (!terms.checked) {
    window.alert("Please agree to our terms of servies to continue");
  }
  if (password.value.length < 10) {
    errorBox.innerText = `${errorSmallPassword}`;
    errorBox.style.display = "block";
    password.style.border = "solid red 2px";
    password.style.borderRadius = "5px";
    password.focus();
  } else if (password.value !== confirmPassword.value) {
    errorBox.innerText = `${errorDifferentPassword}`;
    errorBox.style.display = "block";
    confirmPassword.style.border = "solid red 2px";
    confirmPassword.style.borderRadius = "5px";
    confirmPassword.style.outline = "solid blue 2px";
    confirmPassword.focus();
  } else {
    window.alert("Success!");
  }
}

function cleanForm() {
  errorBox.display = "none";
  password.style.border = "solid rgb(167, 167, 167) 1px";
  confirmPassword.style.border = "solid rgb(167, 167, 167) 1px";
}
