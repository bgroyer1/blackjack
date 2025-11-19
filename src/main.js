let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = ``;
const startGameBtn = document.querySelector("#start-game-btn");
const messageEl = document.querySelector('.message-el')
const sumEl = document.querySelector('#sum-el')
const cardsEl = document.querySelector('#cards-el')
const newGameBtn = document.querySelector('#new-game-btn')

function startGame() {
  cardsEl.innerHTML = `Cards: <span class='primary-text-color'>${firstCard} ${secondCard}</span>`
  sumEl.innerHTML = `Sum: <span class='primary-text-color'>${sum}</span>`;
  if (sum < 21) {
    message = renderMessageHTML(`Still in the`, 'game.')
  } else if (sum === 21) {
    hasBlackjack = true;
    message = renderMessageHTML('You have', 'blackjack!')
  } else {
    message = renderMessageHTML("You're out of the", 'game.')
    isAlive = false;
  }
  messageEl.innerHTML = message
}

function renderMessageHTML(secondary, primary) {
  return `<p class='message-el'>${secondary} <span class='primary-text-color bold'>${primary}</span></p>`
}

function newGame() {
  console.log('clicked')
}

newGameBtn.addEventListener('click', newGame)

startGameBtn.addEventListener("click", startGame);

