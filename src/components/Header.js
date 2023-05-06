import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header({ display, setDisplay }) {
  return (
    <header>
      <Container>
        <Row>
          <Col lg={4}>
            <h1 className="my-name">Jacob Boyce</h1>
          </Col>
          <Col className="nav-col" xs={6} sm={3} lg={2}>
            <p className="nav-option" onClick={() => setDisplay("start")}>
              About me
            </p>
          </Col>
          <Col className="nav-col" xs={6} sm={3} lg={2}>
            <p className="nav-option" onClick={() => setDisplay("portfolio")}>
              Portfolio
            </p>
          </Col>
          <Col className="nav-col" xs={6} sm={3} lg={2}>
            <p className="nav-option" onClick={() => setDisplay("contact")}>
              Contact
            </p>
          </Col>
          <Col className="nav-col" xs={6} sm={3} lg={2}>
            <p className="nav-option" onClick={() => setDisplay("resume")}>
              Resumé
            </p>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
