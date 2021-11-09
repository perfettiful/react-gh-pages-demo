import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import CustomMenuNavbar from "../components/CustomMenuNavbar";
import AboutMe from "../components/AboutMe";
import MySkills from "../components/MySkills";
import ContactMe from "../components/ContactMe";
import CustomFooter from "../components/CustomFooter";

class HomePageContainer extends Component {
  constructor() {
    super();

    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
    });
  };


  render() {
    return (
      <Fragment>
        {this.state.width > 768 ? <CustomNavbar /> : <CustomMenuNavbar />}
        <Container fluid className="home-intro-container">
          <Row className="home-intro-text-container">
            <div className="home-intro-text-wrapper">
              <p className="home-intro-small primary">Hello Friend 👋 </p>
                <h1 className="home-intro-name secondary">my name is Jo Sumbuddy!</h1>
                <div className="block background-primary"></div>
                <p className="home-intro-headline secondary">
                    I am a software developer 💻 ,<br />
                    neighborhood friend 💚, <br />
                    and muppet 😬.
                    </p>
                    <Button
                className="home-intro-btn background-primary"
                href="#portfolio"
              >
                My Portfolio
              </Button>
              <Button
                className="home-intro-btn-outline background-light"
                href="#contactme"
              >
                Let's Get in Touch!
              </Button>
            </div>
          </Row>
        </Container>
        <AboutMe />
        <MySkills />

        <ContactMe />
        <CustomFooter />
      </Fragment>
    );
  }
}

export default HomePageContainer;