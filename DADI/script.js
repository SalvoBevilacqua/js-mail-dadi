let computerRandom = Math.floor(Math.random() * 6) + 1;
console.log (computerRandom);

let userRandom = Math.floor(Math.random() * 6) + 1;
console.log (userRandom);

if(userRandom > computerRandom) {
    console.log ("Ha vinto l'utente!");
} else if (userRandom < computerRandom) {
    console.log ("Ha vinto il computer!");
} else {
    console.log ("Pareggio!");
}