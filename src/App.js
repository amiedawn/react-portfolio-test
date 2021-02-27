import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation/NavTabs";
import About from "./components/Navigation/pages/About";
import Contact from "./components/Navigation/pages/Contact";
import ProjectCard from "./components/Project/ProjectCard/ProjectCard";
import Wrapper from "./components/Project/Wrapper/Wrapper";
import projects from "./projects.json";
//import Resume from "./components/Resume/index";
//import Footer from "./components/Footer/index";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

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
      // case "Resume":
        // return <Resume></Resume>;
      default:
        return <About></About>;
    }
  };

  const [projectsList, setProjectsList] = useState(projects);

  return (
    <div className="container">
      <Header>
        <Navigation
          tabs={tabs}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Header>
      <Button variant="primary">Download Resume</Button>
      <main>
        <Wrapper>
          <h1 className="title">Project List</h1>
          {projectsList.map((project) => (
            // bring in all project key/value properties with "...project"
            <ProjectCard
              key={project.id}
              {...project}
              // removeProject={() => {}}
            />
          ))}
        </Wrapper>
        {displayPage(currentPage)}
      </main>
    </div>
  );
}

export default App;
