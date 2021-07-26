// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// Inseriamo le mine all'interno dell'array
var mine = [];
var randomNumber = 0;
var difficulty = 0;
var max = 100;

do {
  difficulty = parseInt(
    prompt("Inserisci la difficoltà:\n0 = Facile, 1 = Medio, 2 = Difficile")
  );
} while (isNaN(difficulty) == true || difficulty < 0 || difficulty > 2);

switch (difficulty) {
  case 0:
    max = 100;
    console.log("Hai selezionato la difficoltà: Facile");
    break;
  case 1:
    max = 80;
    console.log("Hai selezionato la difficoltà: Media");
    break;
  case 2:
    max = 50;
    console.log("Hai selezionato la difficoltà: Difficile");
    break;
}

for (var i = 0; i < 16; i++) {
  randomNumber = generaNumero(1, max);
  if (mine.indexOf(randomNumber) == -1) {
    mine.push(randomNumber);
  } else {
    i--;
  }
}
console.log("Lista mine:");
console.log(mine);

// Inserimento dei numeri del giocatore nell'array
var listaNumeriGiocatore = [];
var numeriConsentiti = 0;

// PS.Ho messo i < 5 per non inserire i numero 86 volte :)
for (var i = 0; i < 5; i++) {
  var numeroGiocatore = parseInt(
    prompt("Inserisci un numero compreso tra 1 e 100")
  );

  if (mine.includes(numeroGiocatore)) {
    console.log("Sei scoppiato!");
    break;
  } else if (numeroGiocatore < 1 || numeroGiocatore > 100) {
    console.log("Hai inserito un numero vietato e hai perso!");
    break;
  } else if (isNaN(numeroGiocatore)) {
    console.log("Non hai inserito un numero e hai perso!");
    break;
  } else if (listaNumeriGiocatore.indexOf(numeroGiocatore) == -1) {
    listaNumeriGiocatore.push(numeroGiocatore);
    console.log("Hai inserito: " + numeroGiocatore);
    console.log("Bravo! Non sei ancora scoppiato.");
    numeriConsentiti++;
  }
}
console.log("Hai fatto un punteggio di " + numeriConsentiti);

//Funzioni
function generaNumero(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
