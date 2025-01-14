
const numbers = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

const mappedNumbers = numbers.map((num, index) =>
  index % 2 === 0 ? num * 2 : num
);
console.log("Mapped using map:", mappedNumbers);

function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

const myMappedNumbers = myMap(numbers, (num, index) =>
  index % 2 === 0 ? num * 2 : num
);
console.log("Mapped using myMap:", myMappedNumbers);
