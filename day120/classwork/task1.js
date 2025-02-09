import { calculator, filter } from './calculator.js';

const result1 = calculator(20, 4, '/');
console.log(`Division: ${result1}`);

const numbers = [1, 3, 5, 8, 10];
const isOdd = (num) => num % 2 !== 0;
const filteredNumbers = filter(numbers, isOdd);
console.log(`Filtered odd numbers: ${filteredNumbers}`);

