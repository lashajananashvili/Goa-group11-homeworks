const numberMap = new Map([
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
  ]);
  
  function filterEvenValues(map) {
    const filteredMap = new Map();
    map.forEach((value, key) => {
      if (value % 2 === 0) {
        filteredMap.set(key, value);
      }
    });
    return filteredMap;
  }
  
  console.log("Filtered Map (Even Values):", filterEvenValues(numberMap));