function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.querySelector('body');

button.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
});


// Цей скрипт додає обробник події click на кнопку з класом
//  "change-color". При кліку на кнопку він генерує
//   новий випадковий колір за допомогою функції getRandomHexColor,
//    встановлює його як кольору фону елементу body і
//     виводить його значення в елемент span з класом "color".