'use strict';

// Elements on webpage
let userScoreEl = document.getElementById('user-score');
let compScoreEl = document.getElementById('computer-score');
let actionMsg = document.getElementById('action-message');
let resultMsg = document.getElementById('result-message');

const paperMove = document.getElementById('p');
const scissorsMove = document.getElementById('s');
const rockMove = document.getElementById('r');

paperMove.addEventListener('click', pMove);
scissorsMove.addEventListener('click', sMove);
rockMove.addEventListener('click', rMove);

// Global variables
let userScore = 0;
let compScore = 0;
const moves = ['paper', 'scissors', 'rock'];

// Win
function win(user, comp, userChoice) {
  userScore++;
  userScoreEl.textContent = userScore;
  resultMsg.textContent = `${user} vs ${comp}. You win.`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(
    () => document.getElementById(userChoice).classList.remove('green-glow'),
    500
  );
}

// Lose
function lose(user, comp, userChoice) {
  compScore++;
  compScoreEl.textContent = compScore;
  resultMsg.textContent = `${user} vs ${comp}. You lose.`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(
    () => document.getElementById(userChoice).classList.remove('red-glow'),
    500
  );
}

// Draw
function draw(user, comp, userChoice) {
  resultMsg.textContent = `${user} vs ${comp}. It's a draw.`;
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
