"use strict";
// 15. Create a Library class that can store Book and User objects. Add method to add books
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.title} của ${book.author}`);
    }
    listBooks() {
        console.log('Danh sách sách trong thư viện:');
        console.log(this.books
            .map((b, i) => `${i + 1}. ${b.title} - ${b.author}`)
            .join('\n'));
    }
}
const lib = new Library();
lib.addBook(new Book_1.Book('Tutorial TypeScript', 'Matta', 2008));
lib.addBook(new Book_1.Book('TypeScript Cơ Bản', 'Trần Văn B', 2008));
lib.listBooks();
