const delayedPromise = new Promise((resolve) => {
    setTimeout(() => resolve("2 seconds have passed"), 2000);
  });
  
  delayedPromise.then((message) => console.log(message));
  