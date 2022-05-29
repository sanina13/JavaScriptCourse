'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';
console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let conf = 0; // confirmation if win previne to add more highscore points

const messageContent = function (message) {
  document.querySelector('.message').textContent = message;
};

const scoreContent = function (score) {
  document.querySelector('.score').textContent = score;
};

const respGuess = function (resp) {
  if (score > 1) {
    messageContent(resp);
    score--;
    scoreContent(score);
  } else {
    messageContent('😭You lost the game!');
    scoreContent('0');
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when is no input
  if (!guess) {
    messageContent('⛔ No Number!');

    //When player wins
  } else if (guess === secretNumber) {
    if (conf === 0) {
      highscore += score;
      conf++;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = highscore;
    messageContent('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //When guess is too high
  } else if (guess > secretNumber) {
    respGuess('📈 Too High!');
  }
  //when the guess is too low
  else if (guess < secretNumber) {
    respGuess('📉 Too Low!');
  }
});

document.querySelector('.btn').addEventListener('click', function () {
  conf = 0;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreContent('20');
  messageContent('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
