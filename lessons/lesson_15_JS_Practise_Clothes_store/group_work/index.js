/*
1.  Приложение одностраничное, в верхней части экрана должен находиться header, в нижней footer, 
а между ними main на все оставшееся пространиство
2.  header: поизиция должна быть зафиксированна в вехней части экрана
3.  Контент у header и footer: на ваше усмотрение
4.  В main части вы должны отобразить данные из массива обьектов(массив обьектов products вы можете найти в LMS в вкаладке "Code"), 
в виде карточек товаров
5.  В каждой карточке должны быть:
- картинка с изображением товара
- название товара
- цена
- пол
- статус
6.  (Опционально, т.к задание со \*)Над карточками дожны быть 3 select:
- label: "Gender", опции: "Men", "Women"
- label: "Price", опции: "Опции придумайте сами, главное, чтобы было несколько опций и какждая опция имела дианпозон цен. Например: 0-200$"
- label: "Choose product", опции: "Jeans", "T-shirt", "Jacket", "Sweater"
7. (Опционально, т.к задание со \*)Справа от селектов, должна находиться кнопка "Search", при клике на которую, 
товары дожны отфильтроваться и появиться только те карточки, котрые соответствуют выбранным опциям в ваших фильтрах
8. Приложение должно быть на английском языке
9. Стили на ваше усмотрение
10. Если вы выполнили задание со звездочкой(там где нужно сделать фильтры): 
Внизу справа экрана должна быть стрелочка "вверх" с текстом "Вернуться к фильтрам", по клику на которую, вас переносит к фильтрам. 
Этот элемент дожен быть с фиксированной позицией. 
Если вы не выполнили задание со звездочкой: 
Внизу справа экрана должна быть стрелочка "вверх" с текстом "Go Up", по клику на которую, вас переносит к самой верхней части экрана. 
Этот элемент дожен быть с фиксированной позицией
*/

const products = [
  {
    id: 1,
    type: "Jeans",
    gender: "men",
    price: 250,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_1.png",
  },
  {
    id: 2,
    type: "Jeans",
    gender: "women",
    price: 220,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_2.png",
  },
  {
    id: 3,
    type: "Jeans",
    gender: "men",
    price: 270,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_3.png",
  },
  {
    id: 4,
    type: "Jeans",
    gender: "women",
    price: 230,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_4.png",
  },
  {
    id: 5,
    type: "T-shirt",
    gender: "men",
    price: 800,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_5.png",
  },
  {
    id: 6,
    type: "T-shirt",
    gender: "women",
    price: 700,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_6.png",
  },
  {
    id: 7,
    type: "T-shirt",
    gender: "men",
    price: 900,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_7.png",
  },
  {
    id: 8,
    type: "T-shirt",
    gender: "women",
    price: 750,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_8.png",
  },
  {
    id: 9,
    type: "Jacket",
    gender: "men",
    price: 400,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_9.png",
  },
  {
    id: 10,
    type: "Jacket",
    gender: "women",
    price: 350,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_10.png",
  },
  {
    id: 11,
    type: "Jacket",
    gender: "men",
    price: 420,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_11.png",
  },
  {
    id: 12,
    type: "Jacket",
    gender: "women",
    price: 370,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_12.png",
  },
  {
    id: 13,
    type: "Sweater",
    gender: "men",
    price: 180,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_13.png",
  },
  {
    id: 14,
    type: "Sweater",
    gender: "women",
    price: 160,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_14.png",
  },
  {
    id: 15,
    type: "Sweater",
    gender: "men",
    price: 200,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_15.png",
  },
  {
    id: 16,
    type: "Sweater",
    gender: "women",
    price: 170,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_16.png",
  },
  {
    id: 17,
    type: "Jeans",
    gender: "men",
    price: 260,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_17.png",
  },
  {
    id: 18,
    type: "Jeans",
    gender: "women",
    price: 240,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_18.png",
  },
  {
    id: 19,
    type: "Jeans",
    gender: "men",
    price: 280,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_19.png",
  },
  {
    id: 20,
    type: "Jeans",
    gender: "women",
    price: 250,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_20.png",
  },
  {
    id: 21,
    type: "T-shirt",
    gender: "men",
    price: 850,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_21.png",
  },
  {
    id: 22,
    type: "T-shirt",
    gender: "women",
    price: 720,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_22.png",
  },
  {
    id: 23,
    type: "T-shirt",
    gender: "men",
    price: 920,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_23.png",
  },
  {
    id: 24,
    type: "T-shirt",
    gender: "women",
    price: 780,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_24.png",
  },
  {
    id: 25,
    type: "Jacket",
    gender: "men",
    price: 410,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_25.png",
  },
  {
    id: 26,
    type: "Jacket",
    gender: "women",
    price: 360,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_26.png",
  },
  {
    id: 27,
    type: "Jacket",
    gender: "men",
    price: 430,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_27.png",
  },
  {
    id: 28,
    type: "Jacket",
    gender: "women",
    price: 380,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_28.png",
  },
  {
    id: 29,
    type: "Sweater",
    gender: "men",
    price: 190,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_29.png",
  },
  {
    id: 30,
    type: "Sweater",
    gender: "women",
    price: 175,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_30.png",
  },
];

////////////////////////////////////////////////////////////

const PRODUCT_CONTAINER = document.querySelector("#productContainer");
const FILTERS = document.querySelector(".filters");

////////////////////////////////////////////////////////////
const displayCards = (array) => {
  array.map((arrayObject) => {
    const CARD = document.createElement("div");
    CARD.id = `card_${arrayObject.id}`;
    CARD.className = "card";

    const IMG = document.createElement("img");
    IMG.className = "card_img";
    IMG.src = arrayObject.imgUrl;
    IMG.alt = `img_${arrayObject.id}`;
    IMG.title = `img_${arrayObject.id}`;

    const TITLE = document.createElement("p");
    TITLE.className = "card_title";
    TITLE.textContent = arrayObject.type;

    const PRICE = document.createElement("p");
    PRICE.className = "card_price";
    PRICE.textContent = arrayObject.price;

    const GENDER = document.createElement("p");
    GENDER.className = "card_gender";
    GENDER.textContent = arrayObject.gender;

    const STATUS = document.createElement("p");
    if (arrayObject.status === "In stock") {
      STATUS.className = "card_status card_status_inStock";
    } else if (arrayObject.status === "Out of stock") {
      STATUS.className = "card_status card_status_outStock";
    }
    STATUS.textContent = arrayObject.status;

    CARD.append(IMG, TITLE, PRICE, GENDER, STATUS);
    PRODUCT_CONTAINER.append(CARD);
  });
};

const displayNoResultMessage = () => {
  const MESSAGE = document.createElement("p");
  MESSAGE.className = "no_result_message";
  MESSAGE.textContent = "We found no results matching your search.";

  PRODUCT_CONTAINER.append(MESSAGE);
  alert("No items found. Clear all filters or try a different combination");
};

const clearProductContainer = () => {
  const MESSAGE = document.querySelector(".no_result_message");
  if (MESSAGE !== null) {
    MESSAGE.remove();
  }
  const CARDS = document.querySelectorAll(".card");
  CARDS.forEach((card) => {
    card.remove();
  });
};
////////////////////////////////////////////////////////////

const filterByGender = (products, gender) => {
  switch (gender) {
    case "All":
      console.log("All");
      return products;
    case "Men":
      console.log("Men");
      return products.filter((product) => product.gender === "men");
    case "Women":
      console.log("Women");
      return products.filter((product) => product.gender === "women");
    default:
      console.log("Incorrect");
      alert("Incorrect value entered in the Gender filter field!");
      return;
  }
};

const filterByPrice = (products, price) => {
  switch (price) {
    case "All":
      return products;
    case "0-200":
      console.log("0-200");
      return products.filter((product) => {
        return product.price <= 200;
      });
    case "201-400":
      console.log("201-400");
      return products.filter((product) => {
        return 201 <= product.price && product.price <= 400;
      });
    case "401-700":
      console.log("401-700");
      return products.filter((product) => {
        return 401 <= product.price && product.price <= 700;
      });
    case "From 701":
      console.log("From 701");
      return products.filter((product) => {
        return 701 <= product.price;
      });
    default:
      console.log("Incorrect");
      alert("Incorrect value entered in the Price filter field!");
      return;
  }
};

const filterByProductType = (products, product_type) => {
  switch (product_type) {
    case "All":
      return products;
    case "Jeans":
      return products.filter((product) => {
        return product.type === "Jeans";
      });
    case "T-shirt":
      return products.filter((product) => {
        return product.type === "T-shirt";
      });
    case "Jacket":
      return products.filter((product) => {
        return product.type === "Jacket";
      });
    case "Sweater":
      return products.filter((product) => {
        return product.type === "Sweater";
      });
    default:
      alert("Incorrect value entered in the Product type filter field!");
      return;
  }
};

const filterByStatus = (products, status) => {
  switch (status) {
    case "All":
      return products;
    case "In stock":
      return products.filter((product) => {
        return product.status === "In stock";
      });
    case "Out of stock":
      return products.filter((product) => {
        return product.status === "Out of stock";
      });
    default:
      alert("Incorrect value entered in the Status filter field!");
      return;
  }
};
////////////////////////////////////////////////////////////

displayCards(products);

////////////////////////////////////////////////////////////
FILTERS.addEventListener("submit", (event) => {
  event.preventDefault();

  clearProductContainer();

  const gender = event.target.gender.value;
  const price = event.target.price.value;
  const product_type = event.target.product_type.value;
  const status = event.target.status.value;

  if (products.length !== 0) {
    const genderFilter = filterByGender(products, gender);

    if (genderFilter.length !== 0) {
      const priceFilter = filterByPrice(genderFilter, price);

      if (priceFilter.length !== 0) {
        const productTypeFilter = filterByProductType(
          priceFilter,
          product_type
        );

        if (productTypeFilter.length !== 0) {
          const statusFilter = filterByStatus(productTypeFilter, status);

          if (statusFilter.length !== 0) {
            displayCards(statusFilter);
          } else {
            displayNoResultMessage();
          }
        } else {
          displayNoResultMessage();
        }
      } else {
        displayNoResultMessage();
      }
    } else {
      displayNoResultMessage();
    }
  } else {
    alert("The list of products is empty!");
  }
});

FILTERS.addEventListener("reset", () => {
  clearProductContainer();
  displayCards(products);
});
