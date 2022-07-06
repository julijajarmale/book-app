import './Layout.scss';
import './crud.scss';
import './App.scss';


import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Front from './Components/Front/Front';
import Back from './Components/Back/Back';

function App() {
  return (
    <BrowserRouter>
    <Routes> 
        <Route path="/" element={<Front/>} />
        <Route path="/admin" element={<Back show="admin"/>} /> 
        <Route path="/admin/authors" element={<Back show="authors"/>} />
        <Route path="/admin/books" element={<Back show="books"/>} />
    </Routes>
        
    </BrowserRouter>
)
}

export default App;