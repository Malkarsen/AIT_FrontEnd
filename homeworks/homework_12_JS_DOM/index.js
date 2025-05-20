const calculatWeightOfWomen = (height) => {
  return height - (100 + (height - 100) / 10);
};

const calculatWeightOfMen = (height) => {
  return height - (100 + (height - 100) / 20);
};

const calculatIdealWeight = (height, gender) => {
  if (gender === "male") {
    return calculatWeightOfMen(height);
  } else {
    return calculatWeightOfWomen(height);
  }
};

const FORM = document.querySelector(".form");
const IDEAL_WEIGHT_LABEL = document.querySelector(".ideal_weight_label");

FORM.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = event.target.height_form_input.value;
  const gender = event.target.gender_form_input.value;

  const weight = calculatIdealWeight(height, gender);
  IDEAL_WEIGHT_LABEL.textContent = `Ваш идеальный вес: ${weight} кг`;
});
