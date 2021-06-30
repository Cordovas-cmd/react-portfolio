
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
// import Particles from "react-tsparticles";
import Navbar from './components/Navbar';
import Header from './components/Header';
function App() {
  return (
    <>
    <Particles
    classname="particles-canvas"
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
    <Navbar />
    <Header />
    </>
   
  );
}

export default App;
