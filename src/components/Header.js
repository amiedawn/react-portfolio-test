import React, { Component } from "react";
import Container from "react-bootstrap/Container";

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <Container
        fluid
        style={{
          backgroundColor: "#122240",
          color: "#be8180",
          padding: "15px",
        }}
      >
        <div className="row my-5 text-center">
          <div className="col-md-12 content"></div>

          <h1 className="navbar-logo">
            <span>
              <a
                className="ml-4"
                style={{
                  backgroundColor: "#122240",
                  color: "#be8180",
                  padding: "5px",
                }}
                href="./"
              >
                AMIE CARROLL{" "}
              </a>
              <i className="fas fa-laptop-code"></i>
            </span>
          </h1>
          {/* show navbar */}
          {this.props.children}
        </div>
      </Container>
    );
  }
}

export default Header;
