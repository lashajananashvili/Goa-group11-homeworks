// 1. indexOf() - Returns the first index of the element in the array 
let names = ["Lasha", "Nino", "Mariam", "Nino"];
console.log(names.indexOf("Nino")); 
// Explanation: indexOf finds the first occurrence of "Nino" at index 1.

console.log(names.indexOf("David"));
// Explanation: "David" is not in the array, so indexOf returns -1.

// 2. lastIndexOf() - Returns the last index of the element in the array
console.log(names.lastIndexOf("Nino")); 
// Explanation: lastIndexOf finds the last occurrence of "Nino" at index 3.

console.log(names.lastIndexOf("David")); 
// Explanation: "David" is not in the array.

// 3. includes() - Checks if the array contains the element
console.log(names.includes("Mariam")); 
// Explanation: includes returns true because "Mariam" is in the array.

console.log(names.includes("Giorgi")); 
// Explanation: includes returns false because "Giorgi" is not in the array.
