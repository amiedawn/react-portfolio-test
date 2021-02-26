import React from "react";

// Props are passed through our functional component.
function NavTabs({currentPage, handlePageChange}) {
  const tabs = ["About Me", "Portfolio", "Contact", "Resume"];
  return (
    <ul className="nav nav-tabs">
      {tabs.map((tab) => (
        <li className="nav-item" key={tab}>
          <a
            href={"#" + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => handlePageChange(tab)}
            className={
              currentPage === tab ? "nav-link active" : "nav-link"
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;

