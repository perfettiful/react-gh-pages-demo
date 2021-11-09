import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";


class MySkills extends Component {
    render() {
        return (
            <Container
        fluid
        className="home-my-skills-container background-light"
        id="myskills"
      >

      <Row>
          <Col className="home-my-skills-header-container">
            <h1 className="home-section-title secondary">My Skills</h1>
            <div className="section-block background-primary"></div>
          </Col>
        </Row>

        <Row>
        <Col md={true} className="home-my-skills-content-one">
        <ul className="home-my-skills-skill-list">
        <li className="home-my-skills-skill-item secondary"> 
        Enthusiastic Cheerfulness
        </li>
        <li className="home-my-skills-skill-item secondary"> 
        Speaking about Myself in the 3rd-Person
        </li>

        <li className="home-my-skills-skill-item secondary"> 
        HTML5 / CSS / JavaScript / JSON
        </li>

        <li className="home-my-skills-skill-item secondary">
        JQuery / Bootstrap / Node Js / MySQL

        </li>

        <li className="home-my-skills-skill-item secondary">
        MongoDB / Express / Handelbars.js / ReactJS /  

        </li>

        </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MySkills;
