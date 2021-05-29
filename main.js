'use strict';

let userScore = document.getElementById('user-score');
let compScore = document.getElementById('computer-score');
let actionMsg = document.getElementById('action-message');
let resultMsg = document.getElementById('result-message');

const paperMove = document.getElementById('p');
const scissorsMove = document.getElementById('s');
const rockMove = document.getElementById('r');

paperMove.addEventListener('click', pMove);
scissorsMove.addEventListener('click', sMove);
rockMove.addEventListener('click', rMove);

function pMove() {
  console.log('Paper');
}

function sMove() {
  console.log('Scissors');
}

function rMove() {
  console.log('Rock');
}
