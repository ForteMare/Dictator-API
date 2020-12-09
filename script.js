// Getting elements
const body = document.querySelector("body");
const phrases = document.querySelector(".phrases");

// Buttons
const trumpBtn = document.querySelector("#trumpBtn");
const bushBtn = document.querySelector("#bushBtn");
const nixonBtn = document.querySelector("#nixonBtn");

// General actions
body.addEventListener("keydown", () => {
  call();
});

phrases.addEventListener("click", () => {
  call();
});

// Button actions
trumpBtn.addEventListener("click", () => {});
bushBtn.addEventListener("click", () => {});
nixonBtn.addEventListener("click", () => {});
// API call function

const call = () => {
  const url = `https://api.whatdoestrumpthink.com/api/v1/quotes/random`;

  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    phrases.innerHTML = request.response["message"];
  };
};
