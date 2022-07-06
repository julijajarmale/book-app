import { useEffect, useState } from 'react';
import AuthorsCrud from './Authors/Crud';
import BackContext from './BackContext';
import BooksCrud from './Books/Crud';
import Nav from './Nav';
import axios from 'axios';
//import { v4 as uuidv4 } from 'uuid'


function Back({show}) {


    const [createAuthor, setCreateAuthor] = useState(null)

//CREATE

// Create
useEffect(() => {
    if (null === createAuthor) return;
    axios.post('http://localhost:3003/admin/authors', createAuthor)
    
}, [createAuthor]);

    return (
        <BackContext.Provider value={{
            setCreateAuthor
           
        }}>
              {
                show === 'admin' ?
                    <>
                    <header>
                    <Nav/>
                    </header>
                   
                        
                    <h1>BACK</h1>
                    </>
                    : show === 'authors' ? <AuthorsCrud/>: 
                        show === 'books' ? <BooksCrud/> : null
            }
        </BackContext.Provider>
    )
}
export default Back;