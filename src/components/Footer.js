import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/jboyce313">
        <FaGithub className="githubIcon" />
      </a>
    </div>
  );
}
