import {Link} from "react-router-dom";
import "../App.css"
function Header() {
    return (
        <>
            <h1> Home page for Singers </h1>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.Sr4fxChDzgG6T-SG4zCS8wHaHa&pid=Api&P=0&w=300&h=300" alt="Avatar Logo" style={{width:"40px"}} className="rounded-pill" />
                </div>
            </nav>
            <div className="col-sm-8">
                <h2>TITLE HEADING</h2>
                <h5>Title description, Dec 7, 2020</h5>
                <div className="fakeimg">Fake Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco.</p>
            </div>
            <h4>You can go to the bellow link and see all singers names</h4>
            
            <Link className="navbar-brand btn btn-warning link-1" to="/Singers">Singers</Link>

            <div className="progress">
                <div className="progress-bar" style={{
                    width:"80%",
                }}>Armenian</div>
            </div>

            <div className="progress">
                <div className="progress-bar bg-success" style={{
                    width:"40%"
                }}>Spanish</div>
            </div>

            <div className="progress">
                <div className="progress-bar bg-info" style={{
                    width:"30%"
                }}>Russian</div>
            </div>

            <div className="progress">
                <div className="progress-bar bg-warning" style={{
                    width:"40%"
                }}>English</div>
            </div>

            <div className="progress">
                <div className="progress-bar bg-danger" style={{
                    width:"60%"
                }}>Mexico</div>
            </div>

        </>
    )
};


export default Header;