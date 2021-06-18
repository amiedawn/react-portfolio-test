import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Footer() {
  return (
    <Container fluid>
      <div
        className="row text-center"
        style={{
          backgroundColor: "#122240",
          color: "#be8180",
          padding: "1rem",
        }}
      >
        <div className="col-md-12 content">
          <a
            style={{
              backgroundColor: "#122240",
              color: "#575a4b",
              padding: "5px",
            }}
            href="mailto:amie.d.carroll@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope fa-fw fa-2x" />
          </a>
          <a
            style={{
              backgroundColor: "#122240",
              color: "#575a4b",
              padding: "5px",
            }}
            href="http://www.linkedin.com/in/amie-carroll-webdeveloper"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-fw fa-2x" />
          </a>
          <a
            style={{
              backgroundColor: "#122240",
              color: "#575a4b",
              padding: "5px",
            }}
            href="http://www.facebook.com/amie.whitecarroll"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-fw fa-2x" />
          </a>
          <a
            style={{
              backgroundColor: "#122240",
              color: "#575a4b",
              padding: "5px",
            }}
            href="https://github.com/amiedawn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-fw fa-2x" />
          </a>
          <div className="row" id="copyright" style={{ margin: 0 }}>
            <div className="col-lg-12 ">
              <p
                style={{
                  backgroundColor: "#122240",
                  color: "#575a4b",
                
                }}
                className="medium"
              >
                © 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}