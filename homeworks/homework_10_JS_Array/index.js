// Задание 1
for (let index = 1; index <= 21; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
}

// Задание 2
const numbers = [2, 4, 6, 8, 10];
for (let index = 0; index < numbers.length; index++) {
  numbers[index] *= 2;
  console.log(numbers[index]);
}

// Задание 3
const names = ["Семен", "Иван", "Петр", "Татьяна"];
const ages = [18, 27, 74, 34];
const persons = [];
for (let index = 0; index < names.length; index++) {
  persons[index] = names[index] + " " + ages[index] + " лет/годов";
}
console.log(persons);

// Задание 4
let newPerson = [];
for (let index = 0; index < persons.length; index++) {
  newPerson[index] = persons[persons.length - index - 1];
}
console.log(newPerson);
