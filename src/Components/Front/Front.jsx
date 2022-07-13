import FrontContext from './FrontContext';
import FrontNav from './Nav';


function Front() {


    return (
        <FrontContext.Provider value={{
           
        }}>
           <FrontNav/>
        </FrontContext.Provider>
    )
}
export default Front;