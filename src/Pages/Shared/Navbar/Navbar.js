import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faFile, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import "animate.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const Ham = () => {
    setSidebar(!sidebar);
  };
  return (
    <nav className="Navbar">
      <h1 className="logo animate__animated animate__slideInDown ">
        tofayel101
      </h1>
      <div className="social">
        <ul className="animate__animated animate__fadeInRight animate__delay-4s">
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
        </ul>
      </div>
      <div className="navigation-desktop">
              <ul>
                <li >
                  <a href="https://drive.google.com/file/d/1te9wyBYCSSgdFuUJTfGDYRtt0LmFrGVI/view?usp=sharing">
                    Resume
                  </a>
                </li>
                <li >
                  <Link to="/about">About</Link>
                </li>
                <li>
                  Blog
                </li>
              </ul>
            </div>
      <div className="navigation-phone">
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
            <div className="sidebar">
              <ul>
                <li className="font-awesome resume">
                  <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                  <a href="https://drive.google.com/file/d/1te9wyBYCSSgdFuUJTfGDYRtt0LmFrGVI/view?usp=sharing">
                    Resume
                  </a>
                </li>
                <li className="font-awesome">
                  <FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                  Blog
                </li>
                <li></li>
              </ul>
            </div>
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
