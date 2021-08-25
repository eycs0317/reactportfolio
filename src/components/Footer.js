import React from 'react';
import "../styles/Footer.css";

function Footer() {
  return (
    <section className="section">
    <h2 className="title" id="contact-me">Contact Me</h2>
    <nav className=" content contact-me">
      <a href="tel:5555555555">555.555.5555</a>
      <a href="mailto: eycs0317@gmail.com">eycs0317@gmail.com</a>
      <a href="https://github.com/eycs0317" target="_blank">GitHub</a>
      <a href="https://ucb.bootcampcontent.com/UCB-Coding-Bootcamp" target="_blank">GitLab</a>
    </nav>
    </section>
  )
}


export default Footer;