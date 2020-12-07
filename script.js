const body = document.querySelector("body");
const phrase = document.querySelector(".phrases");

body.addEventListener("keydown", () => {
  call();
});

body.addEventListener("click", () => {
  call();
});

const call = () => {
  const url = `https://api.whatdoestrumpthink.com/api/v1/quotes/random`;

  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    phrase.innerHTML = request.response["message"];
  };
};
