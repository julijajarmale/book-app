import { useEffect, useState, useContext, useRef } from "react";
import getBase64 from "../../../Functions/getBase64";
import BackContext from "../BackContext";

function Edit() {
  const { modalAuthor, setEditAuthor, setModalAuthor } =
    useContext(BackContext);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const fileInput = useRef();
  const [authorPicture, setAuthorPicture] = useState(null);

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
      .then((photo) => setAuthorPicture(photo))
      .catch((_) => {
        // tylim
      });
  };

  useEffect(() => {
    if (null === modalAuthor) {
      return;
    }

    setName(modalAuthor.name);
    setSurname(modalAuthor.surname);
    setAuthorPicture(modalAuthor.picture);
  }, [modalAuthor]);

  const handleEdit = () => {
    console.log("suveike");
    const data = {
      name,
      surname,
      picture: authorPicture,
      id: modalAuthor.id,
    };

    setEditAuthor(data);
    setModalAuthor(null);
  };

  if (null === modalAuthor) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-header">
        <h2 className="modal-title">Edit Authors Information</h2>
        <button
          type="button"
          className="close"
          onClick={() => setModalAuthor(null)}
        ></button>
      </div>
      <div className="modal-body">
        <div className="form-row">
          <label>Update Name</label>
          <input
            type="text"
            className="form-row"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-row">
          <label>Update Surname</label>
          <input
            type="text"
            className="form-row"
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
          />
        </div>
        <div className="form-row">
          <label>Add new Photo</label>
          <input
            ref={fileInput}
            type="file"
            className="form-control"
            onChange={doPhoto}
          />
        </div>
        <div>
          {authorPicture ? (
            <div className="book-cover">
              <img src={authorPicture} alt="nice" />
            </div>
          ) : null}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn2"
            onClick={() => setModalAuthor(null)}
          >
            Close
          </button>
          <button type="button" className="btn btn3" onClick={handleEdit}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
