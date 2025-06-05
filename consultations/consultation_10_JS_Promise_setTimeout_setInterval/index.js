// 1. Задача:
// написать функцию, чтобы она увеличивала счетчик до 10 каждую сек
// и выводила каждый новый результат в консоль

let counter = 0;

const increaceCounter = () => {
  counter++;
  console.log(counter);
};

const intervalId = setInterval(increaceCounter, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 10100);

// 2. То же задание только без setInterval
for (let index = 1; index <= 10; index++) {
  setTimeout(() => {
    console.log(index);
  }, index * 1000);
}

// 3. Случайное появление элементов:
// Создайте страницу с несколькими элементами (например, div).
// Используйте setTimeout(), чтобы сделать их видимыми через 5 секунд после загрузки страницы.
const ITEMS = document.querySelectorAll(".items");

setTimeout(() => {
  ITEMS.forEach((element) => {
    element.style.display = "flex";
  });
}, 5000);
