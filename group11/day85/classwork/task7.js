function manualFilter(callback, array) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
  }
  
  function isEven(num) {
    return num % 2 === 0; 
  }
  
  function isGreaterThanFive(num) {
    return num > 5; 
  }