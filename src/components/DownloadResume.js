import React, { Component } from "react";
import myResume from "../assets/images/resume.png";
import Button from "react-bootstrap/Button";

class DownloadResume extends Component {
  render() {
    return (
      <Button
        href={myResume}
        download="resume.png"
        className="ml-3 mr-6"
        style={{
          backgroundColor: "#be8180",
          color: "#122240",
        
        }}
      >
        Download Resume Here
      </Button>
    );
  }    
};

export default DownloadResume;