import { useContext } from "react";
import FrontContext from "../FrontContext";
import Author from "./Author";

function List() {
  const { authors } = useContext(FrontContext);

  return (
    
        <div className="col-12 col-md-12 col-lg-4 ">
          <h2>List of Authors</h2>
          <div className="list-form">
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
     
  );
}

export default List;
