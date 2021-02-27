import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="row social" style={{ margin: 0 }}>
          <div className="col-lg-12">
            <ul>
              <li>
                <a
                  href="mailto:amiedawn@hotmail@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope fa-fw fa-2x" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.linkedin.com/in/amie-carroll-09766061"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin fa-fw fa-2x" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.facebook.com/amie.whitecarroll"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin fa-fw fa-2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/amiedawn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github fa-fw fa-2x" />
                </a>
              </li>
            </ul>
            <br />
          </div>
        </div>
        <div className="row" id="copyright" style={{ margin: 0 }}>
          <div className="col-lg-12">
            <p className="small">© 2021 Amie Carroll</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
