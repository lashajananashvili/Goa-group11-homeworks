const immediatePromise = new Promise((resolve) => {
    resolve("Hello, Promise!");
  });
  
  immediatePromise.then((message) => {
    console.log(message);
  });
  