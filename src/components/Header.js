import React, { Component } from "react";
//import Navbar from "../Navigation-wrong/Navbar";
//import "../Navigation-wrong/Navbar.css";

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <header>
        {/* <nav className="NavbarItems"> */}
          <h1 className="navbar-logo">
            <span>
              <a href="/">AMIE CARROLL </a>
              <i className="fas fa-laptop-code"></i>
            </span>
          </h1>
          {/* <div className="menu-icon" onClick={this.handleClick}> */}
            {/* <i */}
              {/* className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} */}
            {/* /> */}
          {/* </div> */}
          {this.props.children}
          {/* <Navbar></Navbar> */}
        {/* </nav> */}
      </header>
    );
  }
}

export default Header;
