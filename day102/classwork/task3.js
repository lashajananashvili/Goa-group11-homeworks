const ageMap = new Map([
    ["Lasha", 15],
    ["Nino", 22],
    ["Anna", 30],
  ]);
  
  function checkNameInMap(name) {
    return ageMap.has(name)
      ? `${name} is in the Map with age: ${ageMap.get(name)}`
      : `${name} is not in the Map`;
  }
  
  console.log(checkNameInMap("Nino"));
  console.log(checkNameInMap("George"));