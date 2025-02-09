// **Classes დავალებები:**

// 1. **კლასის შექმნა და ინიციალიზაცია:**
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user1 = new User("Lasha", "lasha@gmail.com");
const user2 = new User("Anna", "anna@gmail.com");
console.log(user1, user2);

// 2. **მეთოდის შექმნა და გამოძახება:**
class UserWithMethod {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  displayInfo() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }
}
const user3 = new UserWithMethod("John", "john@gmail.com");
user3.displayInfo();

// 3. **სტატიკური მეთოდები:**
class UserStatic {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  static compareUsers(user1, user2) {
    return user1.email === user2.email;
  }
}
const user4 = new UserStatic("Alice", "alice@gmail.com");
const user5 = new UserStatic("Bob", "bob@gmail.com");
console.log(UserStatic.compareUsers(user4, user5));

// 4. **Getters და Setters:**
class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    if (value > 0) {
      this._price = value;
    } else {
      console.log("Price must be positive");
    }
  }
}
const product = new Product("Laptop", 1000);
product.price = -500; // Price must be positive
console.log(product.price);

// 5. **მემკვიდრეობა და კონსტრუქტორების მემკვიდრეობა:**
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }
}
const student1 = new Student("Eva", 20, "S12345");
console.log(student1);

// 6. **Method Overriding:**
class PersonWithDetails {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
class StudentWithDetails extends PersonWithDetails {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, StudentID: ${this.studentID}`);
  }
}
const student2 = new StudentWithDetails("Nino", 21, "S98765");
student2.getDetails();

// 7. **Privileged მეთოდები:**
class BankAccount {
  #balance;
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }
  getBalance() {
    return this.#balance;
  }
}
const account = new BankAccount(500);
account.deposit(200);
account.withdraw(100);
console.log(account.getBalance());

// 8. **Protected თვისებები და მემკვიდრეობა:**
class Appliance {
  constructor(power) {
    this._power = power;
  }
}
class WashingMachine extends Appliance {
  constructor(power, brand) {
    super(power);
    this.brand = brand;
  }
  getPowerInfo() {
    console.log(`Power: ${this._power}W, Brand: ${this.brand}`);
  }
}
const washer = new WashingMachine(2000, "Samsung");
washer.getPowerInfo();

// 9. **Static თვისებები და მეთოდები:**
class Counter {
  static count = 0;
  static increment() {
    Counter.count++;
  }
}
Counter.increment();
Counter.increment();
console.log(Counter.count);

// 10. **კლასების მასივი:**
class Book {
  constructor(title) {
    this.title = title;
  }
}
const books = [new Book("Book A"), new Book("Book B"), new Book("Book C")];
books.forEach(book => console.log(book.title));

// **Maps დავალებები:**

// 1. **Map-ის ინიციალიზაცია მონაცემებით:**
const cityPopulation = new Map([
  ["Kutaisi", 150000],
  ["Tbilisi", 1200000],
  ["Batumi", 200000]
]);
console.log(cityPopulation);

// 2. **Map-ის ელემენტის განახლება:**
cityPopulation.set("Kutaisi", 160000);
console.log(cityPopulation);

// 3. **Map-ის `for...of` ციკლი:**
const currencyMap = new Map([
  ["USD", "Dollar"],
  ["EUR", "Euro"],
  ["GEL", "Lari"]
]);
for (const [code, currency] of currencyMap) {
  console.log(`${code}: ${currency}`);
}

// 4. **მრავალ Map-ის გაერთიანება:**
const productPrices = new Map([
  ["Apple", 2],
  ["Banana", 1]
]);
const productQuantities = new Map([
  ["Apple", 3],
  ["Banana", 5]
]);
const totalPriceMap = new Map();
productPrices.forEach((price, product) => {
  const quantity = productQuantities.get(product) || 0;
  totalPriceMap.set(product, price * quantity);
});
console.log(totalPriceMap);

// 5. **Map-ის კლონი:**
const countryMap = new Map([
  ["Georgia", "Tbilisi"],
  ["France", "Paris"],
  ["USA", "Washington D.C."]
]);
const clonedMap = new Map(countryMap);
console.log(clonedMap);

// 6. **Map-ის ელემენტების დათვლა:**
const gameRatings = new Map([
  ["FIFA", 8.5],
  ["Minecraft", 9.2],
  ["Fortnite", 7.8]
]);
console.log(`Total games: ${gameRatings.size}`);

// 7. **თითოეული ელემენტის წაშლა Map-იდან:**
const productMap = new Map([
  ["Milk", 1.5],
  ["Bread", 1.2],
  ["Eggs", 2.1]
]);
productMap.forEach((value, key) => {
  productMap.delete(key);
  console.log(`${key} removed`);
});

// 8. **Map და მასივის გარდაქმნა:**
const sportsMap = new Map([
  ["Soccer", 11],
  ["Basketball", 5],
  ["Tennis", 2]
]);
const sportsArray = Array.from(sportsMap);
console.log(sportsArray);

// 9. **Map-ის ძიება მნიშვნელობებით:**
const animalHabitats = new Map([
  ["Lion", "Savannah"],
  ["Penguin", "Antarctica"],
  ["Kangaroo", "Australia"]
]);
for (const [animal, habitat] of animalHabitats) {
  if (habitat === "Savannah") {
    console.log(animal);
  }
}

// 10. **Map-ის დაგროვება Reduce-ით:**
const studentScores = new Map([
  ["Lasha", 85],
  ["Anna", 92],
  ["Nino", 78]
]);
const averageScore = Array


// **Classes და Maps გაერთიანებული ამოცანები:**

// 1. **კლასი Map-ით და მეთოდით:**
class Library {
  constructor() {
    this.books = new Map();
  }
  addBook(title, author) {
    this.books.set(title, author);
  }
}
const library = new Library();
library.addBook("1984", "George Orwell");
console.log(library.books);

// 2. **Map კლასის თვისებად:**
class Store {
  constructor() {
    this.products = new Map();
  }
  getPrice(product) {
    return this.products.get(product);
  }
}
const store = new Store();
store.products.set("Apple", 2);
console.log(store.getPrice("Apple"));

// 3. **Map-თან მუშაობის მეთოდების შექმნა:**
class PhoneBook {
  constructor() {
    this.contacts = new Map();
  }
  addContact(name, phone) {
    this.contacts.set(phone, name);
  }
  getContact(phone) {
    return this.contacts.get(phone);
  }
}
const phoneBook = new PhoneBook();
phoneBook.addContact("Lasha", "123456789");
console.log(phoneBook.getContact("123456789"));

// 4. **კლასი Map-ის ელემენტების ჩამონათვალით:**
class Zoo {
  constructor() {
    this.animals = new Map();
  }
  listAnimals() {
    return Array.from(this.animals.keys());
  }
}
const zoo = new Zoo();
zoo.animals.set("Lion", 2);
console.log(zoo.listAnimals());

// 5. **Map და მემკვიდრეობა:**
class Inventory {
  constructor() {
    this.items = new Map();
  }
}
class StoreInventory extends Inventory {
  getStock(item) {
    return this.items.get(item);
  }
}
const storeInventory = new StoreInventory();
storeInventory.items.set("Milk", 10);
console.log(storeInventory.getStock("Milk"));

// 6. **Map-ის დამუშავება კლასის მეთოდებით:**
class Classroom {
  constructor() {
    this.students = new Map();
  }
  addStudent(id, score) {
    this.students.set(id, score);
  }
  getAverageScore() {
    const scores = Array.from(this.students.values());
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  }
}
const classroom = new Classroom();
classroom.addStudent("101", 90);
classroom.addStudent("102", 80);
console.log(classroom.getAverageScore());

// 7. **Map და კონსტრუქტორის ინიციალიზაცია:**
class CountryDirectory {
  constructor(countries) {
    this.countries = new Map(countries);
  }
  getCapital(country) {
    return this.countries.get(country);
  }
}
const directory = new CountryDirectory([
  ["Georgia", "Tbilisi"],
  ["France", "Paris"]
]);
console.log(directory.getCapital("Georgia"));

// 8. **Map-ის გამოყენება კლასის ინტერაქტიულობისთვის:**
class ShoppingCart {
  constructor() {
    this.products = new Map();
  }
  addItem(product, quantity) {
    this.products.set(product, quantity);
  }
  getTotalItems() {
    return Array.from(this.products.values()).reduce((a, b) => a + b, 0);
  }
}
const cart = new ShoppingCart();
cart.addItem("Apple", 2);
cart.addItem("Banana", 3);
console.log(cart.getTotalItems());

// 9. **Map-თან მუშაობა კონსტრუქტორის მეშვეობით:**
class RestaurantMenu {
  constructor(menuItems) {
    this.menu = new Map(menuItems);
  }
  getItemPrice(item) {
    return this.menu.get(item);
  }
}
const menu = new RestaurantMenu([
  ["Burger", 5],
  ["Pizza", 8]
]);
console.log(menu.getItemPrice("Pizza"));

// 10. **Map-ის გაერთიანება კლასში და ინფორმაციის დალაგება:**
class StudentGrades {
  constructor(grades) {
    this.grades = new Map(grades);
  }
  getTopStudent() {
    let topStudent = "";
    let maxGrade = -1;
    for (const [student, grade] of this.grades) {
      if (grade > maxGrade) {
        maxGrade = grade;
        topStudent = student;
      }
    }
    return topStudent;
  }
}
const grades = new StudentGrades([
  ["Lasha", 85],
  ["Anna", 92],
  ["Nino", 78]
]);
console.log(grades.getTopStudent());
