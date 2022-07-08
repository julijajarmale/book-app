import { useContext, useRef } from "react";
import { useState } from "react";
import getBase64 from "../../../Functions/getBase64";
import setDateFormat from "../../../Functions/setDateFormat";
import BackContext from "../BackContext";

function Create() {
  const { authors, setCreateBook } = useContext(BackContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(false);
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const fileInput = useRef();

    const [bookCover, setBookCover] = useState(null);
//

const doPhoto = () => {
  getBase64(fileInput.current.files[0])
  .then(photo => setBookCover(photo))
  .catch(_ => {
      // tylim
  })
}
  const handleCreate = () => {
    const data = { 
      title,
      price: parseFloat(price),
      inStock: inStock ? 1 : 0, 
      author: parseInt(author),
      date: date,
      photo: bookCover
     };
    setCreateBook(data);
    setTitle("");
    setPrice("");
    setInStock(false);
    setAuthor('0');
    setDate(setDateFormat);
    setBookCover(null);
    fileInput.current.value = null;
  };

  return (
    <div className="container author-container">
      <div className="row">
        <div className="col-5">
          <form className="form">
            <h2>Add new Book</h2>
            <div className="form-row">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Books Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                placeholder="Enter Book Price"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
      
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
            <div className="form-row">
            <label className="form-check-label" htmlFor="in--stock">In stock</label>
                    <input type="checkbox" className="form-check-input" id="in--stock" checked={inStock} onChange={() => setInStock(i => !i)} />
                    
                </div>

                <div className="form-row">
                    <label>Select Book Author</label>
                    <select className="form-control" onChange={e => setAuthor(e.target.value)} value={author}>
                        
                        {
                            authors ? authors.map(author => <option key={author.id} value={author.id}>{author.name} {author.surname}</option>) : null
                        }
                    </select>
                
                </div>
                <div className="form-row">
                    <label>Photo</label>
                    <input ref={fileInput} type="file" className="form-control" onChange={doPhoto}/>
                    <small className="form-text text-muted">Upload Photo.</small>
                </div>
                {
                    bookCover ? <div className="photo-bin"><img src={bookCover} alt="nice"/></div> : null
                }
            <button
              type="button"
              className="btn"
              onClick={handleCreate}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
