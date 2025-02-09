const stringsMap = new Map();
stringsMap.set("hello", "hello".length);
stringsMap.set("world", "world".length);
stringsMap.set("JavaScript", "JavaScript".length);

const uniqueSum = Array.from(new Set(stringsMap.values()))
  .reduce((sum, length) => sum + length, 0);
console.log("Sum of unique lengths:", uniqueSum);
