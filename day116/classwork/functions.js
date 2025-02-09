function greet(name) {
    return `Hello, ${name}!`;
}
  
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
module.exports = { greet, calculateAverage };
  