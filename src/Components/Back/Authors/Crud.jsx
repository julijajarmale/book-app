import Nav from "../Nav";
import Create from "./Create";
import Edit from "./Edit";
import List from "./List";


function AuthorsCrud() {
  return (
    <>
   
        <Nav />
        <Create/>
        <List />
        <Edit></Edit>
    </>
  );
}
export default AuthorsCrud;
