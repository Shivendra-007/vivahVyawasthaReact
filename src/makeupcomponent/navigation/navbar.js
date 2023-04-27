import './navbar.css'

function Navbar() {
    return <div className="container mainDiv ">
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="./img/logo.jpg" height={"55px"} width={"300px"}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navLink" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link link"  href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#">VENUE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#">SERVICE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#">SIGNIN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#">SIGNUP</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}


export default Navbar;