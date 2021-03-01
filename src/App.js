import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/NavTabs";
import About from "./components/About";
import Contact from "./components/Contact";
import Wrapper from "./components/Wrapper";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
