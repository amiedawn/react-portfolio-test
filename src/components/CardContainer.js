import React from 'react';
import ProjectCard from './ProjectCard';

import { Container, Row, Col } from 'react-bootstrap';

const CardContainer = () => {
  return (
    <div>
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