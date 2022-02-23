console.log('Simon dice');

function getRandomIntInclusive(min, max) {
    min = Math.cell(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const min=1;
const max=100;
const numeriDaIndovinare = [];
const numeriUtente = [];

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
        
    } while (numeriUtente.length < numeriDaIndovinare.length);
    const num = parseInt(prompt('Inserisci un numero.'));
}, 2000);
    
