"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
exports.Book = Book;
const book1 = new Book('Tutorial TypeScript', 'Matta', 2008);
console.log('Book:', book1.title, book1.author, book1.year);
