let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";


function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw another card? 😄";
    } else if(sum === 21) {
        message = "Woohoo! You've got a Blackjack! 😎";
        hasBlackjack = true;
        console.log(hasBlackjack)
    } else {
        message = "You're out! 😲";
        isAlive = false;
        console.log(isAlive)
    }
    console.log(message);
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