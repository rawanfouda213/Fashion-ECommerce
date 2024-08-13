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
// ////////////////////////////////////////////////////////////////^
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var email = document.getElementById("email").value;
const pass = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");
const strength = document.getElementById("strength");
const confirmStatus = document.getElementById("confirm-status");
pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    strength.style.display = "block";
  } else if (pass.value.length === 0) {
    strength.style.display = "none";
    pass.style.borderColor = "#230c74";
  }
   if (pass.value.length < 4) {
    strength.innerHTML = "Password is weak";
    pass.style.borderColor = "#ff5325";
    strength.style.color = "#ff5325";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    strength.innerHTML = "Password is medium";
    pass.style.borderColor = "rgb(218, 238, 36)";
    strength.style.color = "rgb(218, 238, 36)";
  } else if (pass.value.length >= 8) {
    strength.innerHTML = "Password is strong";
    pass.style.borderColor = "green";
    strength.style.color = "green";
  } else if(pass.value==""){
    confirmStatus.innerHTML = "";
}
});

confirmPass.addEventListener("input", () => {
  if (pass.value !== confirmPass.value) {
    confirmStatus.innerHTML = "Passwords do not match";
    pass.style.borderColor = "#ff5325";
    confirmPass.style.borderColor = "#ff5325";
    confirmStatus.style.color = "#ff5325";
  } else if(pass.value==""){
    confirmStatus.innerHTML = "";
}else {
    confirmStatus.innerHTML = "Passwords match";
    pass.style.borderColor = "green";
    confirmPass.style.borderColor = "green";
    confirmStatus.style.color = "green";
  }
});
const signUp = (username, email, password) => {
  let userData = JSON.parse(localStorage.getItem("userData")) || [];
  let newUser = {
    username: username,
    email: email,
    password: password,
  };
  userData.push(newUser);

  localStorage.setItem("userData", JSON.stringify(userData));
};

const handleSignUp = () => {
  document.getElementById("sign-up-form").addEventListener("submit", (event) => {
    event.preventDefault();

    if (validateForm()) {
      const username = username.value.trim();
      const email = email.value.trim();
      const password = password.value.trim();

      signUp(username, email, password);
      alert("Form submitted successfully!");
    }
  });
};

handleSignUp();

////////////////////////////////////////////////////////////////^
