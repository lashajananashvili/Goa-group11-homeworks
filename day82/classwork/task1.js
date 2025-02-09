function even_sum(border) {
    let total = 0;
    for (let num = 0; num <= border; num++) {
        if (num % 2 === 0) {
            total += num;
        }
    }
    return total;
}

console.log(even_sum(10));
