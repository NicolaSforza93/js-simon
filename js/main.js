console.log('Simon Says');


const randomNumber = getArrayOfRandomIntBetween(1, 100, 5);
console.log(randomNumber);
alert(randomNumber);

const arrayUserNumber = [];
console.log(arrayUserNumber);

const idTimeout = setTimeout(function() {
    while (arrayUserNumber.length < 5) {
        const userNumber = parseInt(prompt('inserisci un numero'));
        arrayUserNumber.push(userNumber);
    } 
}, 3000);

















// - dichiaro una funzione che generi 5 numeri casuali 
function getArrayOfRandomIntBetween (minRange, maxRange, number) {
// - inizializzo una varibile con un array vuoto
    arrayNumber = [];
// - vado a popolare l'array con i 5 numeri casuali attraverso un ciclo while
    while (arrayNumber.length < number) {
// - genero i numeri random attraverso la funzione getRandomIntInclusive
        const n = getRandomIntInclusive(minRange, maxRange);
        // console.log(n);
// - pushare il numero nell'array
        arrayNumber.push(n);
    }
    return arrayNumber
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }