import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class AboutMe extends Component {
  render() {
    return (
      <Container fluid className="home-about-me-container" id="aboutme">
        <Row>
          <Col className="home-about-me-header-container">
            <h1 className="home-section-title secondary">About Me</h1>
            <div className="section-block background-primary"></div>
          </Col>
        </Row>
        <Row className="home-about-me-content-container">
          <Col md={true} className="home-about-me-content-one">
            <img
              className="home-about-me-img"

              src={'https://raw.githubusercontent.com/perfettiful/github-pages-demo/main/public/assets/images/profile-pic.jpeg'}
            />
          </Col>
          <Col md={true} className="home-about-me-content-two">
            <p className="home-about-me-text secondary">Hey there! I'm Jo Sumbuddy, a software developer based in Manhattan, NYC. I work with some of the popular front-end technologies to create beautiful websites that get noticed. I'm seeking experience to gain more knowledge in the web development field.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;