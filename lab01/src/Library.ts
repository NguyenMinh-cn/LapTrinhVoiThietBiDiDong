// 15. Create a Library class that can store Book and User objects. Add method to add books

import { Book } from './Book';

class Library {
    books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.title} của ${book.author}`);
    }

    listBooks(): void {
        console.log('Danh sách sách trong thư viện:');
        console.log(
            this.books
                .map((b, i) => `${i + 1}. ${b.title} - ${b.author}`)
                .join('\n')
        );
    }
}

const lib = new Library();

lib.addBook(new Book('Tutorial TypeScript', 'Matta', 2008));
lib.addBook(new Book('TypeScript Cơ Bản', 'Trần Văn B', 2008));

lib.listBooks();
