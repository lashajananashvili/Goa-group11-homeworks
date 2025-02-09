// 1. push() - Adds a new element to the end of the array
let fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits);
// Explanation: push adds "cherry" to the end of the fruits array.

fruits.push("orange", "grape");
console.log(fruits);
// Explanation: push can add multiple elements at the end of the array.

// 2. pop() Removes the last element from the array and returns it
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits); 
// Explanation: pop removes the last element and returns it.

// 3. unshift() - Adds a new element at the beginning of the array
let numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers); 
// Explanation: unshift adds  to the beginning of the array.

numbers.unshift(0, -1);
console.log(numbers);
// Explanation: unshift can add multiple elements to the beginning of the array.

// 4. shift() - Removes the first element from the array and returns it
let firstNumber = numbers.shift();
console.log(firstNumber);
console.log(numbers); 
// Explanation: shift removes the first element  and returns it.

// 5. slice() - Extracts a portion of the array into a new array
let slicedNumbers = numbers.slice(1, 3);
console.log(slicedNumbers); 
// Explanation: slice takes elements from index 1 up to (but not including) index 3.

let copyOfNumbers = numbers.slice();
console.log(copyOfNumbers); 
// Explanation: slice without arguments creates a shallow copy of the array.

// 6. splice() - Adds, removes, or replaces elements in an array
numbers.splice(2, 1, "newElement");
console.log(numbers);
// Explanation: splice removes 1 element at index 2 and inserts "newElement".

numbers.splice(1, 2);
console.log(numbers);
// Explanation: splice removes 2 elements starting from index 1.
