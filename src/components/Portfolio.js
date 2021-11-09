
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Portfolio extends Component {
  render() {
    return (
      <Container fluid className="portfolio-container" id="portfolio">
        <Row>
          <Col className="portfolio-header-container">
            <h1 className="portfolio-title secondary">Portfolio</h1>
            <div className="section-block background-primary"></div>
          </Col>
        </Row>
        <Row>
          <Col md={true} className="portfolio-content-one">
            {/* <div className="portfolio-one-wrapper background-light">
              <div className className="portfolio-section-header-container">
                <h4 className="portfolio-section-title secondary">
                  Mobile Applications
                </h4>
                <div className="section-block background-primary"></div>
              </div>
              <div className="portfolio-one-list-item">
               <a href=""  target="_blank"
                  className="portfolio-one-list-item-title secondary"
                >

                </a>
                </div>
            </div> */}
            <div className="portfolio-two-wrapper background-light">
              <div className className="portfolio-section-header-container">
                <h4 className="portfolio-section-title secondary">
                  Web Applications
                </h4>
                <div className="section-block background-primary"></div>
              </div>
              <div className="portfolio-two-list-item">
                <a
                  href="https://afternoon-stream-47735.herokuapp.com/?id=5fb914f6d0ef0a0017a0c23e"
                  target="_blank"
                  className="portfolio-two-list-item-title secondary"
                >
                Fitness Tracker 
                </a>
                
              </div>
              <div className="portfolio-two-list-item">
                <a
                  href=" https://cryptic-river-44195.herokuapp.com/"
                  target="_blank"
                  className="portfolio-two-list-item-title secondary"
                >
                  Progressive Budget
                </a>
              
              </div>
              <div className="portfolio-two-list-item">
                <a
                  href="https://employee-directory12345.herokuapp.com/directory"
                  target="_blank"
                  className="portfolio-two-list-item-title secondary"
                >
                  User Directory
                </a>
              
              </div>

              {/* <div className="portfolio-two-list-item">
                <a
                  href=" "
                  target="_blank"
                  className="portfolio-two-list-item-title secondary"
                >
                 
                </a>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;


         