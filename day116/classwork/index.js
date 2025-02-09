//const { greet, calculateAverage } = require('./functions');

//console.log(greet("Lasha"));
//console.log(calculateAverage([1, 2, 3, 4, 5]));

import greet, { name } from './greet.js';

console.log(greet());
console.log(`User's name is: ${name}`);
