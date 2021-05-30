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

function pMove() {
  const compMove = moves[Math.trunc(Math.random() * 3)];
  switch (compMove) {
    case 'rock':
      userScore++;
      userScoreEl.textContent = userScore;
      resultMsg.textContent = `Paper vs ${compMove}. You win.`;
      break;
    case 'scissors':
      compScore++;
      compScoreEl.textContent = compScore;
      resultMsg.textContent = `Paper vs ${compMove}. You lose.`;
      break;
    case 'paper':
      resultMsg.textContent = `Paper vs ${compMove}. It's a draw.`;
      break;
  }
}

function sMove() {
  const compMove = moves[Math.trunc(Math.random() * 3)];
  switch (compMove) {
    case 'rock':
      compScore++;
      compScoreEl.textContent = compScore;
      resultMsg.textContent = `Scissors vs ${compMove}. You lose.`;
      break;
    case 'paper':
      userScore++;
      userScoreEl.textContent = userScore;
      resultMsg.textContent = `Scissors vs ${compMove}. You win.`;
      break;
    case 'scissors':
      resultMsg.textContent = `Scissors vs ${compMove}. It's a draw.`;
      break;
  }
}

function rMove() {
  const compMove = moves[Math.trunc(Math.random() * 3)];
  switch (compMove) {
    case 'scissors':
      userScore++;
      userScoreEl.textContent = userScore;
      resultMsg.textContent = `Rock vs ${compMove}. You win.`;
      break;
    case 'paper':
      compScore++;
      compScoreEl.textContent = compScore;
      resultMsg.textContent = `Rock vs ${compMove}. You lose.`;
      break;
    case 'rock':
      resultMsg.textContent = `Rock vs ${compMove}. It's a draw.`;
      break;
  }
}

/*

RP - Rock vs Paper (Paper wins)

PR - Paper vs Rock (Paper wins)

PS - Paper vs Scissors (Scissors wins)

SP - Scissors vs Paper (Scissors wins)
 
RS - Rock vs Scissors (Rock wins)

SR - Scissors vs Rock (Rock wins)
 
PP - Paper vs Paper (No one wins)

RR - Rock vs Rock (No one wins)

SS - Scissors vs Scissors (No one wins)

*/
