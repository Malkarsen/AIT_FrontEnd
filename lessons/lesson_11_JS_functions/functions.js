// Функции

// Функции бывают 3 видов:
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function

// Функции бывают 2 видов:
// 1. функция, которая что-то выполняет и ничего не возвращает
// 2. функция, которая что-то возвращает и может что-то выполнить, но не обязательно (опционально!)
// Функции могут возвращать любой тип данных

///////////////////////////////////////////////////////////////////////////////
// 1. Function Declaration (стандарт до 2016)
// - создание 1 функции
// - sayHelloWorld - функция, которая что-то выполняет и ничего не возвращает
sayHelloWorld(); // Function Declaration можно вызвать до того, как она написана в коде (т.к она запоминается в памяти сразу)
function sayHelloWorld() {
  // тело функции, тут прописываем всю логику
  console.log("Hello World!!!");
}

// - вызов функции
sayHelloWorld();

let resultOfSayHelloWorld = sayHelloWorld(); // resultOfSayHelloWorld === undefined, т.к sayHelloWorld ничего не возвращает
console.log(resultOfSayHelloWorld);

/////////////////////////////////////////////////////////////////////////////////
// - add - функция, которая что-то возвращает
// number1 и number2 являются аргументами функции add
// - если мы ничего не передадим, то они будут равны undefined
// - мы можем задать значеие по-умолчанию с помощью равно
function add(number1 = 100, number2 = 200) {
  let addResult = number1 + number2;
  return addResult;
  //   console.log(addResult); // все, что у нас указывается после return, не выполняется
}

let result = add(10, 15);
console.log(result); // 25
console.log(add(25, 25)); // 50
console.log(add(5, 6)); // 11
console.log(add(7, 8)); // 15
console.log(add()); // NaN, если у аргументов нет значений по умолчанию (со значениями по-умолчанию = 300)
console.log(add(3, 5)); // если мы всё-таки что-то передаем, то будут использованы переданные значения

/////////////////////////////////////////////////////////////////////////////////
// 2. Function Expression (стандарт до 2016)
// console.log(sayHi("Alex")); // Function Expression нельзя вызвать до того,
// как она встретиться в коде (резервируется память только под переменную)
const sayHi = function (firstName) {
  return `Hello, ${firstName}`;
};

console.log(sayHi("Alex"));
console.log(sayHi("Kate"));

/////////////////////////////////////////////////////////////////////////////////
// 3. Arrow Function (после 2016, после ECMAScript)
const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

let fullName = getFullName("Johny", "Depp");
console.log(fullName);

// 3.1 Сокращаем слово return (если до return нет других слов)
const getFullNameWithoutReturnWord = (firstName, lastName) =>
  `${firstName} ${lastName}`;

// 3.2 Можно опустить круглые скобки (если один аргумент в функции,
// но Prettir исправляет)
const showMessage = (message) => message;
let message = showMessage("Hello");
console.log(message);

// 3.3 Возврат объекта

// пример объекта
const user = {
  fullName: "John Johnson",
  age: 30,
  isMarried: true,
};

// без сокращения
const getUser1 = () => {
  return {
    fullName: "John Johnson",
    age: 30,
    isMarried: true,
  };
};

// сокращенный вариант
const getUser2 = () => ({
  fullName: "John Johnson",
  age: 30,
  isMarried: true,
});
console.log(getUser2());

// если массив
const getArray = () => ([1, 2, 3, 4, 5, 6, 7, 8]);

// тип данных у функции
console.log(typeof getUser2); // правильный тип данных функции - это object, но консоль выдаст function

///////////////////////
// callback-функции - функция, которя передана в другую функцию в качестве аргумента 
// (функция обратного вызова) мы передадим функцию, но вызовем её когда-то потом
const showSomeMessage = (getMessage) => {
  console.log(getMessage());
}

// V1
const getSomeMessage = () => {
  return "Hello, cohort_54";
};
showSomeMessage(getSomeMessage);

// V2
showSomeMessage(() => {
  return "Hello, cohort_54";
});