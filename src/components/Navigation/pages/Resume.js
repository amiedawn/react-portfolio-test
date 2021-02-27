import React from 'react';
import myResume from "../../../assets/images/resume.png";


class DownloadResume extends React.Component {
  render() {
    return (
          <a href={myResume} download="resume.png">
            Download Resume
          </a>
//       <a href={this.props.src} download>{this.props.children}</a>
    )
  }
}

// class MyComponent extends React.Component {
//   render() {
//     return (
//       <DownloadResume src='../../../../assets/images/resume.png'>Click Here</DownloadResume>
//     )
//   }
// }

export default DownloadResume;