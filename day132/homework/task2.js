const number= [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num * 2));

const numbers=[1, 2, 3, 4, 5];
const squared=numbers.map(num=>num**2);
console.log(squared);

const numbers1=[1, 2, 3, 4, 5, 6];
const evenNumbers=numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const numbers2=[1, 2, 3, 4, 5];
const sum=numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

