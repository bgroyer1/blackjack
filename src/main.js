let firstCard = randomCard();
let secondCard = randomCard();
const cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = ``;
const startGameBtn = document.querySelector("#start-game-btn");
const messageEl = document.querySelector('.message-el')
const sumEl = document.querySelector('#sum-el')
const cardsEl = document.querySelector('#cards-el')
const newCardBtn = document.querySelector('#new-card-btn')

function startGame() {
  renderGame();
}

function randomCard() {
  let card =  Math.floor(Math.random() * 13) + 1
  if (card > 10) {
    card = 10
  }
  return card
}

console.log(randomCard())

function renderGame() {
  cardsEl.textContent = `Cards: `
  sumEl.innerHTML = `Sum: <span class='primary-text-color'>${sum}</span>`;
  cards.forEach(card => cardsEl.innerHTML += `<span class='primary-text-color'>${card}</span> `)
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

function newCard() {
  const newCard = randomCard();
  sum += newCard
  cards.push(newCard)
  renderGame();
}

newCardBtn.addEventListener('click', newCard)

startGameBtn.addEventListener("click", startGame );

