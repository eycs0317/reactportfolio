import React from "react";
import "../styles/Nav.css";

function Nav(props) {
  return (
    <nav>
      <a
        className="link"
        href="#about-me"
        onClick={() => props.handlePageChange('About')}
        >About Me</a>
      <a
        className="link"
        href="#work"
        onClick={() => props.handlePageChange('Projects')}
        >Work</a>
      <a
        className="link"
        href="#contact-me"
        onClick={() => props.handlePageChange('Contact')}
        >Contact Me</a>
      <a className="link" href="./EddieYeungResume.pages" target="_blank">Resume</a>
    </nav>
  );
}

export default Nav;
