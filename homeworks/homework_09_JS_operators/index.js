let temperature = prompt("What's the temperature now?", 23);

if (temperature < 0) {
  console.log("Холодно!");
} else if (0 <= temperature && temperature <= 20) {
  console.log("Прохладно");
} else if (21 <= temperature && temperature <= 30) {
  console.log("Тепло");
} else {
  console.log("Жарко!");
}
