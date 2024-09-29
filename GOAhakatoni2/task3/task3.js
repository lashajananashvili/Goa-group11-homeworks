function sumArray(arr){
    let maxSofar = arr[0];
    let maxEnd = arr[0];
    
    for(let i = 1; i <  arr.length; i++){
        maxEnd = math.max(arr[i], + maxEnd + arr[i]);
        maxSofar = math.max(maxSofar, maxEnd);

}
 return maxSofar
}

const array = [1,-2,3,4,-1,1,2]
console.log(sumArray)