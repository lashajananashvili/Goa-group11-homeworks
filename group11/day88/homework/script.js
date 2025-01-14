const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const newGameButton = document.getElementById('new-game');

const options = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.id;
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    const result = getResult(userChoice, computerChoice);

    resultText.innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
  });
});

newGameButton.addEventListener('click', () => {
  resultText.innerText = 'Make your move!';
});

function getResult(user, computer) {
  if (user === computer) {
    return "It's a draw!";
  }
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return 'You win!';
  }
  return 'Computer wins!';
}
