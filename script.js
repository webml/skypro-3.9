//Задание 3
const checkForm = document.querySelector(".check-form");
const checkBtn = checkForm.querySelector(".btn");
const checkInput = checkForm.querySelector(".checkbox");
const checkField = checkForm.querySelector(".form__field");

const warningMessage = document.createElement("p");
warningMessage.style.paddingTop = "8px";

checkBtn.addEventListener("click", () => {
  if (!checkInput.checked) {
    warningMessage.textContent = "Необходимо поставить галочку";
    checkField.classList.add("form__field_warning");
    checkForm.appendChild(warningMessage);
  }
});

checkField.addEventListener("click", () => {
  if (checkInput.checked) {
    checkField.classList.remove("form__field_warning");
    warningMessage.remove();
  }
});

//Задание 4
const radioForm = document.querySelector(".radio-form");

radioForm.addEventListener("submit", () => {
  event.preventDefault();

  const male = radioForm.querySelector(".male");
  const female = radioForm.querySelector(".female");

  if (male.checked) {
    warningMessage.textContent = "Вход только для женщин";
    radioForm.appendChild(warningMessage);
  }

  if (female.checked) {
    warningMessage.textContent = "Вход только для мужчин";
    radioForm.appendChild(warningMessage);
  }
});
