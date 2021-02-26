import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
//import Portfolio from "./pages/Blog";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function Portfolio() {
  // About is the default page
  const [currentPage, handlePageChange] = useState("About");

  // render the correct currentPage
  const renderPage = () => {
    switch (currentPage) {
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

    return (
      <div>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        <div>{renderPage(currentPage)}</div>
      </div>
    );
};

export default Portfolio;
