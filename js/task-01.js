const navEl = document.querySelectorAll(".item");

//  находим количество категорий у главного ul
const numberOfCategories = navEl.length;

//  находим название h2
// const x = document.querySelectorAll("#categories h2");
// const y = [...x].map((element) => {
//   return element.textContent;
// });

console.log(`Number of categories: ${numberOfCategories}`);

navEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});

// -----------------------------------------------------------------------------
// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
