import React, { Component } from "react";
import myResume from "../assets/images/resume.png";

class DownloadResume extends Component {
  render() {
    return (
      <a href={myResume} download="resume.png">
        Download Resume
      </a>
    )
  }    
};

export default DownloadResume;