// Array - коллекция данных

// 1. Создание массива
// - создание пустого массива через
const newArray = new Array();
console.log(newArray);

// - создание пустого массива через [] - БУДЕМ ИСПОЛЬЗОВАТЬ ЭТОТ СПОСОБ В ДАЛЬНЕЙШЕМ
const emptyArray = [];
console.log(emptyArray);

// - создание массива со значениями по умолчанию
const animal = ["Dog", "Cat", "Rat", "Tiger", "Lion"];
console.log(animal);

// 2. Доступ к элементам массива
// - доступ к элементам мы получаем через index
// - index - это порядковый номер элемента в массиве
// - index элемента считается от 0, первый элемент в массиве будет иметь index === 0
let rat = animal[2];
console.log(rat);
// - заменим 3 элемент массива на Pig
animal[2] = "Pig";
console.log(animal);
// - добавить элемент Rat в конец массива
animal[5] = rat;
console.log(rat);
console.log(animal);

// 3. Длина массива
// length - свойство, позволяющего узнать длину массива
console.log(animal.length);

// 4. Тип данных массива
console.log(typeof animal);

// 5. Хранение различных типов данных в одном массиве
const mixedArray = [
  0,
  "Hello",
  true,
  animal,
  { id: "1", name: "John", age: 20 },
];
console.log(mixedArray);

// 6. Методы массивов pop/push, shift/unshift
const fruits = ["Apple", "Orange", "Cherry", "Pineapple"];
// - push() - метод массива, который добавляет элемент в конец массива
fruits.push("Grape");
console.log(fruits);
// - pop() - удаляет элемент с конца массива(а ещё и возвращает в переменную удаленный элемент)
let grape = fruits.pop();
console.log(fruits, grape);

// - unshift() - метод массива, который добавляет элемент в начало массива
fruits.unshift("Pear");
console.log(fruits);
// - shift() - удаляет элемент с начала массива(а ещё и возвращает в переменную удаленный элемент)
let pear = fruits.shift();
console.log(fruits, pear);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Циклы
// 1. for
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[6]);
console.log(numbers[7]);
console.log(numbers[8]);

// Пример: вывести все элементы массива через цикл for
for (let index = 0; index < numbers.length; index++) {
  // Тело цикла for
  console.log(numbers[index]);
}
// Пример: вывести все элементы массива, но не выводить второй
for (let index = 0; index < numbers.length; index++) {
  if (index === 2) {
    continue;
  } else {
    console.log(numbers[index]);
  }
}

// Пример: вывести первые 3 элемента массива, а затем прервать цикл
for (let index = 0; index < numbers.length; index++) {
  if (index === 3) {
    break;
  } else {
    console.log(numbers[index]);
  }
}

/////////////////////////////////////////////////////
// 2. while
const users = [
  "John Johnson",
  "Harry Potter",
  "Johny Depp",
  "Brat Pitt",
  "Homer Simpson",
];

let index = 0;
while (index < users.length) {
  console.log(users[index]);
  index++;
}

/////////////////////////////////////////////////////
// 3. do-while
let number = 6;

do {
  console.log("Сработает в любом случае");
} while (number < 6);

// преобразование данных
// Number() - преобразует в number
// Boolean() - преобразует в boolean
console.log(Boolean(0)); // false
// String() - преобразует в string
console.log(String("256")); // 256
