let firstCard = 10;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw another card?";
    } else if(sum === 21) {
        message = "You've got a Blackjack!";
        hasBlackjack = true;
        console.log(hasBlackjack)
    } else {
        message = "You're out!";
        isAlive = false;
        console.log(isAlive)
    }
    messageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let anotherCard = 5;
    sum += anotherCard;
    startGame();
}

//let age = 22;
//
//if(age < 21 ) {
//    console.log ("You can not enter the club!")
//} else {
//    console.log("Welcome!")
//}

//let age = 24;
//
//if (age < 100) {
//    console.log("Not eligible!");
//} else if (age === 100) {
//    console.log("Here is your birthday card from the King!");
//} else {
//    console.log("Not eligible, you've already gotten one!");
//}