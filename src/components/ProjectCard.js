import React from "react";
import Container from "react-bootstrap/Container";
import "../projectStyle.css";
import { images } from "./projectData.js";
import Button from 'react-bootstrap/Button';

const ProjectCard = () => {
  return(
  images.map((image, i) => {
    const {default:source} = require(`../assets/projects/${i}.png`)
    return (
      <Container
        key={i}
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#122240",
        }}
      >
        <div>
          <div></div>
          <div>
            <hr />
            <p
              className="black-text text-capitalize"
              style={{
                backgroundColor: "#be8180",
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
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <div>
              <div
                style={{
                  padding: "25px",
                  backgroundColor: "#be8180",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#c0a98e",
                    color: "#122240",
                    borderColor: "#122240"
                  }}
                  block
                  href={image.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {image.deployUrl}
                </Button>
                <Button
                  style={{
                    backgroundColor: "#c0a98e",
                    color: "#122240",
                    borderColor: "#122240",
                  }}
                  block
                  href={image.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {image.githubUrl}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );})
)};

export default ProjectCard;
