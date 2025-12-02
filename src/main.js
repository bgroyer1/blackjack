// Global Variables
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = ``;

// Dom Elements
const startGameBtn = document.querySelector("#start-game-btn");
const messageEl = document.querySelector(".message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");
const newCardBtn = document.querySelector("#new-card-btn");

// Funcitons
function startGame() {
    newCardBtn.disabled = false;
    let firstCard = randomCard();
    let secondCard = randomCard();
    isAlive = true;
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function randomCard() {
  let card = Math.floor(Math.random() * 13) + 1;
  if (card > 10) {
    return 10;
  } else if (card === 1) {
    return 11;
  } else {
    return card;
  }
}

function newCard() {
  if (isAlive && hasBlackjack === false) {
    const newCard = randomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}

function renderGame() {
  startGameBtn.innerText = 'RESTART GAME'
  cardsEl.textContent = `Cards: `;
  sumEl.innerHTML = `Sum: <span class='primary-text-color'>${sum}</span>`;
  cards.forEach(
    (card) =>
      (cardsEl.innerHTML += `<span class='primary-text-color'>${card}</span> `)
  );
  if (sum < 21) {
    newCardBtn.disabled = false;
    newCardBtn.style.opacity = 1
    message = renderMessageHTML(`Still in the`, "game.");
  } else if (sum === 21) {
    hasBlackjack = true;
    newCardBtn.disabled = true;
    newCardBtn.style.opacity = 0.5
    message = renderMessageHTML("You have", "blackjack!");
  } else {
    newCardBtn.disabled = true;
    newCardBtn.style.opacity = 0.5
    message = renderMessageHTML("You're out of the", "game.");
    isAlive = false;
  }
  messageEl.innerHTML = message;
}

function renderMessageHTML(secondary, primary) {
  return `<p class='message-el'>${secondary} <span class='primary-text-color bold'>${primary}</span></p>`;
}

// Event Listeners
newCardBtn.addEventListener("click", newCard);

startGameBtn.addEventListener("click", startGame);
