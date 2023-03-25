const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const dataLength = Number(input.getAttribute("data-length"));
  const inputValueLength = input.value.length;

  if (inputValueLength === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
// У скрипті спочатку отримуємо значення атрибуту data-length з інпуту, і довжину введеного користувачем тексту.
// Потім перевіряємо, чи співпадає кількість введених символів з вказаною у атрибуті data-length кількістю.
// Якщо так, то додаємо клас valid і видаляємо клас invalid, а якщо ні - додаємо клас invalid і видаляємо клас valid.
// Це дозволяє змінювати колір рамки відповідно до правильності введення даних.





