let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHigh = document.querySelector('.lowOrHigh');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();

let checkGuess = () => {
  let userGuess = Number(guessField.value);
  if(guessCount === 1){
    guesses.textContent = 'Previos guess(es): ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congrats! You Guess Right';
    lastResult.style.backgroundColor = 'green';
    // lastResult.classList.add('winner');
    lowOrHigh.textContent = '';
    setGameOver();
  } else if (guessCount === 5) {
    lastResult.textContent = 'Hooops! GAME OVER!';
    setGameOver();
  } else {
    lastResult.textContent = 'Hoops!, Wrong!!!';
    lastResult.style.backgroundColor = 'red';
    // lastResult.classList.add('wrong');
    if(userGuess < randomNumber) {
      lowOrHigh.textContent = 'Last guess was Low';
    } else if(userGuess > randomNumber) {
      lowOrHigh.textContent = 'Last guess was High';
    }
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

//GameOver
let setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  resetButton.style.backgroundColor = 'steelBlue';
  resetButton.style.color = 'white';
  resetButton.style.padding = '5px';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}
let resetGame = () => {
  guessCount = 1;
  let resetParas = document.querySelectorAll('.results p');
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) +1;
}
