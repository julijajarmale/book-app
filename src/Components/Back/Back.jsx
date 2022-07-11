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

    const [books, setBooks] = useState(null)
    const [createBook, setCreateBook] = useState(null)
    const [deleteBook, setDeleteBook] = useState(null)
    const [editBook, setEditBook] = useState(null)
    const [modalBook, setModalBook] = useState(null)


    

//READ AUTHOR 
  useEffect(() => {
    axios.get('http://localhost:3003/admin/authors')
        .then(res => setAuthors(res.data));
}, [lastUpdate]);

//READ BOOKS 
useEffect(() => {
    axios.get('http://localhost:3003/admin/books')
        .then(res => setBooks(res.data));
}, [lastUpdate]);

//CREATE AUTHOR

useEffect(() => {
    if (null === createAuthor) return;
    axios.post('http://localhost:3003/admin/authors', createAuthor)
    .then(res => {
        setLastUpdate(Date.now());
    })
    
}, [createAuthor]);


//CREATE BOOKS

useEffect(() => {
    if (null === createBook) return;
    axios.post('http://localhost:3003/admin/books', createBook)
    .then(res => {
        setLastUpdate(Date.now());
    })
    
}, [createBook]);


//DELETE AUTHOR

useEffect(() => {
    if (null === deleteAuthor) return;
    axios.delete('http://localhost:3003/admin/authors/' + deleteAuthor.id)
        .then(res => {
            setLastUpdate(Date.now());
        })
    
}, [deleteAuthor]);

//DELETE BOOKS
useEffect(() => {
    if (null === deleteBook) return;
    axios.delete('http://localhost:3003/admin/books/' + deleteBook.id)
        .then(res => {
            setLastUpdate(Date.now());
        })
    
}, [deleteBook]);

// EDIT AUTHOR
    useEffect(() => {
        if (null === editAuthor) return;
        axios.put('http://localhost:3003/admin/authors/' + editAuthor.id, editAuthor)
            .then(res => {
                setLastUpdate(Date.now());
            })
           
    }, [editAuthor]);

    // EDIT BOOK
    useEffect(() => {
        console.log(editBook)
        if (null === editBook) return;
        axios.put('http://localhost:3003/admin/books/' + editBook.id, editBook)
            .then(res => {
                setLastUpdate(Date.now());
            })
           
    }, [editBook]);


    return (
        <BackContext.Provider value={{
            setCreateAuthor, 
            authors,
            setDeleteAuthor,
            setEditAuthor,
            modalAuthor,
            setModalAuthor,
            setCreateBook,
            books,
            setDeleteBook,
            setEditBook,
            setModalBook,
            modalBook

           
        }}>
              {
                show === 'admin' ?
                    <>
                    
                    <Nav/>
            
                    </>
                    : show === 'authors' ? <AuthorsCrud/>: 
                        show === 'books' ? <BooksCrud/> : null
            }
        </BackContext.Provider>
    )
}
export default Back;