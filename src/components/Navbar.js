import React from 'react'

// Font awesome---------------------------------

// import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container-fluid">

            <a className="navbar-brand" href="#">Samuel Cordova</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">about.me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#contact">contact</a>
                    </li>
                    </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
