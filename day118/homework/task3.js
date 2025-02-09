class LibraryItem {
    constructor(title, year) {
      this.title = title;
      this.year = year;
      this.isAvailable = true;
    }
  
    borrowItem() {
      if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`You borrowed "${this.title}".`);
      } else {
        console.log(`Sorry, "${this.title}" is not available.`);
      }
    }
  
    returnItem() {
      this.isAvailable = true;
      console.log(`You returned "${this.title}".`);
    }
  }
  
  class Book extends LibraryItem {
    constructor(title, year, author, genre) {
      super(title, year);
      this.author = author;
      this.genre = genre;
    }
  
    getSummary() {
      return `"${this.title}" by ${this.author}, published in ${this.year}. Genre: ${this.genre}.`;
    }
  }
  
  class Magazine extends LibraryItem {
    constructor(title, year, issueNumber) {
      super(title, year);
      this.issueNumber = issueNumber;
    }
  
    getSummary() {
      return `"${this.title}", Issue No. ${this.issueNumber}, published in ${this.year}.`;
    }
  }
  
const book1 = new Book("The Great Gatsby", 1925, "F. Scott Fitzgerald", "Classic Fiction");
const magazine1 = new Magazine("National Geographic", 2023, 1205);
  
console.log(book1.getSummary());
console.log(magazine1.getSummary());
book1.borrowItem();
book1.borrowItem(); 
  
book1.returnItem(); 
book1.borrowItem(); 
  
magazine1.borrowItem();
magazine1.returnItem(); 
  