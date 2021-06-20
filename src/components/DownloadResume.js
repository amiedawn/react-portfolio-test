import React, { Component } from "react";
import resume from "./../assets/images/resume.pdf"
import Button from "react-bootstrap/Button";

class DownloadResume extends Component {
  render() {
    return (
      <Button
        className="ml-3 mr-6"
        style={{
          backgroundColor: "#be8180",
          color: "#122240",
        }}
          href={resume} download="resume.pdf"
      >
        Download Resume Here
      </Button>
    );
  }    
};

export default DownloadResume;