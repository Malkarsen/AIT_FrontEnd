const CAT_FACT_CARD = document.querySelector(".cat-fact-card");
const CAT_FACTS = document.querySelector(".cat-facts");

const URL = "https://catfact.ninja/fact";

const addCatFact = (catFact) => {
  const NEW_FACT = document.createElement("li");
  NEW_FACT.className = "cat-fact";
  NEW_FACT.textContent = catFact;
  
  CAT_FACTS.append(NEW_FACT);
}

CAT_FACT_CARD.addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await fetch(URL, {method: "GET"});
  const result = await response.json();

  if (response.ok) {
    console.log(result.fact);
    
    addCatFact(result.fact);
  }
});
