const priceMap = new Map([
    ["Apple", 1.0],
    ["Banana", 1.5],
    ["Orange", 2.0],
  ]);
  
  function increasePrice(product, percentage) {
    if (priceMap.has(product)) {
      let updatedPrice = priceMap.get(product) * (1 + percentage / 100);
      priceMap.set(product, updatedPrice);
    } else {
      console.log(`Product ${product} not found.`);
    }
  }
  
  increasePrice("Apple", 10);
  console.log("Updated Prices:", priceMap);
  