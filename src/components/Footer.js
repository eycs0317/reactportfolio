import React from 'react';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer-algn'>
    <section className="section">

    <nav className=" content contact-me">
      {/* <a href="tel:5555555555">555.555.5555</a>
      <a href="mailto: eycs0317@gmail.com">eycs0317@gmail.com</a> */}
      <a className='footerlink' href="https://github.com/eycs0317" target="_blank">GitHub</a>
      <a className='footerlink' href="https://www.linkedin.com/in/eddie-yeung-7b41761a5/" target="_blank">Linkedin</a>
    </nav>
    </section>
    </div>
  )
}


export default Footer;