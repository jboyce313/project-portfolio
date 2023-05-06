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
            <Col lg={6}>
              <img className="myPic" src={me} alt="Me" />
            </Col>
            <Col>
              <div className="bio">
                <p>
                  Hello! My name is Jacob and I live in the Kansas City metro
                  area. I graduated from the University of Missouri - Kansas
                  City in 2021 with a BA in Economics. I have long had an
                  interest in programming. I've done some self-teaching
                  throughout the years but, in the summer of 2022, I decided I
                  wanted to get serious about persuing a career in software
                  engineering and enrolled in the Full-Stack Coding Bootcamp at
                  the University of Kansas.Upon my completion of this bootcamp
                  in May of 2023, I will receive my full-stack certification.
                  For more information on my coding competencies, please see the{" "}
                  <span
                    className="resumeLink"
                    onClick={() => setDisplay("resume")}
                  >
                    resumé
                  </span>{" "}
                  section of this site.
                </p>
                <p className="lastParagraph">
                  Outside of programming, I enjoy staying active. I like sports,
                  especially soccer and climbing, and I love movies and music. I
                  am recently married and a new father to a beautiful baby girl.
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
