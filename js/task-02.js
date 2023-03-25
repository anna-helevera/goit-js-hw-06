const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector('#ingredients');

const liElements = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  return li;
});

ulIngredients.append(...liElements);

// Основна ідея полягає в тому, що ми перетворюємо масив ingredients 
// на масив елементів li за допомогою методу map(). Для кожного елемента 
// масиву ingredients ми створюємо новий елемент li, додаємо йому 
// клас item та текстовий вміст, який відповідає інгредієнту. 
// Потім ми вставляємо всі елементи li в список ul#ingredients 
// за допомогою методу append() та оператора спреду (...).