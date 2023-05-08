import React from "react";
import me from "../images/me.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutMe({ display, setDisplay }) {
  return (
    <Container>
      <div className="display aboutMe">
        <h2 className="aboutMeHeader">About me</h2>

        <div className="profile">
          <Row>
            <Col className="pic-container" lg={6}>
              <img className="myPic" src={me} alt="Me" />
            </Col>
            <Col>
              <div className="bio">
                <p>
                  Hello! My name is Jacob and I graduated from the University of
                  Missouri - Kansas City in 2021 with a BA in Economics. I have
                  long had an interest in coding and I have done some
                  self-teaching over the years. In the summer of 2022, I decided
                  to get serious about pursuing a career in software engineering
                  and enrolled in the Full-Stack Coding Bootcamp at the
                  University of Kansas. Upon my completion of this bootcamp in
                  May of 2023, I will receive my full-stack certification.
                  Navigate over to the{" "}
                  <span
                    className="resumeLink"
                    onClick={() => setDisplay("portfolio")}
                  >
                    Portfolio
                  </span>{" "}
                  tab to view a gallery of projects I've done, complete with
                  links to the apps and their GitHub repositories. For more
                  information on my coding competencies, please see the{" "}
                  <span
                    className="resumeLink"
                    onClick={() => setDisplay("resume")}
                  >
                    Resumé
                  </span>{" "}
                  section of this site.
                </p>
                <p className="lastParagraph">
                  Outside of programming, I enjoy staying active. I like sports,
                  especially soccer, basketball, and climbing. I also love
                  movies and music. I am recently married and a new father to a
                  beautiful baby girl.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default AboutMe;
