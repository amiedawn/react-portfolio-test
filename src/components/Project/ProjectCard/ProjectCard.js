import React from "react";
import "./projectStyle.css";

// Props are passed through our functional component.
function ProjectCard({ id, name, image, deployUrl, githubUrl, removeProject}) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Deployed URL:</strong> {deployUrl}
          </li>
          <li>
            <strong>GitHub URL:</strong> {githubUrl}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
