let temperature = prompt(
  "Пожалуйста, введите температуру воздуха в вашем городе",
  23
);

let normalizedTemperatire = Number(temperature);

console.log(temperature);
console.log(normalizedTemperatire);
console.log(isNaN(normalizedTemperatire));

if (temperature !== null) {
  if (!isNaN(normalizedTemperatire) && temperature !== "") {
    if (normalizedTemperatire < 0) {
      console.log("Холодно!");
    } else if (0 <= normalizedTemperatire && normalizedTemperatire <= 20) {
      console.log("Прохладно");
    } else if (21 <= normalizedTemperatire && normalizedTemperatire <= 30) {
      console.log("Тепло");
    } else if (normalizedTemperatire > 30) {
      console.log("Жарко!");
    }
  } else {
    console.log(
      "Вы ввели некорректные символы или не ввели ничегоЮ перезагрузите страницу и введите число"
    );
  }
} else {
  // если пользователь нажал отмену
  console.log(
    "Вы отказались вводить данные, перезагрузите страницу и попробуйте ещё раз!"
  );
}
