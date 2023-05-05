import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <p className="message">Built with REACT</p>
      <div className="github">
        <p>See me on GitHub</p>
        <a href="https://github.com/jboyce313">
          <FaGithub className="githubIcon" />
        </a>
      </div>
    </div>
  );
}
