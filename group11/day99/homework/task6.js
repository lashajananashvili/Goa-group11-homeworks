class Book {
  #pages;

  constructor(title, pages) {
    this.title = title;
    this.#pages = pages;
  }

  get pages() {
    return this.#pages;
  }

  set pages(value) {
    if (value > 0) this.#pages = value;
  }
}

const book = new Book("JavaScript Basics", 300);
console.log("Pages:", book.pages);
book.pages = 350;
console.log("Updated Pages:", book.pages);