import {Link} from "react-router-dom";

function Header ( ) {
    return (
        <>
                <h1>Homepage</h1>
                <nav className="navbar navbar-expand-sm bg-light">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/students">Students</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/groups">Groups</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addGroup">add group</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addStudent">add student</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
        </>
    )
};

export default Header;