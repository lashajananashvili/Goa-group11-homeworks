const randomOutcomePromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve("Success!");
    } else {
      reject("Failed!");
    }
  });
  
  randomOutcomePromise
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
  