// Objects

// 1. Создание простого объекта
const personFirst = {};
console.log(personFirst);
console.log(typeof personFirst);

let person = {
  firstName: "John",
  "last Name": "Johnson",
  age: 25,
  isMarried: true,
  dog: {
    dogName: "Spyke",
    color: "black",
  },
  sayHi: () => {
    console.log("Hello my name is John Johnson");
  },
};
// 2. Получение значений из объекта
// 2.1 - через точку (если имя ключа в одно слово)
console.log(person.firstName);
console.log(person.dog.dogName);
person.sayHi();

// 2.2 - через квадратные скобки(если имя ключа в одно или несколько слов)
console.log(person["last Name"]);

// 3. Удаление и перезаписывание св-ств
// - удаление
delete person.isMarried;
console.log(person);

// - перезаписывание
person.age = 26;
console.log(person);

// 4. Длина объекта - Object.key() и массив ключей объекта
const keysOfPersonArray = Object.keys(person);
console.log(keysOfPersonArray);
console.log(keysOfPersonArray.length);

// 5. Получить все значения св-в объекта в качестве массива значений
const valuesOfPersonArray = Object.values(person);
console.log(valuesOfPersonArray);

// 6. Проверка на наличия св-в в объекте (true/false)
console.log("firstName" in person);

// 7. Перебор ключей в объекте
for (let keys in person) {
  console.log(keys);
  console.log(person[keys]);
}

// 8. Перебор всех значений массива через of (in - перебирает элементы в объекте, of - перебирет элементы массива)
const personValues = Object.values(person);
console.log(personValues);
// for (let index = 0; index < personValues.length; index++) {
//     console.log(personValues[index]);
// }
for (let values of personValues) {
  console.log(values);
}

// 9. Desructuring - деструктуризация (когда мы ломаем структуру объекта для более гибкого получения значений)
const actor = {
  firstName: "Johny",
  lastName: "Depp",
  age: 50,
  isMarried: false,
  sayHi: (fName, lName) => {
    console.log(`Hello, I am ${fName} ${lName}`);
  },
};

// const firstName = actor.firstName;
// const lastName = actor.lastName;
// const age = actor.age;
// const isMarried = actor.isMarried;
// const sayHi = actor.sayHi;

// const {firstName, lastName, age, isMarried, sayHi} = actor;
const { firstName, lastName, ...rest } = actor;

console.log(firstName);
console.log(lastName);
// console.log(age);
// console.log(isMarried);
// console.log(sayHi);
console.log(rest); // как будто отдельный объект со свойствами

// 10. Spread оператор
const actor2 = {
  ...actor,
  firstName: "Jim",
  lastName: "Kerry",
  age: 60,
  hasOscar: false,
};
console.log(actor2);
