// Store class
export default class Store {
    static getBooks() {
      const books = JSON.parse(localStorage.getItem('books'));
      return books || [];
    }
  
    static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook(book) {
      let books = Store.getBooks();
      books = books.filter((currentBook) => !(currentBook.title === book.title && currentBook.author === book.author));
      localStorage.setItem('books', JSON.stringify(books));
    }
  }