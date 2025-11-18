let firstCard = 8;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = ``;

if (sum < 21) {
  message = `Still in the game.`;
} else if (sum === 21) {
  hasBlackjack = true;
  message = `You have blackjack!`;
} else {
  message = `You're out of the game`;
  isAlive = false;
}
