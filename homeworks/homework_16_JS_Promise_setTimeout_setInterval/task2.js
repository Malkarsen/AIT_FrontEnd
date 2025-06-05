// Задание 2
// Создание и обработка промисов
// Создайте функцию showNumbers(seconds), которая принимает в качестве аргумента
// число секунд и возвращает промис.
// Промис должен выполняться через указанное количество секунд и возвращать сообщение
// "Прошло {seconds} секунд(ы)".
// Используйте setTimeout внутри промиса для создания задержки выполнения.
// Если колличестов секунд больше 10, то промис должен возвращать ошибку
// "Ошибка: максимальное количество секунд = 10".
// Создайте несколько экземпляров функции showNumbers с разными значениями секунд
// и выведите результат выполнения каждого промиса.

const showNumbers = (seconds) => {
  return new Promise((resolve, reject) => {
    if (seconds <= 10) {
      setTimeout(() => {
        resolve(`Прошло ${seconds} секунд(ы)`);
      }, seconds * 1000);
    } else {
      setTimeout(() => {
        reject("Ошибка: максимальное количество секунд = 10");
      }, 10 * 1000);
    }
  });
};

const promise1 = showNumbers(4);
const promise2 = showNumbers(12);
const promise3 = showNumbers(10);

promise1.then((result) => {
  console.log("1", result);
})
.catch((error) => {
  console.log("1", error);
})
.finally(() => {
  console.log("Блок кода, который выполнится в любом случае");
});
///////////////////////////
promise2.then((result) => {
  console.log("2", result);
})
.catch((error) => {
  console.log("2", error);
})
///////////////////////////
promise3.then((result) => {
  console.log("3", result);
})
.catch((error) => {
  console.log("3", error);
})
