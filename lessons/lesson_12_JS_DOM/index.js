// ДОСТУП К HTML ЭЛЕМЕНТАМ
// 1. getElementById() - метод поиска элементв по id. Возвращает первый элемент по переданной id
console.log(document);
const LESSON_TITLE = document.getElementById("lesson-title");
console.log(LESSON_TITLE);
LESSON_TITLE.style.color = "green";
LESSON_TITLE.style.fontSize = "30px";

// 2. getElementsByTagName()
const DIVS = document.getElementsByTagName("div");
console.log(DIVS);

// 3. getElementsByClassName()
const BOXES = document.getElementsByClassName("box");
console.log(BOXES);

// 4. querySelector()
// - по id
const LESSON_TITLE_BY_QUERY_SELECTOR = document.querySelector("#lesson-title");
console.log(LESSON_TITLE_BY_QUERY_SELECTOR);

// - по тегу
const FIRST_DIV_BY_QUERY_SELECTOR = document.querySelector("div");
console.log(FIRST_DIV_BY_QUERY_SELECTOR);

// - по классу
const BOX_BY_QUERY_SELECTOR = document.querySelector(".box");
console.log(BOX_BY_QUERY_SELECTOR);

// 4. querySelectorAll()
// - по тегу
const DIV_BY_QUERY_SELECTOR = document.querySelectorAll("div");
console.log(DIV_BY_QUERY_SELECTOR);

// - по классу
const BOXES_BY_QUERY_SELECTOR = document.querySelectorAll(".box");
console.log(BOXES_BY_QUERY_SELECTOR);

///////////////////////////////////////////////////////////////////////////
// ДОБАВЛЕНИЕ КОНТЕНТА НА HTML СТРАНИЦУ
const fullName = "John Johnson";
const age = 30;
const avatar =
  "https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg";

// ШАГ 1: получение доступа к HTML элементам, в которые мы хотим добавить контент
const USER_NAME = document.querySelector(".user-name");
const USER_AGE = document.querySelector(".user-age");

// ШАГ 2: добавление контента к необходимым HTML элементам
console.log(USER_NAME.textContent);
USER_NAME.textContent = `${USER_NAME.textContent} ${fullName}`;
USER_AGE.textContent = `${USER_AGE.textContent} ${age}`;

///////////////////////////////////////////////////////////////////////////
// Добавление и заполение на HTML странице
/* <img
    src="https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg"
    alt="Avatar"
   />*/
// ШАГ 1: ПОЛУЧИТЬ ДОСТУП К ТЕГУ, В КОТОРОМ МЫ ХОТИМ СОЗДАТЬ И ДОБАВИТЬ ДРУГОЙ ТЕГ, И ТЕГ, ЗА К-ЫМ БУДЕТ СТОЯТЬ ЭЛЕМЕНТ
const USER_CARD = document.querySelector(".user-card");
const CARD_TITLE = document.querySelector(".card-title");

// ШАГ 2: СОЗДАЕМ ЭЛЕМЕНТ, КОТОРЫЙ МЫ ХОТИМ ДОБАВИТЬ В КАРТОЧКУ
const USER_AVATAR = document.createElement("img");

// ШАГ 3: ЗАПОЛНЯЕМ ТЕГ НУЖНОЙ ИНФОРМАЦИЕЙ
USER_AVATAR.src = avatar;
USER_AVATAR.alt = "Avatar";
USER_AVATAR.style.width = "150px";
USER_AVATAR.style.height = "150px";
USER_AVATAR.style.borderRadius = "50%";

// ШАГ 4: Добавление созданного элемента в карточку
CARD_TITLE.after(USER_AVATAR);

///////////////////////////////////////////////////////////////////////////
// Удаление элементов со страницы

// ШАГ 1: получаем доступ к элементу, который сы хотим удалить
const BOX_1 = document.querySelector(".box_1");

// ШАГ 2: удаление элемента
// BOX_1.remove();

///////////////////////////////////////////////////////////////////////////
// Добавление функций к кнопкам и HTML элементам
// - addEventListener
// ШАГ 1: получение доступа к элементу, к которому мы хотим добавить функцию
const DELETE_BUTTON = document.querySelector(".remove-button");

// ШАГ 2: создаем JS функцию, которая должна выполняться по нажатию на кнопку
const deleteBox1 = () => {
  BOX_1.remove();
};

// ШАГ 3: добавление функции к кнопке DELETE_BUTTON
DELETE_BUTTON.addEventListener('click', deleteBox1);