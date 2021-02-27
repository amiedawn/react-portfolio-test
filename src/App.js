import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation/NavTabs";
import About from "./components/Navigation/pages/About";
import Contact from "./components/Navigation/pages/Contact";
import ProjectCard from "./components/Navigation/pages/Project/ProjectCard/ProjectCard";
import Wrapper from "./components/Navigation/pages/Project/Wrapper/Wrapper";
//import Images from "./components/Navigation/pages/Wrapper/Wrapper";
import projects from "./projects.json";
import Resume from "./components/Navigation/pages/Resume";
import Footer from "./components/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { images } from './components/imagesAndIcons.js';

function App() {
  // define the nav tabs
  const tabs = ["About Me", "Portfolio", "Contact", "Resume"];
  // define props for navbar
  const [currentPage, handlePageChange] = useState(tabs[0]);
  // decide which page to display at a given time
  function displayPage(tabName) {
    switch (tabName) {
      case "About Me":
        return <About></About>;
      case "Portfolio":
        return <Wrapper></Wrapper>;
      case "Contact":
        return <Contact></Contact>;
      case "Resume":
       return <Resume></Resume>;
      default:
        return <About></About>;
    }
  };

  const [projectsList] = useState(projects);

  return (
    <div className="container">
      <Header>
        <Navigation
          tabs={tabs}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Header>
      
     
        {displayPage(currentPage)}
      
      <Footer></Footer>
    </div>
  );
}

export default App;
