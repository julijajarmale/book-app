import List from "./Authors/List";
import BooksList from "./Books/List";
import Nav from "./Nav";

function Admin() {
  return (
    <>
      <Nav />
      <List />
      <BooksList />
    </>
  );
}
export default Admin;
