/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i <= pets.length - 1; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let deleted = pets.pop();
console.log(deleted);
pets.unshift(deleted);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i <= cars.length - 1; i++) {
  cars[i].licensePlate = "licenza";
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

// Prima creo il nuovo oggetto
let nuovoOggetto = {
  brand: "Fiat",
  model: "Punto",
  color: "black",
  trims: ["life", "style", "r-line"],
};

// lo aggiungo
cars.push(nuovoOggetto);
// ispeziono tutti gli oggetti
// for (let i = 0; i <= cars.length - 1; i++) {
//   elimino la proprietà trims
//   delete cars[i].trims;
// }

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i <= cars.length - 1; i++) {
  // con push gli dico di inserire nell'array nuovo justTrims, il primo elemento dell'attributo trims(che è a sua volta un array)
  justTrims.push(cars[i].trims[0]);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i <= cars.length - 1; i++) {
  // se in ogni oggetto dell'array cars, la prima lettera della proprietà color è = a b
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

// creiamo la variabile contatore
let contatore = 0;
// inizializzazione di una variabile che sicuramente non c'è nell'array
let condizione = 108;
// condizione da rispettare: finché la variabile inizializzata precedentemente non è uguale a 32 continua a ciclare
while (condizione !== 32) {
  // stampa il numero iesimo dell'array
  console.log(numericArray[contatore]);
  //   aggiorna il contatore a +1
  contatore++;
  //   aggiorna la variabile condizione all'iesimo valore dell'array numericArray
  condizione = numericArray[contatore];
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ["g", "n", "u", "z", "d"];

// abbiamo prima fatto un ciclo for,e creato la variabile alfabeto

for (let i = 0; i <= charactersArray.length - 1; i++) {
  // prendi ogni elemento dell'array e lo metti nella variabile alfabeto
  let alfabeto = charactersArray[i];
  //   poi fatto uno switch per indicare che se la lettera presa è uguale a una certa posizione, printi quello che ti scrivo
  switch (alfabeto) {
    case "g":
      console.log(7);
      break;
    case "n":
      console.log(12);
      break;
    case "u":
      console.log(23);
      break;
    case "z":
      console.log(25);
      break;
    case "d":
      console.log(4);
      break;
    default:
      console.log("lettera non censita");
  }
}
