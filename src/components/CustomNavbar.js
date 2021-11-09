import React, { Component } from "react";
import {} from "react-bootstrap";

class CustomNavbar extends Component {
  render() {
    return (
      <div className="custom-navbar background-light">
        <p className="custom-navbar-title">Jo Sumbuddy</p>
        <ul className="custom-navbar-links">
          <li className="custom-navbar-li">
            <a className="custom-navbar-link primary" href="#aboutme">
              About Me
            </a>
          </li>
          <li className="custom-navbar-li">
            <a className="custom-navbar-link primary" href="#myskills">
              My Skills
            </a>
          </li>

          <li className="custom-navbar-li">
            <a
              className="custom-navbar-link primary"
              href="" target="_black"
              >
                Resume
              </a>
            </li>
            <li className="custom-navbar-li">
            <a id="contactMeBtn" href="#contactme">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CustomNavbar;