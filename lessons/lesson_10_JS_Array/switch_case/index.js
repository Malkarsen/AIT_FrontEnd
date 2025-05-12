let secretNumber = 7;
let answer = 9;

if (answer === secretNumber) {
  console.log("Вы угадали!");
} else if (1 <= answer && answer < secretNumber) {
  console.log("Введите число больше...");
} else if (secretNumber < answer && answer <= 10) {
  console.log("Введите число меньше...");
} else {
  console.log("Введенное число выходит из диапазона");
}

///////////////////////////////////
// Тернальные опреаторы

// Тернальные опреаторы используем в коротком варианте if-else (один if, один else)
// в противном случае стандартную конструкцию if-else
answer === secretNumber
  ? console.log("Вы угадали!")
  : console.log("Вы не угадали");

// answer === secretNumber
//  ? console.log("Вы угадали!")
//  : answer > secretNumber
//  ? console.log("Введите число меньше...")
//  : answer < secretNumber
//  ? console.log("Введите число больше...")
//  : console.log("Введенное число выходит из диапазона");

///////////////////////////////////
// switch-case
// let user = "Kate";

// if (user === "Kate") {
//   console.log(`${user} is Admin`);
// } else if (user === "Brat") {
//   console.log(`${user} is simple employee`);
// } else if (user === "Tom") {
//   console.log(`${user} is simple employee`);
// } else if (user === "Vadim") {
//   console.log(`${user} is simple employee`);
// } else if (user === "Ivan") {
//   console.log(`${user} is Admin`);
// } else if (user === "Elena") {
//   console.log(`${user} is Admin`);
// } else {
//   console.log(`${user} is not found`);
// }

let user = "Ivan";

switch (user) {
  case "Kate", "Ivan", "Elena":
    console.log(`${user} is Admin`);
    break;
  case "Brat", "Tom", "Vadim":
    console.log(`${user} is simple employee`);
    break;
  default:
    console.log(`${user} is not found`);
    break;
}
