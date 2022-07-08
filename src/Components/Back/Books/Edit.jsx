import { useEffect, useState, useContext } from "react";
import setDateFormat from "../../../Functions/setDateFormat";
import BackContext from "../BackContext";

function Edit() {
  const { authors, modalBook, setEditBook, setModalBook } = useContext(BackContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(false);
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (null === modalBook) {
      return;
    }

    setTitle(modalBook.title);
    setPrice(modalBook.price);
    setInStock(modalBook.in_stock ? true : false);
    setAuthor(authors.filter(a => a.title === modalBook.author)[0].id);
    setDate(setDateFormat(modalBook.date) === setDateFormat(Date))
  

  }, [modalBook, authors]);

  const handleEdit = () => {
    console.log("suveike");
    console.log(modalBook.date)
    console.log(date)
    
    const data = {
            title,
            id: modalBook.id,
            in_stock: inStock ? 1 : 0,
            price: parseFloat(price),
            author: parseInt(author),
            date: date
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
            <h5 className="modal-title">Edit Author</h5>
            <button
              type="button"
              className="close"
              onClick={() => setModalBook(null)}
            >
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <small className="form-text text-muted">
                Enter Book title here.
              </small>
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              <small className="form-text text-muted">
                Enter Book price here.
              </small>
            </div>
            <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="in--stock--modal" checked={inStock} onChange={() => setInStock(i => !i)} />
                            <label className="form-check-label" htmlFor="in--stock--modal">Check me out</label>
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <select className="form-control" onChange={e => setAuthor(e.target.value)} value={author}>
                                <option value="0">Please, select your Cat</option>
                                {
                                    authors ? authors.map(a => <option key={a.id} value={a.id}>{a.name} {a.surname}</option>) : null
                                }
                            </select>
                            <small className="form-text text-muted">Select author here.</small>
                        </div>
<div className="form-row">
              <input
                type="datetime-local"
                placeholder="Enter Publish Date"
                className="form-control"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
      </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setModalBook(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleEdit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
    
  );
}

export default Edit;