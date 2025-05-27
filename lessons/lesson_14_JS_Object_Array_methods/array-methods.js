// Array methods

// 1. reverse()
// - меняет элементы массива местами(наоборот).
//   Например: последний элемент становится первым, а первый последним
// - меняет исходный массив

let message = "hello World";
let messageArray = message.split("");
console.log(messageArray);
messageArray.reverse();
console.log(messageArray);
const reversedMessage = messageArray.join("");

////////////////////////////////////////////////////////////////////////////////////////
// 2. map()
// - не меняет исходный массив
// - возвращает новый массив в переменную
// - всегда: количество элементов в новом массиве будет всегда столько же сколько и в старом
// - если ф-я callback ничего не вернет, то значения в новом массиве будут undefined
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((value, index, array) => {
  // index - индекс перебираемого элемента (необязательный аргумент)
  // array - перебираемый массив (необязательный аргумент)
  console.log(value);
  console.log(index);
  console.log(array);
  // if (value < 4) {
  //   return value * 2;
  // } // [2, 4, 6, undefined, undefined]
  return value * 2;
});
console.log(numbers);
console.log(newNumbers);

////////////////////////////////////////////////////////////////////////////////////////
// 3. forEach()
// - не меняет исходный массив
// - возвращает undefined
// - используется, чтобы сделать какие-нибудь операции с элементами массива, не обязательно со всеми
const numbers2 = [1, 2, 3, 4, 5];

let numbersArray = [];
// вернет undefined
numbers2.forEach((value) => {
  if (value < 4) {
    numbersArray.push(value);
  }
});
console.log(numbersArray);

////////////////////////////////////////////////////////////////////////////////////////
// 4. filter()
// - возвращает новый массив, но отфильтрованный
// - если функция callback возвращает true, то элемент возвращается в новый массив, если нет, то не возвращается
// - не меняет исходный массив
const employees = [
  { id: 1, fullName: "John Doe", age: 30, job: "QA" },
  { id: 2, fullName: "Jane Smith", age: 25, job: "Frontend" },
  { id: 3, fullName: "Alex Johnson", age: 35, job: "Backend" },
  { id: 4, fullName: "Emily Brown", age: 28, job: "UI/UX" },
  { id: 5, fullName: "Michael Wilson", age: 32, job: "QA" },
  { id: 6, fullName: "Sarah Davis", age: 27, job: "Front end" },
  { id: 7, fullName: "Daniel Martinez", age: 33, job: "Backend" },
  { id: 8, fullName: "Olivia Anderson", age: 29, job: "UI/UX" },
  { id: 9, fullName: "William Thomas", age: 31, job: "QA" },
];

// Создать массив из всех сотрудников, возраст < 30
const filteredArrayByAge = employees.filter((value) => {
  return value.age < 30;
});
console.log(filteredArrayByAge);

////////////////////////////////////////////////////////////////////////////////////////
// 5. reduce()

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultOfNumbers3Sum = numbers3.reduce((accumulator, nextValue, index, array) => {
  console.log("Accumulator ", accumulator);
  console.log("Next Value ",nextValue);
  return accumulator + nextValue;
}, 0); // можно задать начальное значение для accumulator
console.log(resultOfNumbers3Sum);
