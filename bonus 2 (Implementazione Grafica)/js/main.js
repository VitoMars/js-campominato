// Variabili
var mine = [];
var randomNumber = 0;
var difficulty = 0;
var max = 100;
var punti = 0;
var perso = false;

document.getElementById("campo").addEventListener("click", async function (e) {
  console.log(e.target.dataset.cella);
  let element = document.querySelectorAll(
    "[data-cella='" + e.target.dataset.cella + "']"
  );

  if (mine.includes(parseInt(e.target.dataset.cella))) {
    element[0].classList.add("red");
    await sleep(100);
    alert("Sei scoppiato!");
    alert("Hai totalizzato un punteggio di: " + punti);
    history.go(0);
  } else {
    element[0].classList.add("green");
    punti++;
  }
});

for (let i = 0; i < 16; i++) {
  randomNumber = generaNumero(100);
  if (mine.indexOf(randomNumber) == -1) {
    mine.push(randomNumber);
  } else {
    i--;
  }
}
console.log("Lista mine:");
console.log(mine);

creaCampo(100);

//Funzioni
function generaNumero(max) {
  return Math.floor(Math.random() * max + 1);
}

function creaCampo(celle) {
  for (let i = 1; i <= celle; i++) {
    let cella = `
           <div data-cella="${i}" class="cella">${i}</div>
     `;

    let templateCella = document.createElement("DIV");
    templateCella.classList.add("quadrato");
    templateCella.innerHTML = cella;
    document.getElementById("campo").appendChild(templateCella);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
