const student = {
  name: "saba",
  age: 16,
  address: { city: "Tbilisi", country: "Georgia" }
};
const { address: { city, country } } = student;
console.log(city, country);