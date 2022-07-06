import AuthorsCrud from './Authors/Crud';
import BackContext from './BackContext';
import BooksCrud from './Books/Crud';
import Nav from './Nav';


function Back({show}) {


    return (
        <BackContext.Provider value={{
           
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