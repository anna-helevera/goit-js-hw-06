const fontSizeControl = document.querySelector('#font-size-control');
  const text = document.querySelector('#text');

  fontSizeControl.addEventListener('input', (event) => {
    text.style.fontSize = `${event.target.value}px`;
  });

//   У цьому скрипті ми спочатку знаходимо елементи інпуту і 
//   тексту за їхніми ідентифікаторами. Далі додаємо слухача 
//   події input до елементу інпуту, щоб реагувати на зміни 
//   його значення. Кожного разу, коли відбувається зміна значення, 
//   ми оновлюємо розмір шрифту текстового елементу, 
//   використовуючи отримане значення елементу інпуту.