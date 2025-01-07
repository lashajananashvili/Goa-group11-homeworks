function calculateAverage(array) {
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum / array.length;
  }
  
  const average = calculateAverage(numbersArray);
  console.log(average); 
  