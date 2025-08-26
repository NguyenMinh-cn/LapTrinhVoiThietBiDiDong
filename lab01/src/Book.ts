export class Book {
    public title: string;
    public author: string;
    public year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

const book1 = new Book('Tutorial TypeScript', 'Matta', 2008);
console.log('Book:', book1.title, book1.author, book1.year);
