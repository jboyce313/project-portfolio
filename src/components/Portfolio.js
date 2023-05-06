import React from "react";
import movieGame from "../images/movie-game.png";
import weatherApp from "../images/weather-app.png";
import noteTaker from "../images/note-taker.png";
import techBlog from "../images/tech-blog.png";
import scheduler from "../images/scheduler.png";
import codeQuiz from "../images/code-quiz.png";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Portfolio() {
  const projects = [
    {
      title: "Tech Blog",
      screenShot: techBlog,
      appLink: "https://techtonic.herokuapp.com/",
      gitHubLink: "https://github.com/jboyce313/tech-blog",
      skills: ["SQL/Sequelize", "RESTful", "Express", "Node.js"],
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
      skills: ["RESTful", "Express", "JSON", "Node.js"],
    },
    {
      title: "Work Day Scheduler",
      screenShot: scheduler,
      appLink: "https://jboyce313.github.io/work-day-scheduler/",
      gitHubLink: "https://github.com/jboyce313/work-day-scheduler",
      skills: ["JavaScript", "DayJS library", "Local storage"],
    },
    {
      title: "Weather Dashboard",
      screenShot: weatherApp,
      appLink: "https://jboyce313.github.io/weather-dashboard/",
      gitHubLink: "https://github.com/jboyce313/weather-dashboard",
      skills: ["JQuery", "Dynamic HTML", "CSS", "Third Party API"],
    },
    {
      title: "Code Quiz",
      screenShot: codeQuiz,
      appLink: "https://jboyce313.github.io/code-quiz/",
      gitHubLink: "https://github.com/jboyce313/code-quiz",
      skills: ["Timer Interval", "Dynamic HTML", "CSS"],
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
