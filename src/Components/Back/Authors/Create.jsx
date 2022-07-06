import { useContext } from "react";
import { useState } from "react";
import BackContext from "../BackContext";

function Create() {

    const { setCreateAuthor } = useContext(BackContext);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    

    const handleCreate = () => {
        const data = {name, surname};
        setCreateAuthor(data);
        setName('');
        setSurname('');
        
    }

    return (

        <section className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h4 className="section-title">Create Author</h4>
           
            <div className="form-group">
                    <label>Authors Name</label>
                    <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name} />
                    <small className="form-text text-muted">Enter name here</small>
                    <label>Authors Surname</label>
                    <input type="text" className="form-control" onChange={e => setSurname(e.target.value)} value={surname} />
                    <small className="form-text text-muted">Enter surname here</small>
                </div>
            
                <button type="button" className="btn btn-outline-primary" onClick={handleCreate}>Create
                </button>
  
          </div>
        </div>
      </section>
  



       
    );
}

export default Create;