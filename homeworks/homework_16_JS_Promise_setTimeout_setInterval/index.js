// Создать страницу, на которой у вас будет квадрат с background-color: white
// Под квадратом должны находиться 2 кнопки:
// 1) "Randomize square color" - при клике на нее каждые 3 секунды у вас должен
// меняться цвет квадрата на рандомный.
// Цвет должен меняться на случайный из массива ниже:
// Для выборки случайного цвета используйте функцию Math.random()
// 2) "Stop Randomize square color" - при клике на нее, цвет квадрата перестает меняться
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
  "rgb(42, 34, 82)",
  "rgb(61, 30, 214)",
  "blueviolet",
  "rgb(214, 30, 30)",
];

const SQUARE_COLOR = document.querySelector(".square_color");
const RANDOM_COLOR_BUTTON = document.querySelector(".random_color_button");
const STOP_BUTTON = document.querySelector(".stop_button");

let intervalId;

const getRandomInt = () => {
  return Math.round(Math.random() * (colors.length - 1));
};

const changeSquareColor = (colorNumber) => {
  SQUARE_COLOR.style["background-color"] = colors[colorNumber];
};

const deactivateRandomColorButton = () => {
  RANDOM_COLOR_BUTTON.disabled = true;
  RANDOM_COLOR_BUTTON.style["background-color"] = "rgb(151, 161, 133)";
  RANDOM_COLOR_BUTTON.style.cursor = "not-allowed";
};

const activateRandomColorButton = () => {
  RANDOM_COLOR_BUTTON.disabled = false;
  RANDOM_COLOR_BUTTON.style["background-color"] = "olivedrab";
  RANDOM_COLOR_BUTTON.style.cursor = "pointer";
};

const deactivateStopButton = () => {
  STOP_BUTTON.disabled = true;
  STOP_BUTTON.style["background-color"] = "rgb(154, 179, 204)";
  STOP_BUTTON.style.cursor = "not-allowed";
};

const activateStopButton = () => {
  STOP_BUTTON.disabled = false;
  STOP_BUTTON.style["background-color"] = "rgb(27, 125, 222)";
  STOP_BUTTON.style.cursor = "pointer";
};

RANDOM_COLOR_BUTTON.addEventListener("click", () => {
  intervalId = setInterval(() => {
    let colorNumber = getRandomInt();
    changeSquareColor(colorNumber);
  }, 3000);
  deactivateRandomColorButton();
  activateStopButton();
});

STOP_BUTTON.addEventListener("click", () => {
  clearInterval(intervalId);
  deactivateStopButton();
  activateRandomColorButton();
});
