import React from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js';



const Header = () => {
    return (
        <>
        <Particles
    className="particles-canvas"
    params={{
      particles: {
        number: {
          value: 35,
          density: {
            enable: true,
            value_area: 900
          }
        },
        shape: {
          type: "star",
          stroke: {
            width: 10,
            color: "rgb(118, 41, 190)"
          }
        }
      }
    }} />
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
    <a href="#contact" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
        </>
    )
}

export default Header
