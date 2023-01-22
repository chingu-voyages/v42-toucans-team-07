baseUrl = "https://api.chucknorris.io/jokes";

const searchInput = document.querySelector(".text-search-input");
const searchButton = document.querySelector(".text-search-button");
const searchForm = document.querySelector(".text-search-form");
const result = document.querySelector(".text-search-results");
const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
const totalResults = document.querySelector(".text-search-results-total");

let itemNumber = 0;
let results = [];

const renderJoke = (data, itemNumber) => {
  result.innerText = data.result[itemNumber].value;
  totalResults.innerText = `Showing ${itemNumber + 1} from ${results.total}`;
};

nextButton.addEventListener("click", () => {
  itemNumber = itemNumber + 1;
  if (itemNumber > 0) {
    previousButton.disabled = false;
  }
  if (itemNumber === results.total - 1) {
    nextButton.disabled = true;
  }
  renderJoke(results, itemNumber);
});

previousButton.addEventListener("click", () => {
  itemNumber = itemNumber - 1;
  if (itemNumber < 1) previousButton.disabled = true;
  if (itemNumber < results.total) {
    nextButton.disabled = false;
  }
  renderJoke(results, itemNumber);
});

const getJokesByTextSearch = async (query) => {
  try {
    const response = await fetch(`${baseUrl}/search?query=${query}`, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    results = data;
    renderJoke(results, itemNumber);

    return data;
  } catch (error) {
    throw new Error(`Could not get data: ${error}`);
  }
};

searchForm.addEventListener("submit", (event) => {
  const query = searchInput.value;
  getJokesByTextSearch(query);
  event.preventDefault();
});
