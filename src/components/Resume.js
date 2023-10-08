import React from "react";
import resume from "../Jacob_Boyce_Resume.pdf";

export default function Resume() {
  return (
    <div>
      <h2>Resumé</h2>
      <div className="skills">
        <a className="resume" href={resume}>
          Dowload my resumé here
        </a>
        <h4>Front-End Experience</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h4>Back-End Experience</h4>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
  );
}
