const form = document.getElementById("signup-form");
const signinform = document.getElementById("signin-form");
var signin_nameInput = document.getElementById("signin-username");
var signin_nameError = document.getElementById("signin-username-error");
var signin_passwordInput = document.getElementById("sign-in-password");
var signin_passwordError = document.getElementById("signin-pass-error");
var nameInput = document.getElementById("username");
var nameError = document.getElementById("username-error");
var passwordInput = document.getElementById("password");
var passwordError = document.getElementById("pass-error");
var emailInput = document.getElementById("email");
var emailError = document.getElementById("email-error");
const confirmPass = document.getElementById("confirm-password");
const strength = document.getElementById("strength");
const confirmStatus = document.getElementById("confirm-status");

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
sign_up_btn.addEventListener("click", (event) => {
  event.preventDefault();
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

nameInput.addEventListener("input", function () {
  if (nameInput.value.length >= 3) {
    nameError.style.display = "none";
  } else {
    nameError.style.color = "red";
    nameError.textContent = "Name must be at least 3 characters";
    nameError.style.display = "block";
  }
});
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length > 0) {
    strength.style.display = "block";
    passwordError.style.display = "none";

  } else if (passwordInput.value.length === 0) {
    strength.style.display = "none";
    passwordInput.style.borderColor = "#230c74";
  }
   if (passwordInput.value.length < 4) {
    strength.innerHTML = "password is weak";
    passwordInputwordInput.style.borderColor = "#ff5325";
    strength.style.color = "#ff5325";
    passwordError.style.display = "none";

  } else if (passwordInput.value.length >= 4 && passwordInput.value.length < 8) {
    strength.innerHTML = "password is medium";
    passwordInput.style.borderColor = "rgb(218, 238, 36)";
    strength.style.color = "rgb(218, 238, 36)";
    passwordError.style.display = "none";

  } else if (passwordInput.value.length >= 8) {
    strength.innerHTML = "password is strong";
    passwordInput.style.borderColor = "green";
    strength.style.color = "green";
    passwordError.style.display = "none";
  } else if(passwordInput.value==""){
    confirmStatus.innerHTML = "";
}
});

confirmPass.addEventListener("input", () => {
  if (passwordInput.value !== confirmPass.value) {
    confirmStatus.innerHTML = "Passwords do not match";
    passwordInput.style.borderColor = "#ff5325";
    confirmPass.style.borderColor = "#ff5325";
    confirmStatus.style.color = "#ff5325";
  } else if(passwordInput.value==""){
    confirmStatus.innerHTML = "";
}else {
    confirmStatus.innerHTML = "Passwords match";
    passwordInput.style.borderColor = "green";
    confirmPass.style.borderColor = "green";
    confirmStatus.style.color = "green";
  }
});
emailInput.addEventListener("input", function () {
    if (emailInput.value.match(/^\S+@\S+\.\S+$/)) {
      emailError.style.display = "none";
    } else {
      emailError.textContent = "Invalid email format";
      emailError.style.color = "red";
      emailError.style.display = "block";
    }
  });
 
form.addEventListener("reset", function () {
  nameError.style.display = "none";
  emailError.style.display = "none";
  passwordError.style.display = "none";
  confirmStatus.style.display= "none";
  nameError.textContent = "";
  passwordError.textContent = "";
  emailError.textContent = "";
  confirmStatus.textContent = "";

});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  if (
    nameInput.value.trim() === "" ||
    passwordInput.value.trim() === "" ||
    confirmPass.value.trim() === "" ||
    emailInput.value.trim() === ""
  ) {
    nameError.style.color = " red";
    passwordError.style.color = "red";
    emailError.style.color = "red";
    nameError.textContent = "Please enter your name";
    passwordError.textContent = "Please enter a password";
    emailError.textContent = "Please enter an email";

    nameError.style.display = "block";
    passwordError.style.display = "block";
    emailError.style.display = "block";
  } else {
    form.submit();
  }
});
signin_nameInput.addEventListener("input", function () {
  if (signin_nameInput.value !== "") {
    signin_nameError.style.display = "none";
  } else {
    signin_nameError.style.color = "red";
    signin_nameError.textContent = "Name is required";
    signin_nameError.style.display = "block";
  }
});

signin_passwordInput.addEventListener("input", function () {
  if (signin_passwordInput.value !== "") {
    signin_passwordError.style.display = "none";
  } else {
    signin_passwordError.style.color = " red";
    signin_passwordError.textContent = "Password is required";
    signin_passwordError.style.display = "block";
  }
});

signinform.addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("login-homepage").addEventListener("click", function(event) {
    event.preventDefault();
  if (signin_nameInput.value.trim() === "" || signin_passwordInput.value.trim() === "") {
    signin_nameError.style.color = "red";
    signin_passwordError.style.color = "red";
    signin_nameError.textContent = "Please enter your name";
    signin_passwordError.textContent = "Please enter a password";

    signin_nameError.style.display = "block";
    signin_passwordError.style.display = "block";
  } else {
    var username = signin_nameInput.value;
    localStorage.setItem("username", username);
    signinform.submit();
  }
});
});
