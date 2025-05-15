// 1) Дан массив const fruits = ["Apple", "Orange", "Cherry", "Pineapple"];
// 2) Добавьте в массив элементов(фруктов), чтобы стало 10(они не должны повторяться)
// 3) Создайте диалоговое окно, в котором пользователь может вводить название фрукта
// 4) При нажатии на Ок, должно появляться сообщение о наличии или лтсутствии фрукта
// 5) При нажатии на Отмена, должно показываться сообщение, что вы отказались ввоодить данные,
// и предложение перезагрузить страницу и попробывать еще раз

const fruits = ["Apple", "Orange", "Cherry", "Pineapple"];
fruits.push("Grape", "Banane", "Kiwi", "Mango", "Pomegranate", "Grapefruit");
console.log(fruits);

let userFruit = prompt("Введите название фрукта");
console.log(userFruit);

if (userFruit === null) {
  alert(
    "Вы отказались вводить данные,  перезагрузите страницу и попробуйте еще раз"
  );
} else {
  let isFruitAble = false;
  for (let index = 0; index < fruits.length; index++) {
    if (fruits[index] === userFruit) {
      alert("Фрукт есть в наличии");
      isFruitAble = true;
      break;
    }
  }
  if (!isFruitAble) {
    alert("Фрукта нет в наличии");
  }
}
