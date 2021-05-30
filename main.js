'use strict';

// Elements on webpage
let userScoreEl = document.getElementById('user-score');
let compScoreEl = document.getElementById('computer-score');
let restartMsg = document.getElementById('again');
let resultMsg = document.getElementById('result-message');

const paperMove = document.getElementById('p');
const scissorsMove = document.getElementById('s');
const rockMove = document.getElementById('r');

paperMove.addEventListener('click', pMove);
scissorsMove.addEventListener('click', sMove);
rockMove.addEventListener('click', rMove);
restartMsg.addEventListener('click', init);

// Global variables
let userScore, compScore;
const moves = ['paper', 'scissors', 'rock'];

function init() {
  userScore = 0;
  compScore = 0;
  compScoreEl.textContent = '0';
  userScoreEl.textContent = '0';
  resultMsg.textContent = 'Make your first move!';
  resultMsg.classList.remove('green');
  resultMsg.classList.remove('red');
  resultMsg.classList.remove('gray');
}

init();

// Win
function win(user, comp, userChoice) {
  resultMsg.classList.remove('gray');
  resultMsg.classList.remove('red');
  userScore++;
  userScoreEl.textContent = userScore;
  resultMsg.textContent = `${user} vs ${comp}. You win.`;
  resultMsg.classList.add('green');
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(
    () => document.getElementById(userChoice).classList.remove('green-glow'),
    500
  );
}

// Lose
function lose(user, comp, userChoice) {
  resultMsg.classList.remove('gray');
  resultMsg.classList.remove('green');
  compScore++;
  compScoreEl.textContent = compScore;
  resultMsg.textContent = `${user} vs ${comp}. You lose.`;
  resultMsg.classList.add('red');
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(
    () => document.getElementById(userChoice).classList.remove('red-glow'),
    500
  );
}

// Draw
function draw(user, comp, userChoice) {
  resultMsg.classList.remove('red');
  resultMsg.classList.remove('green');
  resultMsg.textContent = `${user} vs ${comp}. It's a draw.`;
  resultMsg.classList.add('gray');
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(
    () => document.getElementById(userChoice).classList.remove('gray-glow'),
    500
  );
}

function pMove() {
  const compMove = moves[Math.trunc(Math.random() * 3)];
  switch (compMove) {
    case 'rock':
      win('Paper', compMove, 'p');
      break;
    case 'scissors':
      lose('Paper', compMove, 'p');
      break;
    case 'paper':
      draw('Paper', compMove, 'p');
      break;
  }
}

function sMove() {
  const compMove = moves[Math.trunc(Math.random() * 3)];
  switch (compMove) {
    case 'paper':
      win('Scissors', compMove, 's');
      break;
    case 'rock':
      lose('Scissors', compMove, 's');
      break;
    case 'scissors':
      draw('Scissors', compMove, 's');
      break;
  }
}

function rMove() {
  const compMove = moves[Math.trunc(Math.random() * 3)];
  switch (compMove) {
    case 'scissors':
      win('Rock', compMove, 'r');
      break;
    case 'paper':
      lose('Rock', compMove, 'r');
      break;
    case 'rock':
      draw('Rock', compMove, 'r');
      break;
  }
}
