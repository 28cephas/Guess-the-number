'use strict';
const startBtn = document.querySelector('.start');
const howToPlayBtn = document.querySelector('.inst');
const backBtn = document.querySelectorAll('.back');
const correctNum = document.querySelector('.correctScore');
const againBtn = document.querySelector('.again');
const inputNum = document.querySelector('.input-number');
const checkBtn = document.querySelector('.check');
const msg = document.querySelector('.c-number');
const scorePoint = document.querySelector('.score-point');
const highScore = document.querySelector('.highscore-point');
const mainView = document.querySelector('main');
const sectionView = document.querySelector('section');
const instruView = document.querySelector('article');

startBtn.addEventListener('click', () => {
  mainView.style.display = 'none';
  sectionView.style.display = 'flex';
});

howToPlayBtn.addEventListener('click', () => {
  mainView.style.display = 'none';
  instruView.style.display = 'block';
});

backBtn.forEach(btns => {
  btns.addEventListener('click', () => {
    mainView.style.display = 'block';
    sectionView.style.display = 'none';
    instruView.style.display = 'none';
    restart();
  });
});

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScoreValue = 0;

checkBtn.addEventListener('click', () => {
  const guess = Number(inputNum.value);

  if (!guess) {
    // when there is no input
    msg.textContent = 'Please input a number 🙏';
  } else if (guess === randomNumber) {
    // when guess is correct
    correctNum.textContent = randomNumber;
    msg.textContent = '✔ Wow nice guess😍';
    scorePoint.textContent = score;
    sectionView.style.background = '#5bb450';
    inputNum.style.background = '#5bb450';

    if (score > highScoreValue) {
      highScoreValue = score;
      highScore.textContent = highScoreValue;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      msg.textContent =
        guess > randomNumber
          ? '⏫ Too high, try a lower number'
          : '⏬ Too low, try a higher number';
      pointReduced();
    } else {
      gameLost();
    }
  }
});

againBtn.addEventListener('click', restart);

function restart() {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  correctNum.textContent = '?';
  msg.textContent = 'Start guessing... 🤔';
  scorePoint.textContent = score;
  sectionView.style.background = '#a1affd';
  inputNum.style.background = '#a1affd';
  inputNum.value = '';
}

function pointReduced() {
  score--;
  scorePoint.textContent = score;
}

function gameLost() {
  msg.textContent = '💔 You lost the game!!!';
  scorePoint.textContent = 0;
}
