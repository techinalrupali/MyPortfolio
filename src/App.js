import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar';
// import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Bot from './Components/Bot';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Resume from './Components/Resume';
import Hireme from './Components/Hireme';
function App() {
  return (
    <>

{/* <Router>
    <MyNavbar />
    <Bot/>
    <Routes>
       <Route path='/Home' element={<Home/>}/>}
      <Route path="#Home" element={<Home/>}/>
      <Route path="#About" element={<AboutUs/>}/>
      <Route path="#Skills" element={<Skills/>}/>
      <Route path="#Projects" element={<Projects/>}/>
      <Route path="#Contact" element={<Contact/>}/>
 
    </Routes>
    <Footer/>
   </Router>
  */}
         <MyNavbar/>
         <Bot/>
         <Home/>
         <AboutUs/>
         <Skills/>
         <Resume/>
         <Hireme/>
         <Projects/>
         <Contact/>
         <Footer/>

    </>
  );
}

export default App;
