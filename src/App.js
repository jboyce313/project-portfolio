import React from "react";
import { useState } from "react";
import "./styles/Header.css";
import "./styles/AboutMe.css";
import "./styles/App.css";
import "./styles/Portfolio.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [display, setDisplay] = useState("start");

  return (
    <div>
      <Header display={display} setDisplay={setDisplay} />
      <div className="displayContent">
        {display === "resume" ? (
          <Resume />
        ) : display === "portfolio" ? (
          <Portfolio />
        ) : display === "contact" ? (
          <Contact />
        ) : (
          <AboutMe display={display} setDisplay={setDisplay} />
        )}
      </div>
    </div>
  );
}

export default App;
