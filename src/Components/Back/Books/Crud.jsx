import Nav from "../Nav";
import Create from "./Create";
import Edit from "./Edit";
import BooksList from "./List";

function BooksCrud() {
  return (
    <>
      <Nav />
      <Create />
      <BooksList />
      <Edit />
    </>
  );
}
export default BooksCrud;
