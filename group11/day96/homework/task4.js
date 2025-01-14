const student = {
  name: "Bob",
  age: 20,
  address: { city: "Los Angeles", country: "USA" }
};
const { address: { city, country } } = student;
console.log(city, country);