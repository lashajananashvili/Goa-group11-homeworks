const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 10+1);

console.log("guess a number from 1-10:");

rl.on('line', (input) => {
  const guess = Number(input);
  if (isNaN(guess)) {
    console.log("please pich a number");
  }else if (guess === randomNumber) {
    console.log("well done guessed correctly");
    rl.close();
  } else {
    console.log("wrong try again");
  }
});
