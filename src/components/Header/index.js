import React from "react";
import "./style.css";

function Header() {
  return (
    <header className='header'>
      <h1>Clicky Game!</h1>
      <h2>
        Click an image to start earning points, but don't click on any image
        more than once!
      </h2>
    </header>
  );
}

export default Header;
