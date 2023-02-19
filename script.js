'use strict';

//new one

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Button check is clicked
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(secretNumber);
  if (guess > 20 || guess < 0)
    return (document.querySelector('.message').textContent =
      'Guess between 0 and 20');

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No secretNumber!!!';
  }

  //when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('.message').style = 'font-size:2em;';
    document.querySelector('body').style.backgroundColor = 'rgb(105 224 105)';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rm';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //when guess is too high
  else if (guess !== secretNumber) {
    if (score > 1) {
      let msg = '';
      document.querySelector('.message').textContent = '';
      if (guess - secretNumber > 5) msg = 'too heigh';
      else if (guess - secretNumber < -5) msg = 'too low';
      else msg = 'you are closer to the number..!!';

      document.querySelector('.message').textContent = msg;

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//when Buton Again cliked
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').style = 'height:3rem;';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
});
