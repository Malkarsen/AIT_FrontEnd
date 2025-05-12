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
    {id: "1", name: "John", age: 20},
];
console.log(mixedArray);

// 6. Методы массивов pop/push, shift/unshift
const fruits = ["Apple", "Orange", "Cherry", "Pineapple"];
// - push() - метод массива, который добавялет элемент в конец массива

// Циклы