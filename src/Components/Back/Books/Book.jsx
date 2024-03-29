import { useContext } from "react";
import BackContext from "../BackContext";
import StarRating from "./StarRating";

function Book({ book }) {
  const { setDeleteBook, setModalBook } = useContext(BackContext);

  const handleDelete = () => {
    setDeleteBook(book);
  };

  const handleEdit = () => {
    setModalBook(book);
  };

  return (
    <li className="book-list-item">
      <div className="content">
        <div className="book-item">
          {book.photo ? (
            <div className="book-cover">
              <img src={book.photo} alt={book.title} />
            </div>
          ) : null}
        </div>
        <b className="book-item">{book.title}</b>
        <span className="book-item">
          {book.authorname} {book.authorsurname}
        </span>
        <span className="book-item">{book.price.toFixed(2)} € </span>
        <span className="book-description">{book.description}</span>
        <span className="book-item">
          Publish date: {new Date(Date.parse(book.date)).toLocaleString()}
        </span>
        <span className="item">
          {book.in_stock ? (
            <div className="instock">In Stock!</div>
          ) : (
            <div className="outofstock">Out of stock</div>
          )}
        </span>
        <span className="item">
          <StarRating />
        </span>
      </div>

      <div className="buttons">
        <button type="button" className="buttons btn2" onClick={handleEdit}>
          Edit
        </button>
        <button type="button" className="buttons btn3" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default Book;
