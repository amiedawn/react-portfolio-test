import React from "react";

// Props are passed through our functional component.
function NavTabs(props) {
  const {
    tabs = [],
    currentPage,
    handlePageChange,
  } = props;
  
  return (
    <ul className="nav nav-tabs ml-auto my-1 mr-2">
      {tabs.map((tab) => (
        <li
          className="nav-item"
          key={tab}
          style={{
            backgroundColor: "#122240",
            color: "#be8180",
          }}
        >
          <a
            style={{
              backgroundColor: "#122240",
              color: "#be8180",
            }}
            href={"#" + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => handlePageChange(tab)}
            className={currentPage === tab ? "nav-link active" : "nav-link"}
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;

