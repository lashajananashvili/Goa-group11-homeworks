const user = { name: "Lasha", age: 21 };
const location = { city: "Woporti", country: "Georgia" };
const merged = { ...user, ...location };
console.log(merged);