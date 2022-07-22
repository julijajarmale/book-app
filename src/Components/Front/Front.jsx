
import axios from 'axios';
import { useEffect, useState } from 'react';
import { authConfig } from '../../Functions/auth';
import BooksSlider from './For You/BooksSlider';
import FrontContext from './FrontContext';
import FrontNav from './Nav';
import List from './Books/List';
import AuthorList from './Authors/AuthorList'


function Front() {

    const [books, setBooks] = useState(null);
    const [authors, setAuthors] = useState(null);


    useEffect(() => {
        axios.get('http://localhost:3003/books', authConfig())
            .then(res => setBooks(res.data));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3003/authors', authConfig())
            .then(res => setAuthors(res.data));
    }, []);


    return (
        <FrontContext.Provider value={{
           books,
           setBooks,
           authors
        }}>
           <FrontNav/>
           <div className="container">
                <div className="row">
           <BooksSlider/>
           </div>
           </div>
           <div className="container front-container">
                <div className="row">
           <List/>
           <AuthorList/>

                </div>
           </div>
          
        </FrontContext.Provider>
    )
}
export default Front;