import React from "react";
import Container from "react-bootstrap/Container";
import "./projectStyle.css";
import { images } from "../../../../projectData.js";

const ProjectCard = () => {
  return(
  images.map((image, i) => {
    const {default:source} = require(`../../../../../assets/projects/${i}.png`)
    return (
      <Container fluid>
        <div className="row text-center">
          <div className="col-md-12 content"></div>
          <div>
            <hr />
            <p
              className="black-text text-capitalize"
              style={{
                backgroundColor: "grey",
                padding: "5px",
                textAlign: "center",
                fontSize: "35px",
              }}
            >
              {image.name}
            </p>

            <img
              className="img-fluid"
              src={source}
              alt={image.alt}
              name={image.name}
              style={{ width: "750px" }}
            />
            <div>
              <a
                href={image.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {image.deployUrl}
              </a>
              <a
                href={image.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {image.githubUrl}
              </a>
            </div>
          </div>
        </div>
      </Container>
    );})
)};

export default ProjectCard;
