import {Link} from "react-router-dom";
function Header ( ){
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addMovie">Add Movie</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pictures">Pictures</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
};
export default Header;