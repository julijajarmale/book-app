import { useContext } from "react";
import FrontContext from "../FrontContext";
import Author from "./Author";

function List() {
  const { authors } = useContext(FrontContext);

  return (
    
        <div className="col-4 list-form">
          <h2>List of Authors</h2>
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
     
  );
}

export default List;
