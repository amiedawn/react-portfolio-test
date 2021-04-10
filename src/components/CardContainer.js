import React from 'react';
import ProjectCard from './ProjectCard';

import { Container, Row, Col } from 'react-bootstrap';

const CardContainer = () => {
  return (
    <div
      className="text-center"
      style={{
        backgroundColor: "#122240",
        color: "dark",
        padding: "15px",
      }}>
      <Container>
        <Row className="show-grid">
          <Col md={12}>
            <ProjectCard />
          </Col>
         
        </Row>  
      </Container>
    </div>  
  );
};

export default CardContainer;