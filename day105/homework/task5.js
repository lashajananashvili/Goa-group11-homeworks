const numberPromise = new Promise((resolve) => resolve(5));

numberPromise
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((result) => console.log(`Final result: ${result}`));
