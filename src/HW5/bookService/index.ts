import { IAuthor, IBook } from './types';

export class Book implements IBook {
  get bestSeller(): boolean {
    return this.isBestSeller;
  }

  get book(): string {
    return this.bookName;
  }

  get bookYear(): number {
    return this.yearOfPublication;
  }

  get author(): IAuthor {
    return this._author;
  }

  get authorName(): string {
    return this._author.fullName;
  }

  set bookYear(year: number) {
    this.yearOfPublication = year;
  }

  constructor(
    private bookName: string,
    private _author: IAuthor,
    private yearOfPublication: number,
    protected isBestSeller: boolean
  ) {}
}

export class Author implements IAuthor {
  public readonly writtenBooks: string[] = [];

  get fullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  get age(): string | number {
    if (this.deathYear) {
      return `Died in ${this.deathYear} at ${this.deathYear - this.birthYear} years old`;
    } else {
      return new Date().getFullYear() - this.birthYear;
    }
  }

  constructor(
    private name: string,
    private lastName: string,
    private birthYear: number,
    private deathYear?: number
  ) {}

  addWrittenBook(book: string): void {
    this.writtenBooks.push(book);
  }
}

export class BookService {
  private allBooks: IBook[];

  get books(): IBook[] {
    return this.allBooks;
  }

  constructor() {
    this.allBooks = [];
  }

  addBook(book: IBook): void {
    this.allBooks.push(book);
  }

  removeBook(searchedBook: string): void {
    this.allBooks = this.allBooks.filter(book => book.book !== searchedBook);
  }

  showAuthors(): string[] {
    return this.allBooks.map(book => book.authorName);
  }

  showAuthorBooks(author: string): string[] {
    const authorsBooks: IBook | undefined = this.allBooks.find(book => book.authorName === author);
    if (authorsBooks) {
      return authorsBooks.author.writtenBooks;
    }
    return [];
  }

  showBestSellers(): IBook[] {
    return this.allBooks.filter(book => book.bestSeller);
  }
}
