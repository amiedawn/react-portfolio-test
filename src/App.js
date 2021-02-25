import React from "react";
import Header from "./components/Header/index";
//import Navigation from "./components/Navigation/Navbar";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
//import Project from "./components/Project/index";
//import Resume from "./components/Resume/index";
//import Footer from "./components/Footer/index";
//import portfolioData from './portfolioData';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="container">
      <Header>
        {/* <Navigation></Navigation> */}
      </Header>
      <Button variant='primary'>Bootstrap Button</Button>
      <About></About>

      <Contact></Contact>

    </div>
  );
 
}

export default App;
