import React from 'react';
import DownloadResume from './DownloadResume';
import Skills from './Skills';

function Resume() {
    return (
      <div className="mr-6"
        style={{
          backgroundColor: "#122240",
          color: "#c0a98e",
          padding: "40px",
        }}
      >
        <DownloadResume></DownloadResume>
        <Skills></Skills>
      </div>
    );
};

export default Resume;