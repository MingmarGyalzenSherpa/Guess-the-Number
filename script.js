'use strict';
const guessInput = document.querySelector('.guess');
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const message = document.querySelector('.message');
let isGameActive;
let randomNumber;

//function for new game
function newGame() {
  randomNumber = Math.floor(Math.random() * 20 + 1); //(0.00 - 0.99) * 20 =( 0.00 - 19.99 ) +1 = floor(1.00 - 20.99) = 1-20
  console.log(randomNumber);
  guessInput.value = '';
  document.querySelector('body').style.background = '#222';
  score.textContent = 20;
  //   let highestScore = localStorage.getItem('highScore');
  //   highScore.textContent = highestScore;
  isGameActive = true;
}

//function to update highscore
function updateHighScore(currentScore) {
  if (currentScore > highScore.textContent) {
    highScore.textContent = currentScore;
    // localStorage.setItem('highScore', String(currentScore));
    // highScore.textContent = localStorage.getItem('highScore');
  }
}

newGame();

againBtn.addEventListener('click', () => {
  newGame();
});

checkBtn.addEventListener('click', function () {
  if (isGameActive) {
    let guessedNumber = Number(guessInput.value); //store the guessed number
    guessInput.value = '';
    if (guessedNumber === randomNumber) {
      message.textContent = '🥳 Correct Guess';
      document.querySelector('body').style.background = '#60b347';
      isGameActive = false;
      updateHighScore(Number(score.textContent));
    } else if (guessedNumber < randomNumber) {
      message.textContent = ' 📉 Too Low';
      score.textContent = Number(score.textContent) - 1;
    } else {
      message.textContent = '📈 Too High';
      score.textContent = Number(score.textContent) - 1;
    }
  }
});
