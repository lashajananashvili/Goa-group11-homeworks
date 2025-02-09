// **1. set() მეთოდის გამოყენება:**
const productPrices = new Map();
productPrices.set("Apple", 2);
console.log("Apple added successfully.");
productPrices.set("Banana", 1);
console.log("Banana added successfully.");
productPrices.set("Orange", 3);
console.log("Orange added successfully.");

// **2. get() მეთოდის გამოყენება:**
const applePrice = productPrices.get("Apple");
console.log("The price of Apple is:", applePrice);

// **3. has() მეთოდის გამოყენება:**
const movies = new Map([
  ["Inception", 2010],
  ["Interstellar", 2014],
  ["The Matrix", 1999]
]);
if (movies.has("Inception")) {
  console.log("Inception is in the list.");
} else {
  console.log("Inception is not in the list.");
}

// **4. delete() მეთოდის გამოყენება:**
const athletes = new Map([
  ["Usain Bolt", 9.58],
  ["Michael Phelps", 23],
  ["Serena Williams", 23]
]);
athletes.delete("Michael Phelps");
console.log("Michael Phelps removed successfully.", !athletes.has("Michael Phelps"));

// **5. clear() მეთოდის გამოყენება:**
const carBrands = new Map([
  ["Toyota", "Camry"],
  ["BMW", "X5"],
  ["Mercedes", "C-Class"]
]);
carBrands.clear();
console.log("Car brands map cleared.", carBrands.size === 0);

// **6. size თვისების გამოყენება:**
const restaurantMenu = new Map([
  ["Pizza Palace", "Pepperoni Pizza"],
  ["Burger Haven", "Cheeseburger"],
  ["Sushi Spot", "California Roll"]
]);
console.log("Number of restaurants:", restaurantMenu.size);

// **7. keys() მეთოდის გამოყენება:**
const countryCodes = new Map([
  ["GE", "Georgia"],
  ["FR", "France"],
  ["JP", "Japan"]
]);
for (const code of countryCodes.keys()) {
  console.log("Country code:", code);
}

// **8. values() მეთოდის გამოყენება:**
for (const country of countryCodes.values()) {
  console.log("Country name:", country);
}

// **10. forEach() მეთოდის გამოყენება:**
const drinks = new Map([
  ["Coca-Cola", 140],
  ["Pepsi", 150],
  ["Orange Juice", 120]
]);
drinks.forEach((calories, name) => {
  console.log(`Drink: ${name}, Calories: ${calories}`);
});
