// 1. setTimeout();
// setTimeout(callback, ms);
// 1 аргумент - функция callback, которая выполняется через переданное в качестве 2 аргумента количество ms
// 2 аргумент - количество ms
// setTimeout возвращает timerID
console.log(1);
const someFunction = () => {
  console.log("Прошло 5 секунды");
};
const timerId = setTimeout(someFunction, 5000);
console.log(timerId);
console.log(2);
console.log(3);

// clearTimeout - отмена действия setTimeout, принимет в качестве аргумента timerId
setTimeout(() => {
  clearTimeout(timerId);
}, 4000);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. setInterval()
// setInterval(callback, ms);
// 1 аргумент - функция callback, которая выполняется через переданное в качестве 2 аргумента количество ms
// 2 аргумент - кол-во ms(интервал, с которым будет вызываться функция callback)
const intervalId = setInterval(() => {
  console.log("Вызов каждые 2 секунды");
}, 2000);

setTimeout(() => {
  clearInterval(intervalId);
}, 10000);
