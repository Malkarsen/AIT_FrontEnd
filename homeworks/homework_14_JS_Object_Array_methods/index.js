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

// V1
const newCars = cars.map((value) => {
  let car = { ...value };
  delete car.price;
  return car;
});
console.log(newCars);

// V2
const carsWithoutPrice = cars.map((carObj) => {
  const { price, ...rest } = carObj;
  console.log(price);
  console.log(rest);
  return rest;
});
console.log(carsWithoutPrice);

// Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.
const dieselCars = cars.filter((value) => {
  return value.isDiesel;
});
// const dieselCars = cars.filter((value) => value.isDiesel);
console.log(dieselCars);

// Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.
const nonDieselCars = cars.filter((value) => {
  return !value.isDiesel;
});
console.log(nonDieselCars);

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.
// V1
let nonDieselCarsPrice = 0;
cars.forEach((value) => {
  if (!value.isDiesel) {
    nonDieselCarsPrice += value.price;
  }
});
console.log(nonDieselCarsPrice);

// V2 - reduce()
let nonDieselCarsPrice2 = cars.reduce((accumulator, nextValue) => {
  return !nextValue.isDiesel 
  ? accumulator + nextValue.price
  : accumulator;
}, 0);
console.log(nonDieselCarsPrice2);

// Задание 5
// Повысьте цену всех машин в массиве на 20%.
// V1
const increasedPriceCars = cars.map((value) => {
  return { ...value, price: value.price * 1.2 };
});
console.log(increasedPriceCars);

// V2
cars.forEach((carObj) => {
  carObj.price *= 1.2;
});
console.log(cars);

// Задание 6
// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }
const otherCars = cars.map((value) => {
  if (value.isDiesel) {
    return { brand: "Tesla", price: 25000, isDiesel: false };
  } else {
    return { ...value };
  }
  /*
  return value.isDiesel 
    ? { brand: "Tesla", price: 25000, isDiesel: false }
    : value;
  */
});
console.log(otherCars);
