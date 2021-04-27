import React, { Component } from "react";
import Container from "react-bootstrap/Container";

class Code extends Component {
  render() {
    return (
      <Container
        style={{
          backgroundColor: "#122240",
          color: "#c0a98e",
         
        }}
      >
        <h1 className="mb-3 my-3 text-center">Skills</h1>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <h5>Front-end:</h5>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>jQuery</li>
              <li>Handlebars</li>
              <li>Bulma</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <h5>Back-end:</h5>
            <ul>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Moment.js</li>
              <li>Inquirer.js</li>
              <li>Sequelize</li>
              <li>Dotenv</li>
              <li>Express-Session</li>
              <li>Regex</li>
              <li>IndexedDB</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <h5>Other:</h5>
            <ul>
              <li>GitHub / GitHub Pages</li>
              <li>Insomnia Core</li>
              <li>JSON</li>
              <li>GitLab</li>
              <li>VS Code</li>
              <li>Heroku</li>
              <li>GraphQL</li>
              <li>Jest</li>
              <li>Wix</li>
              <li>Weebly</li>
            </ul>
          </div>
        </div>
      </Container>
    );
  }
}

export default Code;
