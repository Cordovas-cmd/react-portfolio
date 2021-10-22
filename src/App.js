
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Particles from "react-tsparticles";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Skills from './components/Skills/Skills'
function App() {
  return (
    <>
    
    <Navbar />
    <Header />
    <Projects />
    <Skills />
    <Contact />
    </>
   
  );
}

export default App;
