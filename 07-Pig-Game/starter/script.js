'use strict';
//selecting elements
const scorePlayer0 = document.querySelector('#score--0');
const scorePlayer1 = document.querySelector('#score--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//Starting conditions
let scores, currentScore, currentplayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  currentplayer = 0;
  playing = true;

  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  diceEl.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

init();

const changePlayer = function () {
  document.getElementById(`current--${currentplayer}`).textContent = 0;
  currentScore = 0;
  currentplayer = currentplayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice role
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.setAttribute('src', `dice-${dice}.png`);
    // other form: diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${currentplayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      changePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[currentplayer] += currentScore;
    document.querySelector(`#score--${currentplayer}`).textContent =
      scores[currentplayer];
    // 2. Check if player's score is >= 100
    // Finish the game
    if (scores[currentplayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${currentplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentplayer}`)
        .classList.remove('player--active');
    } else {
      //Switch to the next player
      changePlayer();
    }
  }
});

btnNew.addEventListener('click', init);
