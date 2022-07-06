import { useContext } from "react";
import { useState } from "react";
import BackContext from "../BackContext";

function Create() {
  const { setCreateAuthor } = useContext(BackContext);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleCreate = () => {
    const data = { name, surname };
    setCreateAuthor(data);
    setName("");
    setSurname("");
  };

  return (
    <div className="container author-container">
      <div className="row">
        <div className="col-5">
          <form className="form">
            <h2>Add new Author</h2>
            <div className="form-row">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Authors Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                placeholder="Enter Authors Surname"
                className="form-control"
                onChange={(e) => setSurname(e.target.value)}
                value={surname}
              />
      
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
