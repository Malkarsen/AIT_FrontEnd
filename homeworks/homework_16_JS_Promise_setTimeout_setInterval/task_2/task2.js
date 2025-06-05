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
  let numberOfMs = seconds * 1000;
  return new Promise((resolve, reject) => {
    if (seconds <= 10) {
      setTimeout(() => {
        resolve(`Прошло ${seconds} секунд(ы)`);
      }, numberOfMs);
    } else {
      setTimeout(() => {
        reject("Ошибка: максимальное количество секунд = 10");
      }, numberOfMs);
    }
  });
};

const wait = (second) => {
  showNumbers(second)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

wait(4);
wait(12);
wait(10);
