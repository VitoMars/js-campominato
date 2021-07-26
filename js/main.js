// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// Inseriamo le mine all'interno dell'array
var mine = [];

for (var i = 0; i < 16; i++) {
  //   mine.push(generaNumero(1, 100));
  var randomNumber = generaNumero(1, 100);
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

// PS.Ho messo i < 5 in modo da non ripetersi 86 volte, ma solo 5 volte :)
for (var i = 0; i < 5; i++) {
  var numeroGiocatore = parseInt(
    prompt("Inserisci un numero compreso tra 1 e 100")
  );

  if (mine.includes(numeroGiocatore)) {
    console.log("Sei scoppiato!");
    break;
  } else if (numeroGiocatore < 1 || numeroGiocatore > 100) {
    console.log("Hai inserito un numero vietato");
  } else if (listaNumeriGiocatore.indexOf(numeroGiocatore) == -1) {
    listaNumeriGiocatore.push(numeroGiocatore);
    console.log("Hai inserito: " + numeroGiocatore);
    console.log("Bravo! Non sei ancora scoppiato");
    numeriConsentiti++;
  }
}
console.log(listaNumeriGiocatore);
console.log("Hai fatto un punteggio di " + numeriConsentiti);

//Funzioni
function generaNumero(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
