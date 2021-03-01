import React, { Component } from "react";
import myResume from "../assets/images/resume.png";
import Button from "react-bootstrap/Button";

class DownloadResume extends Component {
  render() {
    return (
      <Button className='mb-3 mt-3' href={myResume} download="resume.png">
        Download Resume Here
      </Button>
    )
  }    
};

export default DownloadResume;