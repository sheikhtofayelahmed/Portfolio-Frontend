import React, { useEffect, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faJs,
  faHtml5,
  faCss3,
  faBootstrap,
  faGit,
  faMdb,
} from "@fortawesome/free-brands-svg-icons";
import tailwind from "../../../Assets/svg/tailwind.svg";
import express from "../../../Assets/svg/express.svg";
import firebase from "../../../Assets/svg/firebase.svg";
import jwt from "../../../Assets/svg/jwt.svg";
import "./About.css";
import "animate.css";
import { useRef } from "react";
import { useState } from "react";

const About = () => {
  const targetRef = useRef();
  const [targetPosition,setTargetPosition]=useState(0)
  const getPosition = () => {
    const c = targetRef.current.offsetTop;
    setTargetPosition(c)
  };
  useEffect(() => {
    getPosition();
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="About">
      <div className="about-details">
        <h1 className="heading">ABOUT ME</h1>
        <p>
        I'm a very passionate web application developer (MERN) from Bangladesh. I'm an expert in making an industry-standard, fully responsive website with any of the top frameworks of the current time and REACT-based web application for small and medium sized businesses. 
        <ul>
      <li>What I know and what I'm experienced about-</li>
      <li>• I have fluent knowledge of latest React, HTML, CSS , JavaScript ES6 and best practices . </li>
      <li>• I have working knowledge of NODE.JS, Express and MongoDB. </li>
      <li>• I have a solid understanding of the HTTP protocol and how server side code works in the front-end. </li>
      <li>• I also have working knowledge of front-end optimization and performance techniques , cross-browser development and troubleshooting.  </li>
      <li>• I'm obsessed with lean, clean and organized code. </li>
      <li>• I'm able to handle multiple projects and competing deadlines. </li>
      <li>• I have an overall knowledge of usability, accessibility, architecture and navigation.</li>
      </ul>
        </p>
        <h1 className="signature">sheikh tofayel ahmed</h1>
      </div>
      <div className="skill" ref={targetRef}>
        <h1 className="heading">SKILLS</h1>
        <div className="skill-set">
          <div className="animate__animated animate__fadeInLeft animate__delay-1s">
            <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faNode}></FontAwesomeIcon>
            <img src={express} alt="" />
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>MongoDB</title>
              <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
            </svg>
          </div>
          <div className="animate__animated animate__fadeInRight animate__delay-2s">
            <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faBootstrap}></FontAwesomeIcon>
            <img src={tailwind} alt="" />
          </div>
          <div>
            <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
            <img src={firebase} alt="" />
            <img src={jwt} alt="" />
            <FontAwesomeIcon icon={faGit}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
