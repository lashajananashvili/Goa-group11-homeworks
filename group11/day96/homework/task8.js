const user = { name: "Emma", age: 30 };
const location = { city: "Seattle", country: "USA" };
const merged = { ...user, ...location };
console.log(merged);