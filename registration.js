const form = document.getElementById("regForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const role = document.getElementById("role");
const message = document.getElementById("message");

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!name.value.trim() || !email.value.trim() || !password.value || !confirmPassword.value || !role.value) {
    showError("Пожалуйста, заполните все поля");
    return;
  }

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email.value)) {
    showError("Неверный email!");
    return;
  }

  if (password.value.length < 6) {
    showError("Пароль слишком короткий!");
    return;
  }

  if (password.value !== confirmPassword.value) {
    showError("Пароли не совпадают!");
    return;
  }

  showSuccess("Регистрация успешна!");
  form.reset();
});

function showError(msg) {
  message.innerText = msg;
  message.style.background = "#ff4d4d";
  message.style.color = "white";
}

function showSuccess(msg) {
  message.innerText = msg;
  message.style.background = "#4CAF50";
  message.style.color = "white";
}

