const errorPromise = new Promise((_, reject) => {
    reject("Something went wrong!");
  });
  
  errorPromise
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
  