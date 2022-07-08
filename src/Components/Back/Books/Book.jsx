
import { useContext } from "react";
import BackContext from "../BackContext";

function Author({book}) {

    const {setDeleteBook, setModalBook} = useContext(BackContext);

    const handleDelete = () => {
      setDeleteBook(book)
    }

    const handleEdit =() => {
      setModalBook(book)
    }

    return (

          <li className="list-item">
            
                <div className="content">
                    <span className="item">{book.title}</span>
                    <span className="item">{book.price}</span>
                    <span className="item">{book.price.toFixed(2)}</span>
                    <span className="item">{book.authorname} {book.authorsurname}</span>
                    <span className="item">{new Date(Date.parse(book.date)).toLocaleString()}</span>
                </div>
                <div className="buttons">
                    <button type="button" className="buttons btn2" onClick={handleEdit}>Edit</button>
                    <button type="button" className="buttons btn3" onClick={handleDelete}>Delete</button>
                </div>
            
            </li>
        

    );
}

export default Author;