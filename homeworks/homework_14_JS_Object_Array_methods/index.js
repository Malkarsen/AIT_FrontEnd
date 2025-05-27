// Задание 1
// У вас есть массив объектов cars (ниже)
// Создайте на основе страрого массива новый массив объектов по образу:
// [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]
const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const newCars = cars.map((value) => {
  let car = { ...value };
  delete car.price;
  return car;
});
console.log(newCars);

// Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.
const dieselCars = cars.filter((value) => {
  return value.isDiesel;
});
console.log(dieselCars);

// Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.
const nonDieselCars = cars.filter((value) => {
  return !value.isDiesel;
});
console.log(nonDieselCars);

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.
let nonDieselCarsPrice = 0;
cars.forEach((value) => {
  if (!value.isDiesel) {
    nonDieselCarsPrice += value.price;
  }
});
console.log(nonDieselCarsPrice);

// Задание 5
// Повысьте цену всех машин в массиве на 20%.
const increasedPriceCars = cars.map((value) => {
  return { ...value, price: value.price * 1.2 };
});
console.log(increasedPriceCars);

// Задание 6
// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }
const otherCars = cars.map((value) => {
  if (value.isDiesel) {
    return { brand: "Tesla", price: 25000, isDiesel: false };
  } else {
    return { ...value };
  }
});
console.log(otherCars);
