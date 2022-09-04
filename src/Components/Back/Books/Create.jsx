import { useContext, useRef } from "react";
import { useState } from "react";
import getBase64 from "../../../Functions/getBase64";
import setDateFormat from "../../../Functions/setDateFormat";
import BackContext from "../BackContext";
import BooksLogo from "./BooksImage";

function Create() {
  const { authors, setCreateBook } = useContext(BackContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(false);
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const fileInput = useRef();
  const [bookCover, setBookCover] = useState(null);
  const [description, setDescription] = useState(null);
  //

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
      .then((photo) => setBookCover(photo))
      .catch((_) => {
        // tylim
      });
  };
  const handleCreate = () => {
    const data = {
      title,
      price: parseFloat(price),
      inStock: inStock ? 1 : 0,
      author: parseInt(author),
      date: date,
      photo: bookCover,
      description,
    };
    setCreateBook(data);
    setTitle("");
    setPrice("");
    setInStock(false);
    setAuthor("0");
    setDate(setDateFormat);
    setBookCover(null);
    fileInput.current.value = null;
    setDescription("");
  };

  return (
    <div className="container books-container">
      <div className="row">
        <div className="col-4 ml-1">
          <form className="form">
            <h2>New Book in Town!</h2>
            <div className="form-row">
              <input
                type="text"
                className="input"
                placeholder="Enter Books Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="form-row">
              <label>Select Author</label>
              <select
                className="input"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
              >
                {authors
                  ? authors.map((author) => (
                      <option key={author.id} value={author.id}>
                        {author.name} {author.surname}
                      </option>
                    ))
                  : null}
              </select>
            </div>

            <div className="form-row">
              <input
                type="text"
                placeholder="Enter Price"
                className="input"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                placeholder="Enter Description"
                className="input"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>

            <div className="form-row">
              <label>Enter Publish Date</label>
              <input
                type="datetime-local"
                placeholder="Enter Publish Date"
                className="input"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </div>

            <div className="form-row">
              <label>Upload Cover Picture</label>
              <input
                ref={fileInput}
                type="file"
                className="input"
                onChange={doPhoto}
              />
            </div>
            {bookCover ? (
              <div className="photo-bin">
                <img src={bookCover} alt="nice" />
              </div>
            ) : null}
            <div className="form-row input-check">
              <label className="form-check-label" htmlFor="in--stock">
                In stock
              </label>
              <input
                type="checkbox"
                className="check"
                id="in--stock"
                checked={inStock}
                onChange={() => setInStock((i) => !i)}
              />
            </div>
            <button type="button" className="btn" onClick={handleCreate}>
              Create
            </button>
          </form>
        </div>
        <div className="col-6 ml-1 ">
          <BooksLogo />
        </div>
      </div>
    </div>
  );
}

export default Create;
