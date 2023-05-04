import React from "react";
import { useState } from "react";
import "./styles/Header.css";
import "./styles/AboutMe.css";
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
      {display === "resume" ? (
        <Resume />
      ) : display === "portfolio" ? (
        <Portfolio />
      ) : display === "contact" ? (
        <Contact />
      ) : (
        <AboutMe />
      )}
    </div>
  );
}

export default App;
