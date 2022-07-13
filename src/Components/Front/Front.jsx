
import BooksSlider from './BooksSlider';
import FrontContext from './FrontContext';
import FrontNav from './Nav';


function Front() {


    return (
        <FrontContext.Provider value={{
           
        }}>
           <FrontNav/>
           <BooksSlider/>
          
        </FrontContext.Provider>
    )
}
export default Front;