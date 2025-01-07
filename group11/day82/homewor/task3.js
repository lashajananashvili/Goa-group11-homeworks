function generateArray(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }
  
  const numbersArray = generateArray(1, 10);
  console.log(numbersArray); 
  