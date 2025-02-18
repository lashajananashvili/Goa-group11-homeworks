function manualSlice(array, startIndex, endIndex) {
    let slicedArray = [];
    for (let i = startIndex; i<endIndex; i++) {
      slicedArray.push(array[i]); 
    }
    return slicedArray;
  }
  