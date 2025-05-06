console.log("Hello world!");

// 1. alert() - выводит на экран выплиывающее окно с сообщением, в круглых скобках передаем сообщение
// alert("Hello World");

// 2. prompt() - возвращает в переменную то что ввел в поле пользователь
// - если пользователь ввел что-то в поле и нажал Ok, то в переменную answer возвращается то, что он ввел в качестве string
// - если пользователь ввел что-то в поле(или не ввел) и нажал Cancel, то в переменную answer возвращается null
// - если пользоваетель не ввел ничего и нажал Ok, то в переменную answer возвращается пустая строка ""
// let answer = prompt("How old are you?", 30);
// console.log(answer);

// 3. confirm() - способ задания вопроса пользователю с 2 вариантами действий
// - Ok - возвращает в переменную true
// - Cancel - возвращает в переменную false
// let isMarried = confirm("Are you married?");
// console.log(isMarried);

// !!! alert(), prompt() и confirm() - методы Web API(браузера) и не являются частью JS

/////////////////////////////////////////////////////////////////////////////////////////////////

//Operators

// 1. alert() - всплывающее окно
alert("Hello, my name is John");

// 2. promt() - получение данных введенных пользователем (2-ое значение по-умолчанию)
let answer = prompt("How old are you?", 30);
console.log(typeof answer);

// 3. confirm() - задание вопроса пользователю с двумя вариантами действия
let isMarried = confirm("Are you married");
console.log(isMarried);

// Operators

// +
// Сложение строк
let message1 = "Hello ";
let message2 = "World";
console.log(message1 + message2); // Hello world

// Число + число
console.log(23 + 22); // 45

// Число + строка
let someString = "22";
let number = 23;
console.log(number + someString); // 2322
console.log(typeof (number + someString)); // string

// string + boolean
console.log("some message " + true); // some message true

// string + undefined
console.log("some message " + undefined); // some message undefined

// string + null
console.log("some message " + null); // some message null

// number + undefined
console.log(23 + undefined); // NaN (Not a Number)

// number + null
console.log(23 + null); // 23

// number + boolean
console.log(23 + false); // 23, false воспринимается как 0
console.log(23 + true); // 23, true воспринимается как 1

// null + undefined
console.log(null + undefined); // NaN

// -
// string - number
let a = "22" - 5;
console.log(a); // 17
console.log(typeof a); // number

console.log("somestring" - 13); // NaN
console.log("50" - true);

// *
console.log("22" * null); // 0
console.log("somestring" * null);

// деление
// number / 0
console.log(23 / 0); // Infinity

// string / примитив
console.log("somestring" / true); // NaN
console.log("somestring" / "somestring1"); // NaN
console.log("somestring" / undefined); // NaN
console.log("somestring" / null); // NaN
console.log("somestring" / 3); // NaN

// boolean / boolean
console.log(true / false); // Infinity

// Несколько операций сразу
console.log((3 + 2) / 10); // 0.5

// ** - степень числа
console.log(3 ** 0); // 1

// % - взятие остатка
console.log(5 % 2); // 1

//  Синтаксический сахар
let number1 = 3;
// number1 = number1 + 2;
number1 += 2;
console.log(number1);

//////////////////////////////
// ++/--
let i = 2;
// console.log(i++); // 2 - отложенная
// console.log(i); // 3
console.log(++i); // 3 - моментальная
console.log(i); // 3

//////////////////////////////
// Операторы сравнения
// == и ===
console.log(1 == true); // true - проверяет равенство по значению
console.log(1 === true); // false - проверяет равенство значений и типов данных

// >, <, >=, <=
console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 2); // true

console.log("2" > 1); // true - преобразование строки в число при сравнении
console.log("01" == 1); // true
console.log(true == 1); // true - преобразование boolean в число при сравнении
console.log(false == 0); // true

// != и !==
console.log(0 != false); // false - проверяет неравенство по значению
console.log(0 !== false); // true - проверяет неравенство значений и типов данных
console.log(5 != "5"); // false
console.log(5 !== "5"); // true

//////////////////////////////
// Логические операторы
// && - И, || - ИЛИ, | - НЕ
console.log(true && false); // false
console.log(1 === "1" && true); // false

// ||
console.log(3 === 3 || 1 === 5); // true
console.log(3 === 3 || (1 === 5 && 5 === 5)); // true

// !
console.log(!true); // false
console.log(!1); // false
console.log(!("hello" === "hello")); // false

//////////////////////////////
// Условный оператор if-else
if (1 === 1) {
  console.log("it works");
} else {
  console.log("it does not work");
}

/////
let person = "Elena";

if (person === "Johny") {
  console.log("Доступ админу разрешен");
} else if (person === "Jack") {
  console.log(`Доступ ${person} разрешен`);
} else if (person === "John") {
  console.log(`Доступ ${person} разрешен`);
} else if (person === "Brat") {
  console.log(`Доступ ${person} разрешен`);
} else {
  console.log(`Доступ запрещен`);
}
