import { useEffect, useState } from 'react';
import AuthorsCrud from './Authors/Crud';
import BackContext from './BackContext';
import BooksCrud from './Books/Crud';
import Nav from './Nav';
import axios from 'axios';

//import { v4 as uuidv4 } from 'uuid'


function Back({show}) {
    const [lastUpdate, setLastUpdate] = useState(Date.now());
    
    const [authors, setAuthors] = useState(null)
    const [createAuthor, setCreateAuthor] = useState(null)
    const [deleteAuthor, setDeleteAuthor] = useState(null)
    const [editAuthor, setEditAuthor] = useState(null)
    const [modalAuthor, setModalAuthor] = useState(null)


    

//READ AUTHOR 
  useEffect(() => {
    axios.get('http://localhost:3003/admin/authors')
        .then(res => setAuthors(res.data));
}, [lastUpdate]);


//CREATE AUTHOR

useEffect(() => {
    if (null === createAuthor) return;
    axios.post('http://localhost:3003/admin/authors', createAuthor)
    .then(res => {
        setLastUpdate(Date.now());
    })
    
}, [createAuthor]);


//DELETE AUTHOR

useEffect(() => {
    if (null === deleteAuthor) return;
    axios.delete('http://localhost:3003/admin/authors/' + deleteAuthor.id)
        .then(res => {
            setLastUpdate(Date.now());
        })
    
}, [deleteAuthor]);

// EDIT AUTHOR
    useEffect(() => {
        if (null === editAuthor) return;
        axios.put('http://localhost:3003/admin/authors/' + editAuthor.id, editAuthor)
            .then(res => {
                setLastUpdate(Date.now());
            })
           
    }, [editAuthor]);


    return (
        <BackContext.Provider value={{
            setCreateAuthor, 
            authors,
            setDeleteAuthor,
            setEditAuthor,
            modalAuthor,
            setModalAuthor
           
        }}>
              {
                show === 'admin' ?
                    <>
                    
                    <Nav/>
            
                    <h1>BACK</h1>
                    </>
                    : show === 'authors' ? <AuthorsCrud/>: 
                        show === 'books' ? <BooksCrud/> : null
            }
        </BackContext.Provider>
    )
}
export default Back;