fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((obj) => {
    const { message } = obj; // деструктуризация
    const dogImageElement = document.querySelector("#dog-image");
    console.log(dogImageElement);
    console.log(message);

    dogImageElement.src = message;
    dogImageElement.style.width = "500px";
  });

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((obj) => {
//     const { message } = obj; 
//     dogImageElement = document.getElementById("dog-image");
//     console.log(dogImageElement);
//     console.log(message);
//     dogImageElement.src = message;
//     dogImageElement.style.width = "500px";
//   });
