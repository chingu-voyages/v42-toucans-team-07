let signin = document.querySelector(".signIn");
const signUpForm = document.querySelector(".sign-in");
const message = document.querySelector(".message");

signin.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "signin.html";
});

signUpForm.addEventListener("submit", (event) => {
  message.innerHTML =
    "Signup was successful! You are being redirected to home page!";
  message.style.color = "#2453c8";
  message.style.textAlign = "center";
  message.style.fontSize = "1.6rem";
  setTimeout(redirectToHomePage, 2000);
  event.preventDefault();
});

const redirectToHomePage = () => {
  window.location.href = "./homePage.html";
};
