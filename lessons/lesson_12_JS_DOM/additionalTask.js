// Дана переменная со строкой в качестве значения
// let message = "Hello";
// Создайте функцию, которая будет принимать в аргумента эту строку и возвращать строку наоборот
// Выведете результат выполнения функции в консоль

//V1
const getReverseString1 = (string) => {
  let reverseString = string.substring(string.length - 1);
  for (let index = string.length - 1; index > 0; index--) {
    reverseString += string.substring(index - 1, index);
  }
  return reverseString;
};
// V2
const getReverseString2 = (string) => {
    let charList = string.split("");
    const result = [];
    for (let index = charList.length - 1; index >= 0; index--) {
        result.push(charList[index]);
    }
    // for (let index = 0; index < charList.length; index++) {
    //     result.unshift(charList[index]);
    // }
    return result.join("");
};
let message = "Hello";
console.log(getReverseString1(message));
console.log(getReverseString2(message));
