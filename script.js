'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highScore = '0';

const messageDisplay = document.querySelector('.message');
const scoreValue = document.querySelector('.score');
const guessInput = document.querySelector('.guess');
const highScoreLabel = document.querySelector('.highscore');

console.log(`New Random Number is ${randomNumber}`);

const displayMessage = function (message) {
  messageDisplay.textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const value = document.querySelector('.guess').value;
  console.log(value);
  if (!value) {
    displayMessage('Please select a value🤑');
  } else if (value != randomNumber) {
    displayMessage(value < randomNumber ? 'Too low' : 'Too Damn High');
    score -= 1;
    scoreValue.textContent = score;
  } else {
    displayMessage('Winner');
    score += 20;
    scoreValue.textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > Number(highScoreLabel.textContent)) {
      highScoreLabel.textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  scoreValue.textContent = score;
  displayMessage('Start Guessing....');
  console.log(`New Random Number is ${randomNumber}`);
  document.querySelector('body').style.backgroundColor = '#222';
  guessInput.textContent = '';
});
