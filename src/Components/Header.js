import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/students">Link 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">Link 2</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
};

export default  Header;