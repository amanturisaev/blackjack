let firstCard = 10;
let secondCard = 6;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
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
    cards.push(anotherCard);
    console.log(cards);
    renderGame();
}
