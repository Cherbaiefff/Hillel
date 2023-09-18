import { Author, Book, BookService } from './bookService';

export const runHW5 = (): void => {
  const carnegie = new Author('Daniel', 'Carnegie', 1888, 1955);
  carnegie.addWrittenBook('How to win friends and influence people');
  carnegie.addWrittenBook('How to stop worrying and start living');

  const book1 = new Book(carnegie.writtenBooks[0], carnegie, 1936, true);
  // console.log(book1.book);
  // console.log(book1.bookYear);
  // console.log(book1);
  const bookService = new BookService();
  bookService.addBook(book1);
  // console.log(bookService.showAuthors());
  // console.log(bookService.showAuthorBooks('Daniel Carnegie'));
  console.log(bookService.showBestSellers());
};
