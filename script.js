let player = {
    name: "Your Name Here",
    chips: 300
};
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el'); //querySelector is more specific, we need #
let cardsEl = document.querySelector('#cards-el');

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ": $" + player.chips; //name of the object + period + object description

function getRandomCard() {
    let randomCard = Math.floor( Math.random()*13 ) + 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 11) {
        return 11
    } else {
        return randomCard
        } 
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        message = 'do you want to draw another card?';
    } else if (sum === 21) {
        message = "Woohoo! You've got blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out!!";
        isAlive = false;
    }
    messageEl.textContent = message;
    
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}