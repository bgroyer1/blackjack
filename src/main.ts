// Global Variables
let cards: number[] = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = ``;

// Dom Elements
const startGameBtn = document.querySelector<HTMLButtonElement>("#start-game-btn")!;
const messageEl = document.querySelector<HTMLParagraphElement>(".message-el")!;
const sumEl = document.querySelector<HTMLParagraphElement>("#sum-el")!;
const cardsEl = document.querySelector<HTMLParagraphElement>("#cards-el")!;
const newCardBtn = document.querySelector<HTMLButtonElement>("#new-card-btn")!;

// Functions
function startGame():void {
    newCardBtn.disabled = false;
    let firstCard = randomCard();
    let secondCard = randomCard();
    hasBlackjack = false;
    isAlive = true;
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function randomCard(): number  {
  let card = Math.floor(Math.random() * 13) + 1;
  if (card > 10) {
    return 10;
  } else if (card === 1) {
    return 11;
  } else {
    return card;
  }
}

function newCard(): void {
  if (isAlive && hasBlackjack === false) {
    const newCard = randomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}

function renderGame(): void {
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
