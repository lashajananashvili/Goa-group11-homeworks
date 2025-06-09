type carType = {
    brand: string,
    model: string,
    year: number,
    id: string | number,
  }
  
  type funcType = (brand: string, model: string, year: number, id: string | number) => carType;
  
  const createCar: funcType = function(brand: string, model: string, year: number, id: string | number) {
    if (typeof id === "string") {
      id = id.toUpperCase();
    }
  
    return { brand, model, year, id };
  }