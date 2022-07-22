
import StarRating from "./StarRating";

function Book({ book }) {



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
        
        
        <span className="item">
          {book.in_stock ? (
            <div className="instock">In Stock!</div>
          ) : (
            <div className="outofstock">Out of stock</div>
          )}
        </span>
        <span className="star-item">
         <StarRating/>
        </span>
      </div>

    
    </li>
  );
}

export default Book;
