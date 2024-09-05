// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btnClick = document.querySelector("#btnClick");
const btnReset = document.querySelector("#btnReset");

// Eventos

btnClick.addEventListener("click", PersonClick);
btnReset.addEventListener("click", PersonClick);

// Funções
function PersonClick() {
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
