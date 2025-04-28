// вывод сообщения в консоль
console.log("Hello, world!");

// Переменные 
// let - изменяемая переменная
// объявление переменной
let message;
// присваивание значения
message = "New message";
console.log(message);
message = "Hello";
console.log(message);

// const - неизменяемая переменная
const firstName = "John";
console.log(firstName);
// ошибка - переменная неизменяемая
// firstName = "Mary";
// console.log(firstName);

// Типы данных
// 1. Строка - string
let someName = 'Tom';
console.log(someName);

// 2. Числовое значение - number (отрицательные, дробные)
let age = 23;
age = -23;
age = 20.5;
age = Infinity; // бесконечность
age = NaN; // ошибка вычислений
console.log(age);

// 3. Большое число - bigint
let bigNum = 123333333333333333333333333333333333333333333333333333;
console.log(bigNum);

// 4. Логический тип - boolean
let isAdmin = true;
console.log(isAdmin);

// 5. Неопределенный тип - undefined (не заданное, которое можно будет переписать)
let animal = undefined;
console.log(animal);

// 6. Пустое значение - null (воспринимается как пусто значение)
let value = null;
console.log(value);

// 7. Символ - symbol
let id = Symbol();
console.log(id);

// 8. Объекты - object (пары ключ/значение). Дополнительно входят массивы и функции
let person = {
    name: 'Bob',
    age: 34
}

// JS - не строго типизированный язык, поэтому можно изменять тип переменной во время кода
// изменеие значения (и типа) переменной
value = 100;
console.log(value);

