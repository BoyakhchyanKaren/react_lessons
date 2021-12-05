import {Link, Outlet} from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/status">Link to Status</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/comment">Link to Comment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addStatus">Link to addStatus</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </>
    )
};
export default Header;