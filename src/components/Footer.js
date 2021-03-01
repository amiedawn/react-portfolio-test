import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Footer() {
  return (
    <Container fluid>
      <div className="row text-center mt-5">
        <div className="col-md-12 content">
          <a
            href="mailto:amiedawn@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope fa-fw fa-2x" />
          </a>
          <a
            href="http://www.linkedin.com/in/amie-carroll-0976606"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-fw fa-2x" />
          </a>
          <a
            href="http://www.facebook.com/amie.whitecarroll"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-fw fa-2x" />
          </a>
          <a
            href="https://github.com/amiedawn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-fw fa-2x" />
          </a>
          <div className="row" id="copyright" style={{ margin: 0 }}>
            <div className="col-lg-12 ">
              <p className="small ">© 2021</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}