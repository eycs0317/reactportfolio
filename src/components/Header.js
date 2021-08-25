import React from "react";
import "../styles/Header.css";
import Nav from './Nav'
import Background from './Background'

function Header({currentPage, handlePageChange}) {
  return (
    <div>
    <header>
      <img src="./eddieyeung.JPG" alt="Eddie Yeung"></img>
      <h1>Eddie Yeung</h1>
      <Nav
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
    <Background/>
    </div>
  );
}

export default Header;
