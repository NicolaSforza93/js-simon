// console.log('Simon Says');


const randomNumber = getRandomNumInt(1, 100, 5);
console.log(randomNumber);
alert(randomNumber);

const arrayUserNumber = [];

let score = 0;

const idTimeout = setTimeout(function() {
    for (let i = 0; i < 5; i++) {
        const userNumber = parseInt(prompt('inserisci un numero'));
        if (!arrayUserNumber.includes(userNumber)) {
            // - pushare il numero nell'array
            arrayUserNumber.push(userNumber);
        }
    } 
    console.log(arrayUserNumber);

    for (let i = 0; i < arrayUserNumber.length; i++) {
        const currentNumber = arrayUserNumber[i];
        console.log(randomNumber, currentNumber);
        if (randomNumber.includes(currentNumber)) {
            score++;
        }
    }
    alert('Hai indovinato ' + score + ' numeri');
}, 3000);

















// - dichiaro una funzione che generi 5 numeri casuali 
function getRandomNumInt (min, max, number) {
// - inizializzo una varibile con un array vuoto
    arrayNumber = [];
// - vado a popolare l'array con i 5 numeri casuali attraverso un ciclo while
    while (arrayNumber.length < number) {
// - genero i numeri random attraverso la funzione getRandomIntInclusive
        const n = getRandomIntInclusive(min, max);
        // console.log(n);
        if (!arrayNumber.includes(n)) {
            // - pushare il numero nell'array
            arrayNumber.push(n);
        }
    }
    return arrayNumber
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }