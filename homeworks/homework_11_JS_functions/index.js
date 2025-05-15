// Задание 1
function largerNumber(number1, number2) {
  return number1 > number2 ? number1 : number2;
}
let number1 = 6;
let number2 = 2;
let resultLargerNumber = largerNumber(number1, number2);
console.log(`Из чисел ${number1} и ${number2} большее: ${resultLargerNumber}`);

// Задание 2
const getElementByIndex = (array, index) => array[index];
const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let index = 4;
let resultGetElementByIndex = getElementByIndex(numberArray, index);
console.log(
  `В массиве ${numberArray} под index ${index} стоит ${resultGetElementByIndex}`
);

// Задание 3
function decode(weatherCode) {
  let description;
  switch (weatherCode) {
    case "SQ":
      description = "SQ – шквал";
      break;
    case "PO":
      description = "PO - пыльный вихрь";
      break;
    case "FC":
      description = "FC - торнадо";
      break;
    case "BR":
      description = "BR – дымка (видимость от 1 до 9 км)";
      break;
    case "HZ":
      description = "HZ – мгла (видимость менее 10 км)";
      break;
    case "FU":
      description = "FU – дым (видимость менее 10 км)";
      break;
    case "DS":
      description = "DS - пыльная буря (видимость менее 10 км)";
      break;
    case "SS":
      description = "SS - песчаная буря (видимость менее 10 км)";
      break;
    default:
      description = "Ошибка! Данный код отсутствует в списке";
      break;
  }
  return description;
}
const weatherCodeInterpretation = (weatherCode, decode) => {
  return decode(weatherCode);
};
let weatherCode = "SS";
console.log(weatherCodeInterpretation(weatherCode, decode));
