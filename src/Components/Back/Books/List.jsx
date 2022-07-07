import { useContext } from "react";
import BackContext from "../BackContext";
import Book from "./Book";


function List() {
  const { books } = useContext(BackContext);

  return (
    <div className="container list-container">
      <div className="row">
        <div className="col-12 list-form">
          <h2>List of Books</h2>
          <div className="list-group">
          <ul className="list-group-item">
            {books
              ? books.map((book) => (
                  <Book key={book.id} book={book}></Book>
                ))
              : null}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
