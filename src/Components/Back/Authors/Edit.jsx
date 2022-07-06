import { useEffect, useState, useContext } from "react";
import BackContext from "../BackContext";

function Edit() {
  const { modalAuthor, setEditAuthor, setModalAuthor } = useContext(BackContext);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  useEffect(() => {
    if (null === modalAuthor) {
      return;
    }

    setName(modalAuthor.name);
    setSurname(modalAuthor.surname);

  }, [modalAuthor]);

  const handleEdit = () => {
    console.log("suveike");
    const data = { name, surname, id: modalAuthor.id };
  
    setEditAuthor(data);
    setModalAuthor(null);
  };

  if (null === modalAuthor) {
    return null;
  }

  return (
    <div className="modal">
      
          <div className="modal-header">
            <h5 className="modal-title">Edit Author</h5>
            <button
              type="button"
              className="close"
              onClick={() => setModalAuthor(null)}
            >
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <small className="form-text text-muted">
                Enter  authors name here.
              </small>
            </div>
            <div className="form-group">
              <label>Surname</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setSurname(e.target.value)}
                value={surname}
              />
              <small className="form-text text-muted">
                Enter Authors surname here.
              </small>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setModalAuthor(null)}
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