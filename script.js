const body = document.querySelector("body");
const phrases = document.querySelector(".phrases");

body.addEventListener("keydown", () => {
  call();
});

phrases.addEventListener("click", () => {
  call();
});

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
