import React, { Component } from "react";
import {} from "react-bootstrap";
import IosMenu from "react-ionicons/lib/IosMenu";
import IosClose from "react-ionicons/lib/IosClose";

class CustomMenuNavbar extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };
  }

  render() {
    return (
      <div className="custom-menu-navbar background-light">
        <p className="custom-menu-navbar-title secondary">Daniel Viramontes</p>

        {!this.state.showMenu ? (
          <IosMenu
            className="custom-menu-navbar-icon"
            fontSize="29px"
            color="#ef5f7a"
            onClick={() => this.setState({ showMenu: true })}
          />
        ) : (
          <IosClose
            className="custom-menu-navbar-icon"
            fontSize="29px"
            color="#ef5f7a"
            onClick={() => this.setState({ showMenu: false })}
          />
        )}

        {this.state.showMenu ? (
          <div className="custom-menu-navbar-menu-list-container">
            <ul className="custom-menu-navbar-menu-list">
              <li className="custom-menu-navbar-li">
                <a className="custom-menu-navbar-link primary" href="#aboutme">
                  About Me
                </a>
              </li>
              <li className="custom-menu-navbar-li">
                <a className="custom-menu-navbar-link primary" href="#myskills">
                  My Skills
                </a>
              </li>
              <li className="custom-menu-navbar-li">
                <a
                  className="custom-menu-navbar-link primary"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li className="custom-menu-navbar-li">
                <a
                  className="custom-menu-navbar-link primary"
                  href=""
                  target="_black"
                >
                  Resume
                </a>
              </li>
              
              <li id="contactMeLink">
                <a
                  className="custom-menu-navbar-link primary"
                  href="#contactme"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default CustomMenuNavbar;

