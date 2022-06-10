import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import "./Navbar.css";
import "animate.css";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const Ham = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
  };
  return (
    <nav className="Navbar">
      <h1 className="logo animate__animated animate__slideInDown">
        tofayel101
      </h1>
      <div className="social">
        <ul className="animate__animated animate__slideInDown">
          <li><FontAwesomeIcon icon={faLinkedin} /></li>
          <li><FontAwesomeIcon icon={faGithub} /></li>
          <li><FontAwesomeIcon icon={faFacebook} /></li>
        </ul>
      </div>
      <div className="nav">
        {sidebar ? (
          <>
            <div className="hamburger" onClick={Ham}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="sidebar"></div>
          </>
        ) : (
          <div className="hamburger" onClick={Ham}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
