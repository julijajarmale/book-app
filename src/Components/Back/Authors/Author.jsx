
import { useContext } from "react";
import BackContext from "../BackContext";

function Author({author}) {

    const {setDeleteAuthor, setModalAuthor} = useContext(BackContext);

    const handleDelete = () => {
      setDeleteAuthor(author)
    }

    const handleEdit =() => {
      setModalAuthor(author)
    }

    return (

        <section className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
          <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>{author.name}</b>
                    <i>{author.surname}</i>
                </div>
                <div className="buttons">
                    <button type="button" className="btn" onClick={handleEdit}>Edit</button>
                    <button type="button" className="btn" onClick={handleDelete}>Delete</button>
                </div>
            </div>
            </li>
          </div>
        </div>
      </section>
  



       
    );
}

export default Author;