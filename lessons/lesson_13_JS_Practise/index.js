// - когда загружается приложение, видна только форма
// - когда пользователь вводит данные во все инпуты и нажимает на кнопку "Create",
// появляется карточка с данными пользователя, которые он ввел в форме(см дизайн)

// - если пользователь не ввел данные хотя бы в 1 обязательном инпуте,
// то карточка не показывается(а если была показана ранее, то скрывается)
// и появляется alert с сообщением: "Введите информацию во все обязательные поля"

const USER_FORM = document.querySelector(".user_form");
const INFOCARD = document.querySelector(".infocard");

const INFOCARD_NAME = document.querySelector("#infocard_name");
const INFOCARD_SURNAME = document.querySelector("#infocard_surname");
const INFOCARD_AGE = document.querySelector("#infocard_age");
const INFOCARD_JOB = document.querySelector("#infocard_job");

const areValuesCorrect = (name, surname, age) => {
  if (name === "" || surname === "" || age <= 0) {
    return false;
  }
  return true;
};

USER_FORM.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const surname = event.target.surname.value;
  const age = event.target.age.value;
  const job = event.target.job.value;
  const normalizedName = name.trim();
  const normalizedSurname = surname.trim();
  const normalizedAge = Number(age);
  const normalizedJob = job.trim();

  let resultCheckingOfValue = areValuesCorrect(
    normalizedName,
    normalizedSurname,
    normalizedAge
  );

  if (resultCheckingOfValue) {
    INFOCARD.style.visibility = "visible";
    INFOCARD_NAME.textContent = normalizedName;
    INFOCARD_SURNAME.textContent = normalizedSurname;
    INFOCARD_AGE.textContent = normalizedAge;
    INFOCARD_JOB.textContent = normalizedJob;
  } else {
    INFOCARD.style.visibility = "hidden";
    alert("Введите информацию во все обязательные поля");
  }
});
