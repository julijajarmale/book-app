import { useContext } from "react";
import FrontContext from "../FrontContext";
import Book from "./Book";


function BooksList() {
  const { books } = useContext(FrontContext);

  return (
   
        <div className="col-8">
          <h2>List of Books</h2>
          <div className="book-list-group">
          <ul className="book-list">
            {books
              ? books.map((book) => (
                  <Book key={book.id} book={book}></Book>
                ))
              : null}
          </ul>
          </div>
        </div>
     
  );
}

export default BooksList;
