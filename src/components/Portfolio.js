import React from "react";
import movieGame from "../images/movie-game.png";
import weatherApp from "../images/weather-app.png";
import noteTaker from "../images/note-taker.png";
import techBlog from "../images/tech-blog.png";
import scheduler from "../images/scheduler.png";
import gameNight from "../images/gamenight.png";
import justTechNews from "../images/just-tech-news.png";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Portfolio() {
  const projects = [
    {
      title: "GameNight",
      screenShot: gameNight,
      appLink: "https://game-night.herokuapp.com/",
      gitHubLink: "https://github.com/jboyce313/GameNight",
      skills: ["MERN", "GraphQL", "Collaborative Project"],
    },
    {
      title: "Tech Blog",
      screenShot: techBlog,
      appLink: "https://techtonic.herokuapp.com/",
      gitHubLink: "https://github.com/jboyce313/tech-blog",
      skills: ["SQL/Sequelize", "Express", "Node.js"],
    },
    {
      title: "Just Tech News",
      screenShot: justTechNews,
      appLink: "https://just-tech-news-daily-594de3f5fe7b.herokuapp.com/",
      gitHubLink: "https://github.com/jboyce313/python-newsfeed",
      skills: ["Python", "Flask", "RESTful"],
    },
    {
      title: "Rotten Tomatoes Guesser",
      screenShot: movieGame,
      appLink: "https://jboyce313.github.io/movie-game/",
      gitHubLink: "https://github.com/jboyce313/movie-game",
      skills: ["JavaScript", "Third Party API", "Collaborative Project"],
    },
    {
      title: "Note Taker",
      screenShot: noteTaker,
      appLink: "https://note-taker-9000.herokuapp.com/",
      gitHubLink: "https://github.com/jboyce313/note-taker",
      skills: ["Express", "RESTful", "Node.js"],
    },
    {
      title: "Weather Dashboard",
      screenShot: weatherApp,
      appLink: "https://jboyce313.github.io/weather-dashboard/",
      gitHubLink: "https://github.com/jboyce313/weather-dashboard",
      skills: ["JQuery", "Dynamic HTML and CSS", "Third Party API"],
    },
  ];

  return (
    <div>
      <Container>
        <h2>Portfolio</h2>
        <div className="projects">
          <Row>
            {projects.map((project) => (
              <Col md={6} lg={4}>
                <Card className="bg-dark text-white project">
                  <Card.Img src={project.screenShot} alt="Card image" />
                  <Card.ImgOverlay className="hidden">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>
                      <ul>
                        {project.skills.map((skill) => (
                          <li>{skill}</li>
                        ))}
                      </ul>
                      <a href={project.appLink}>Visit App</a>
                      <a href={project.gitHubLink}>View on GitHub</a>
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
