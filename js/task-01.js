const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}\nElements: ${categoryElements}`);
});

// В цьому коді ми спочатку знаходимо список категорій ul#categories 
// і список його елементів li.item. Потім ми виводимо кількість категорій,
//  використовуючи властивість .length.

// Для кожного елемента ми знаходимо заголовок h2 і
//  кількість елементів li у його вкладених елементах. 
// Ці значення виводяться в консоль, 
// використовуючи функцію console.log().