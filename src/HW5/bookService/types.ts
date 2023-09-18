export interface IBookService {
  books: IBook[];
  addBook: (book: IBook) => void;
  removeBook: (searchedBook: string) => void;
  showAuthors: () => string[];
  showAuthorBooks: (author: string) => string[];
  showBestSellers: () => IBook[];
}

export interface IBook {
  book: string;
  bookYear: number;
  author: IAuthor;
  authorName: string;
  bestSeller: boolean;
}

export interface IAuthor {
  age: number | string;
  fullName: string;
  writtenBooks: string[];
  addWrittenBook: (book: string) => void;
}
