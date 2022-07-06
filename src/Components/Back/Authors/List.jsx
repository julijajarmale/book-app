
import { useContext } from "react";
import BackContext from "../BackContext";
import Author from "./Author";



function List() {

    const {authors} = useContext(BackContext);


    return (

        <section className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
         <h2>List of Authors</h2>
                <ul className="list-group">
                    {
                   authors? authors.map(author => <Author key={author.id} author={author}></Author>) : null
                    }
                </ul>
            
          </div>
        </div>
      </section>
  



       
    );
}

export default List;