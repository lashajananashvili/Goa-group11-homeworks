let numbersArray = [];
for (let i = 0; i <= 10; i++) {
    let obj = {
        value: i,
        type: i % 2 === 0 ? "even" : "odd"
    };
    numbersArray.push(obj);
}
console.log(numbersArray);
