import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Header/Navigation/NavTabs";
import About from "./components/Header/Navigation/pages/About";
import Contact from "./components/Header/Navigation/pages/Contact";
//import Project from "./components/Project/index";
//import Resume from "./components/Resume/index";
//import Footer from "./components/Footer/index";
//import portfolioData from './portfolioData';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [currentPage, handlePageChange] = useState("About");
  return (
    <div className="container">
      <Header>
        <Navigation
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
