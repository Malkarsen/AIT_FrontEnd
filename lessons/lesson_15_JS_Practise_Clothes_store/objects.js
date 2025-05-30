// Primitive types
// let
let animal = "Tiger";
console.log(animal);

animal = "Lion";
console.log(animal);

// const
const userName = "Tanya";
console.log(userName);

// userName = "Sergei";
// console.log(userName);

///////////////////////////////////////////////////////////////////////////
// Non-primitive(objects, arrays, funktions)
// let
let animals = ["Tiger", "Lion", "Rat"]; // в animals хранится ссылка на данные [...], которые лежат в области памяти("Heap")
console.log(animals);

let animals2 = animals;

animals = ["Tiger", "Lion", "Pig"]; // первая ссылка перестает существовать, в ячейку записывается ссылка на новые данные
console.log(animals);

const user = {
  firstName: "John",
  lastName: "Johnson",
};

// user = {
//   firstName: "Brat",
//   lastName: "Pitt",
// };

// Coping
let animals3 = ["Tiger", "Lion", "Rat"];
let animals4 = animals3; // Присвоение
let animals5 = [...animals3]; // Копирование

console.log(animals3);
console.log(animals4);
console.log(animals5);

animals3.push("Pig");
console.log(animals3);
console.log(animals4);
console.log(animals5);
