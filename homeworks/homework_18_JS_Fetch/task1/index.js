const COUNTRIES_CONTAINER = document.querySelector(".countries-container");
const URL =
  "https://malkarsen.github.io/european_countries_api/european_countries_full.json";

const loadCountries = async () => {
  const response = await fetch(URL, { method: "GET" });
  const countries = await response.json();

  countries.forEach((country) => {
    const {
      name,
      isoCode,
      capital,
      population,
      area,
      nativeName,
      languages,
      flag,
    } = country;
    const countryCardElement = document.createElement("div");
    countryCardElement.className = "country-card";

    const nameElement = document.createElement("div");
    nameElement.classList.add("card-element", "name");
    nameElement.textContent = name;

    const countryInfoElement = document.createElement("div");
    countryInfoElement.className = "country-info";

    const nativeNameElement = document.createElement("div");
    nativeNameElement.classList.add("card-element", "native-name");
    nativeNameElement.textContent = `Native name: ${nativeName}`;

    const isoCodeElement = document.createElement("div");
    isoCodeElement.classList.add("card-element", "iso-code");
    isoCodeElement.textContent = `IsoCode: ${isoCode}`;

    const capitalElement = document.createElement("div");
    capitalElement.classList.add("card-element", "capital");
    capitalElement.textContent = `Capital: ${capital}`;

    const populationElement = document.createElement("div");
    populationElement.classList.add("card-element", "population");
    populationElement.textContent = `Population: ${population}`;

    const areaElement = document.createElement("div");
    areaElement.classList.add("card-element", "area");
    areaElement.textContent = `Area: ${area}`;

    const languagesElement = document.createElement("div");
    languagesElement.classList.add("card-element", "languages");
    languagesElement.textContent = `Languages: ${languages}`;

    countryInfoElement.append(
      nativeNameElement,
      isoCodeElement,
      capitalElement,
      populationElement,
      areaElement,
      languagesElement
    );

    const flagElement = document.createElement("img");
    flagElement.classList.add("card-element", "flag");
    flagElement.src = flag;

    countryCardElement.append(nameElement, countryInfoElement, flagElement);

    COUNTRIES_CONTAINER.append(countryCardElement);
  });
};

loadCountries();
