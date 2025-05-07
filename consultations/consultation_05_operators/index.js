// Задача 1
let index = 2;
console.log(index++); // 2 (index -> 3)
console.log(index); // 3
console.log(++index); // (index -> 4) 4
let index2 = index++; // index2 = 4 (index -> 5) index = 5
console.log(index2 + ++index); // (index -> 6), 4 + 6 = 10

// Задача 2
let secret = 7;
let userInput = Number(prompt("Загадано число от 1 до 10. Какое это число? "));

if (userInput === secret) {
  console.log("Вы угадали!");
} else if (1 <= userInput && userInput < secret) {
  console.log("Введите число больше...");
} else if (secret < userInput && userInput <= 10) {
  console.log("Введите число меньше...");
} else {
  console.log("Введенное число выходит из диапазона");
}
