import BookModel from "./BookModel";

class ShelfCurrentLoans{
  book: BookModel;
  daysleft: number;

  constructor(book: BookModel, daysLeft: number){
    this.book = book;
    this.daysleft = daysLeft;
  }
}

export default ShelfCurrentLoans;