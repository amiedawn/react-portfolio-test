import React from "react";
import "./projectStyle.css";
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
    <img
      className="img-fluid"
      src={image.src}
      alt={image.alt}
      title={image.title}
      style={{ width: "450px" }}
    />
  );
}


export default ProjectCard;


