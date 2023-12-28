/* 
Imagine you are building an inventory management system for a bookstore. 
Create an object constructor function Book with properties for title, author, price, and quantityInStock. 
Write a method inside the constructor that displays information about the book.

Create an array of books and implement the following functionalities:

Write a function addBook that adds a new book to the inventory.
Write a function searchBook that takes a book title as input and returns information about the book if found, or a message if the book is not in the inventory.
Write a function sellBook that takes a book title and quantity as input. It should update the quantity in stock and display a message confirming the sale.
*/

// Solution
// Using the Book constructor
function Book(title, author, price, quantityInStock) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantityInStock = quantityInStock;
  
    this.displayInfo = function () {
      console.log(`Title: ${this.title}, Author: ${this.author}, Price: ${this.price}, Quantity: ${this.quantityInStock}`);
    };
  }
  
  // Array to store books
  const bookInventory = [];
  
  // Function to add a new book to the inventory
  function addBook(title, author, price, quantityInStock) {
    const newBook = new Book(title, author, price, quantityInStock);
    bookInventory.push(newBook);
  }
  
  // Function to search for a book
  function searchBook(title) {
    const foundBook = bookInventory.find((book) => book.title === title);
    return foundBook ? foundBook : `Book with title '${title}' not found.`;
  }
  
  // Function to sell a book
  function sellBook(title, quantity) {
    const bookIndex = bookInventory.findIndex((book) => book.title === title);
  
    if (bookIndex !== -1) {
      const book = bookInventory[bookIndex];
  
      if (book.quantityInStock >= quantity) {
        book.quantityInStock -= quantity;
        return `Sold ${quantity} copies of '${title}'. Remaining stock: ${book.quantityInStock}.`;
      } else {
        return `Insufficient stock for '${title}'.`;
      }
    } else {
      return `Book with title '${title}' not found.`;
    }
  }
  
  // Adding books to the inventory
  addBook("The Catcher in the Rye", "J.D. Salinger", 15.99, 50);
  addBook("To Kill a Mockingbird", "Harper Lee", 12.99, 30);
  addBook("1984", "George Orwell", 14.49, 40);
  
  // Testing functionalities
  searchBook("1984").displayInfo();
  console.log(sellBook("To Kill a Mockingbird", 10));
  console.log(sellBook("The Great Gatsby", 5));
  