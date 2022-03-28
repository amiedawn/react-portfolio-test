import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import { images } from "./projectData.js";
import Button from 'react-bootstrap/Button';

const ProjectColors = {
  backgroundColor: "#c0a98e",
  color: "#122240",
  borderColor: "#122240"
}

const ProjectCard = () => {
  return(
  images.map((image, i) => {
    const {default:source} = require(`../assets/projects/${i}.png`)
    return (
      <Card border="light" 
        key={i}
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#122240",
          padding: "2rem",
          margin: "2rem",
          width: "auto"
        }}
      >
        <Row className="show-grid">
          <Col md={12}>
            <div>
              <p
                className="black-text"
                style={{
                  backgroundColor: "#be8180",
                  padding: "5px",
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                {image.name}
              </p>
            </div>
          </Col>
          <Col md={8}>
            <div>
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
            </div>
          </Col>
          <Col md={4}>
            <div>
              <div>
                <Button
                  style={ProjectColors}
                  block
                  href={image.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {image.deployLabel}
                </Button>
                <Button
                  style={ProjectColors}
                  block
                  href={image.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {image.githubLabel}
                </Button>
                <p
                style={{
                    backgroundColor: "#be8180",
                    color: "#122240",
                    borderColor: "#122240",
                    padding: ".6rem",
                    margin: ".7rem",
                  }}
                block
                href={image.skills}
                target="_blank"
                rel="noopener noreferrer"
                >
                Skills Used: {image.skills}
                </p>
              </div>
              
            </div>
          </Col>  
        </Row>
        
      </Card>
    );})
)};

export default ProjectCard;
