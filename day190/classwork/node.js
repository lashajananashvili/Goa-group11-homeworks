const numbers = [];


process.stdin.on('data', (input) => {
    try {
        const number = parseInt(input);

        if(isNaN(number)) throw new Error('Input should be number');

        numbers.push(number);

        console.log(numbers)

        if(numbers.length === 5) {
            process.exit();
        }
    } catch(err) {
        console.log('Something wrong', err);
        process.exit();
    } 
})