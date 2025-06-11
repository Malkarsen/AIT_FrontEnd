const flowersContainerElement = document.querySelector("#flowers-container");

async function loadFlowers() {
  const res = await fetch(
    "https://alisherkhamidov.github.io/book-api/flowers.json"
  );
  const flowers = await res.json();
  flowers.forEach((flower) => {
    const { name, color, description, image, maxHeight } = flower;
    const cardElement = document.createElement("div");
    cardElement.className = "card";

    const nameElement = document.createElement("span");
    nameElement.classList.add("card-el", "title");
    nameElement.textContent = name;

    const imgElement = document.createElement("img");
    imgElement.className = "card-el";
    imgElement.src = image;

    cardElement.append(nameElement, imgElement);
    flowersContainerElement.append(cardElement);
  });
}

loadFlowers();
