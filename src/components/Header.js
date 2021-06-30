import React from 'react';
import Typed from 'react-typed';
const Header = () => {
    return (
        <div className= "header-wrapper">
            <div className= "main-info">
    <h1>web developement and website promotions</h1>
    <Typed
    className= "typed-text"
    strings={["Web design", "Web Development", "Fullstack", "I'm A Web Wizard!!"]}
    typeSpeed={40}
    backSpeed={40}
    loop
    />
    <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
