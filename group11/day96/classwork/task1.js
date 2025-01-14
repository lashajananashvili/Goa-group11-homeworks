const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum using reduce:", sum);

const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log("Product using reduce:", product);

function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

const mySum = myReduce(numbers, (acc, curr) => acc + curr, 0);
console.log("Sum using myReduce:", mySum);

const myProduct = myReduce(numbers, (acc, curr) => acc * curr, 1);
console.log("Product using myReduce:", myProduct);
