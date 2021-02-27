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
          <h1 className="navbar-logo">
            <span>
              <a href="/">AMIE CARROLL </a>
              <i className="fas fa-laptop-code"></i>
            </span>
          </h1>
          {/* show navbar */}
          {this.props.children}
        
      </header>
    );
  }
}

export default Header;
