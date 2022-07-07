import { useContext } from "react";
import { useState } from "react";
import BackContext from "../BackContext";

function Create() {
  const { authors, setCreateBooks } = useContext(BackContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(false);
  const [author, setAuthor] = useState("");
  
//
  const handleCreate = () => {
    const data = { 
      title,
      price: parseFloat(price),
      inStock: inStock ? 1 : 0, 
      author: parseInt(author),
     };
    setCreateBooks(data);
    setTitle("");
    setPrice("");
    setInStock(false);
    setAuthor('0');
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
