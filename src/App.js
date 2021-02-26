import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation/NavTabs";
//import Navigation from './components/Navigation/NavbarContainer';
import About from "./components/Navigation/pages/About";
import Contact from "./components/Navigation/pages/Contact";
//import Project from "./components/Project/index";
//import Resume from "./components/Resume/index";
//import Footer from "./components/Footer/index";
//import portfolioData from './portfolioData';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [tabs] = useState(["About Me", "Portfolio", "Contact", "Resume"]);

  const [currentPage, handlePageChange] = useState(tabs[0]);
  return (
    <div className='container'>
      <Header> 
        <Navigation
          tabs={tabs}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Header> 
      <Button variant="primary">Download Resume</Button>
      <About></About> 

      <Contact></Contact>
    </div>
  );
}

export default App;
