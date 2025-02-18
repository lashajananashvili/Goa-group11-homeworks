const product = { name: "lenovo", price: 999 };
const { name, category = "general" } = product;
console.log(name, category);