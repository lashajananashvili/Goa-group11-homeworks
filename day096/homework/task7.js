const book = { title: "1984", author: "George Orwell", year: 1949, publisher: "Secker & Warburg" };
const { year, publisher, ...details } = book;
console.log(details);