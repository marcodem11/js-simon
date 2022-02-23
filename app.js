console.log('Simon dice');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const min=1;
const max=100;
const numeriDaIndovinare = [];
const numeriUtente = [];
const numeriIndovinati = [];

do {

  const number = getRandomIntInclusive(min, max);

  if(numeriDaIndovinare.includes(number) === false ){
      numeriDaIndovinare.push(number);
  }
} while (numeriDaIndovinare.length < 5)

console.log(numeriDaIndovinare);

alert(`Memorizza questi 5 numeri: ${numeriDaIndovinare.join(',')}.`);

setTimeout( ()=> {

    do {

        const num = parseInt(prompt('Inserisci un numero.'));
        numeriUtente.push(num);

        if(numeriDaIndovinare.includes(num) && !numeriIndovinati.includes( num ) ) {
            numeriIndovinati.push(num);
        }
        
    } while (numeriUtente.length < numeriDaIndovinare.length);
    console.log(numeriUtente, numeriIndovinati);
    
    alert(`Hai indovinato in totale ${numeriIndovinati.length}numeri.
    I numeri indovinati sono: ${numeriIndovinati.join(',')}.` )
}, 2000);
    
