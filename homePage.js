const toggle = document.querySelector("#darkMode");
const body = document.querySelector("body");
const context = document.getElementById("context");
const authBtn = document.getElementById("loginBtn");
const dropDown = document.getElementById("navbar");
const section = document.querySelector("section");

toggle.addEventListener("click", function () {
  this.classList.toggle("active");
  body.classList.toggle("active");
  authBtn.classList.toggle("active");
  dropDown.classList.toggle("active");
  section.classList.toggle("active");

  // function to change content from light -- dark

  if (toggle.classList.contains("active")) {
    element = document.getElementById("darkMode").id = "darkMode";
  } else {
  }
});

async function randomFact() {
  quote = document.getElementById("quote");
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await res.json();
  const fact = data.value;
  quote.innerText = fact;
}

window.onload = randomFact();
