import React, { useState } from "react";

function Header({ display, setDisplay }) {
  // const [display, setDisplay] = useState("portfolio");

  return (
    <header>
      <h1 className="my-name">Jacob Boyce</h1>
      <div className="nav-options">
        <p onClick={() => setDisplay("start")}>About me</p>
        <p onClick={() => setDisplay("portfolio")}>Portfolio</p>
        <p onClick={() => setDisplay("contact")}>Contact</p>
        <p onClick={() => setDisplay("resume")}>Resumé</p>
      </div>
    </header>
  );
}

export default Header;
