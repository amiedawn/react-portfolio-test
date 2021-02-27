import React from "react";
import "./projectStyle.css";
//import { images } from "./components/imagesAndIcons.js";
//import image1 from "../../../../../assets/projects/workout-planner.png";
//import image2 from "../../../../../assets/projects/jokinator.png";

// Props are passed through our functional component.
// function ProjectCard({ id, name, image, deployUrl, githubUrl}) {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={name} src={image1} />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {name}
//           </li>
//           <li>
//             <strong>Deployed URL:</strong> {deployUrl}
//           </li>
//           <li>
//             <strong>GitHub URL:</strong> {githubUrl}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
const ProjectCard = ({ image }) => {
  return (
    <div>
      <img
        className="img-fluid"
        src={image.src}
        alt={image.alt}
        name={image.name}
        style={{ width: "450px" }}
      />
      <a href={image.deployUrl} target="_blank" rel="noopener noreferrer">{image.deployUrl}</a>
      <a href={image.githubUrl} target="_blank" rel="noopener noreferrer">{image.githubUrl}</a>
      <p
        className="white-text text-capitalize"
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: "5px",
          textAlign: "center",
          fontSize: "15px",
        }}
      >
        {image.name}
      </p>
    </div>
  );
};

export default ProjectCard;
