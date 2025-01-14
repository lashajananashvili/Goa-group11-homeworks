const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 7, 8];

const filteredNumbers = numbers.filter(
  (num, index, array) => array.filter((x) => x === num).length === 2
);
console.log("Filtered using filter:", filteredNumbers);

function myFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

const myFilteredNumbers = myFilter(numbers, (num, index, array) =>
  array.filter((x) => x === num).length === 2
);
console.log("Filtered using myFilter:", myFilteredNumbers);
