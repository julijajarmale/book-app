import { useRef } from "react";
import { useEffect, useState, useContext } from "react";
import getBase64 from "../../../Functions/getBase64";
import setDateFormat from "../../../Functions/setDateFormat";
import BackContext from "../BackContext";

function Edit() {
  const { authors, modalBook, setEditBook, setModalBook } =
    useContext(BackContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(false);
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const fileInput = useRef();
  const [bookCover, setBookCover] = useState(null);

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
      .then((photo) => setBookCover(photo))
      .catch((_) => {
        // tylim
      });
  };

  useEffect(() => {
    if (null === modalBook) {
      return;
    }

    setTitle(modalBook.title);
    setPrice(modalBook.price);
    setInStock(modalBook.in_stock ? true : false);
    setAuthor(authors.filter((a) => a.title === modalBook.author)[0].id);
    setDate(setDateFormat(modalBook.date));
    setBookCover(modalBook.photo);
  }, [modalBook, authors]);

  const handleEdit = () => {
    console.log("suveike");
    console.log(modalBook.date);
    console.log(date);

    const data = {
      title,
      id: modalBook.id,
      in_stock: inStock ? 1 : 0,
      price: parseFloat(price),
      author: parseInt(author),
      date: date,
      photo: bookCover,
    };

    setEditBook(data);
    setModalBook(null);
  };

  if (null === modalBook) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-header">
        <h2 className="modal-title">Edit Book Information</h2>
        <button
          type="button"
          className="close"
          onClick={() => setModalBook(null)}
        ></button>
      </div>
      <div className="form modal-body">
        <div className="form-row">
          <label>Update Book Title</label>
          <input
            type="text"
            className="input"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="form-row">
          <label>Update Book Price</label>
          <input
            type="text"
            className="input"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="form-row form-check">
          <label>In Stock?</label>
          <input
            type="checkbox"
            className="form-check-input"
            id="in--stock--modal"
            checked={inStock}
            onChange={() => setInStock((i) => !i)}
          />
         
          
        </div>
        <div className="form-row">
          <label>Select Author</label>
          <select
            className="form-control"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          >
            <option value="0">Please, select your Cat</option>
            {authors
              ? authors.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.name} {a.surname}
                  </option>
                ))
              : null}
          </select>
        
        </div>
        <div className="form-row">
          <input
            type="datetime-local"
            placeholder="Update Publish Date"
            className="input"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
      </div>
      <div className="form-row">
        <label>Update Book cover</label>
        <input
          ref={fileInput}
          type="file"
          className="input"
          onChange={doPhoto}
        />
        <small className="form-text text-muted">Upload Photo.</small>
      </div>
      <div>
        {bookCover ? (
          <div className="book-cover">
            <img src={bookCover} alt="nice" />
          </div>
        ) : null}
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn2"
          onClick={() => setModalBook(null)}
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn3"
          onClick={handleEdit}
        >
          Save changes
        </button>
      </div>
    </div>
  );
}

export default Edit;
