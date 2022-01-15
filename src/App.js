
import './css/App.css';
import Navbar from "./components/navbar.js"
import Home from './components/homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import CountryData from './components/countrydata';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';


function App() {
  return (
   <div className="App">
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CountryWise" element={<CountryData/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
