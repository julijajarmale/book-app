import { Link, NavLink } from "react-router-dom";

function Nav() {

    return (
        <>
            <div className="container header">
                <div className="row">
                    <div className="col-12">
                        <nav className="nav">
                            <NavLink to="/admin/" className="nav-link" style={
                                ({ isActive }) =>
                                    isActive ? {
                                        color: 'crimson'
                                    } : null
                            }>Admin</NavLink>
                            <NavLink to="/admin/authors" className="nav-link" style={
                                ({ isActive }) =>
                                    isActive ? {
                                        color: 'crimson'
                                    } : null
                            }>Authors</NavLink>
                            <NavLink to="/admin/books" className="nav-link" style={
                                ({ isActive }) =>
                                    isActive ? {
                                        color: 'crimson'
                                    } : null
                            }>Books</NavLink>
                            <NavLink to="/" className="nav-link" style={
                                ({ isActive }) =>
                                    isActive ? {
                                        color: 'crimson'
                                    } : null
                            }>Main Page</NavLink>
                              <Link to="/logout">Logout</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;