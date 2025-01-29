const fetchData = new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 1000);
  });
  
  fetchData.then((data) => console.log(data));
  