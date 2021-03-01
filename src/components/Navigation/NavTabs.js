import React from "react";

// Props are passed through our functional component.
function NavTabs(props) {
  const {
    tabs = [],
    currentPage,
    handlePageChange,
  } = props;
  
  return (
    <ul className="nav nav-tabs ml-auto my-1">
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

