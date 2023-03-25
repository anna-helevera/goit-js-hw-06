const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

let value = 0;

incrementBtn.addEventListener('click', () => {
  value += 1;
  counterValue.textContent = value;
});

decrementBtn.addEventListener('click', () => {
  value -= 1;
  counterValue.textContent = value;
});