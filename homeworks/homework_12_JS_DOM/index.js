const FORM = document.querySelector(".form");
const IDEAL_WEIGHT_LABEL = document.querySelector(".ideal_weight_label");

const calculatWeightOfWomen = (height) => {
  return height - (100 + (height - 100) / 10);
};

const calculatWeightOfMen = (height) => {
  return height - (100 + (height - 100) / 20);
};

const calculatIdealWeight = (height, gender) => {
  if (gender === "male") {
    return calculatWeightOfMen(height);
  } else if (gender === "female") {
    return calculatWeightOfWomen(height);
  } else {
    return "Ошибка в рассчетах";
  }
};

FORM.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = event.target.height.value;
  const gender = event.target.gender.value;
  const normalizedHeight = Number(height);

  const weight = calculatIdealWeight(normalizedHeight, gender);
  IDEAL_WEIGHT_LABEL.textContent = `Ваш идеальный вес: ${weight} кг`;
});
