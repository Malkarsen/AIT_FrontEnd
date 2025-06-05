// На сервере хранится объект пользователя
const userData = {
  firstName: "John",
  lastName: "Johnson",
  age: 30,
  job: "Frontend Developer",
};

let delay = 4;

const promise = new Promise((resolve, reject) => {
  // resolve("success");
  // reject("Some error message");

  if (delay > 5) {
    setTimeout(() => {
      reject("Sorry, we have server error. Please try again!");
    }, delay * 1000);
  } else {
    setTimeout(() => {
      resolve(userData);
    }, delay * 1000);
  }
});
console.log(promise);

promise.then((result) => {
  // Пишем логику по обработке успешно пришедших данных с сервера 
  // (в этом примере это объект userData)
  // Например, тут будем писать логику по отображению данных пользователя 
  // на странице в карточке
  console.log(result);
})
.catch((error) => {
  // Пишем логику по обработке ошибки с сервера 
  // (в этом примере это Sorry, we have server error. Please try agein!)
  // Например, тут будем писать на странице с помощью алерт 
  // отображать эту ошибку
  console.log(error);
})
.finally(() => {
  // Выполнится в любом случае в самом конце
  // Например, приостановить кручение спиннера на странице
  console.log("Выполнится в любом случае");
});
