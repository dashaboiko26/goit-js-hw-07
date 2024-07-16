const categories = document.querySelectorAll(`#categories .item`);
console.log(`Кількість категорій:`, categories.length);
categories.forEach((category) => {
  const title = category.querySelector(`h2`).textContent;
  console.log(`Категорія: ${title}`);
  const itemsCount = category.querySelectorAll(`ul li`).length;
  console.log(itemsCount);
});
