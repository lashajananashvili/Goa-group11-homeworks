function divisionOfMinAndMax(arr){
    let min = Math.min(arr)
    let max = Math.max(arr)
    return  max - min
}
const arr = new Array [2,10,4,1,40]
console.log(divisionOfMinAndMax(arr))

function calculateDifference(arr) {
    const maxValue = Math.max(...arr); 
    const minValue = Math.min(...arr); 
    return maxValue - minValue; 
}
const result = calculateDifference([1, 2, 3, 4, 5]);