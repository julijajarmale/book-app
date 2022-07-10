
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

          <li className="list-item">
            
                <div className="content">
                    <span className="item">{author.name}</span>
                    <span className="item">{author.surname}</span>
                </div>
                <div className="item author-pic">
                {
                        author.picture ? <div className="photo-bin"><img src={author.picture} alt={author.name} /></div> : null
                    }
                    </div>
                <div className="buttons">
                    <button type="button" className="buttons btn2" onClick={handleEdit}>Edit</button>
                    <button type="button" className="buttons btn3" onClick={handleDelete}>Delete</button>
                </div>
            
            </li>
        

    );
}

export default Author;