import { useContext } from "react";
import BackContext from "../BackContext";
import Author from "./Author";

function List() {
  const { authors } = useContext(BackContext);

  return (
    <div className="container list-container">
      <div className="row">
        <div className="col-12 list-form">
          <h2>Authors</h2>
          <div className="list-group">
          <ul className="list-group-item">
            {authors
              ? authors.map((author) => (
                  <Author key={author.id} author={author}></Author>
                ))
              : null}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
