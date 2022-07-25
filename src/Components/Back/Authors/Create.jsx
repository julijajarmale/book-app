import { useContext, useRef } from "react";
import { useState } from "react";
import getBase64 from "../../../Functions/getBase64";
import BackContext from "../BackContext";
import AuthorLogo from "./AuthorImage";

function Create() {
  const { setCreateAuthor } = useContext(BackContext);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const fileInput = useRef();
  const [authorPicture, setAuthorPicture] = useState(null);

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
    .then(picture => setAuthorPicture(picture))
    .catch(_ => {
        // tylim
    })
  }
  const handleCreate = () => {
    const data = { 
      name, 
      surname,
      picture: authorPicture
     };
    setCreateAuthor(data);
    setName("");
    setSurname("");
    setAuthorPicture(null);
  };

  return (
    <div className="container author-container">
      <div className="row">
        <div className="col-4 ml-1">
          <form className="form">
            <h2>Add new Author</h2>
            <div className="form-row">
              <input
                type="text"
                className="input"
                placeholder="Enter Authors Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                placeholder="Enter Authors Surname"
                className="input"
                onChange={(e) => setSurname(e.target.value)}
                value={surname}
              />
      
            </div>
            <div className="form-row">
                    <label>Upload Authors Profile Picture</label>
                    <input ref={fileInput} type="file" className="input" onChange={doPhoto}/>
                </div>
                {
                    authorPicture ? <div className="photo-bin"><img src={authorPicture} alt="nice"/></div> : null
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
        <div className="col-6 ml-1">
<AuthorLogo/>
        </div>
      </div>
    </div>
  );
}

export default Create;
