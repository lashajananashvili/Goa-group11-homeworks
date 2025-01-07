function generate_even(border) {
    let evenNumbers = [];
    for (let num = 0; num <= border; num++) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
}

function calculateSum(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

let evenArray = generate_even(10); 
console.log(calculateSum(evenArray)); 
