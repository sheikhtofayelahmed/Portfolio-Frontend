import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faJs,
  faHtml5,
  faCss3,
  faBootstrap,
  fatail,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import "./About.css";
const About = () => {
  return (
    <div className="About">
      <div className="about-details">
        <h1 className="heading">ABOUT ME</h1>
        <p>
          The collaborative process of web development requires close
          integration of technology and design – two disciplines that inform one
          another. We make hip and exciting web sites. Big and Small. Concept
          development, interface design, production management.
        </p>
        <h1 className="signature">sheikh tofayel ahmed</h1>
      </div>
      <div className="skill">
        <div>
          <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>

          <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>

          <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
        </div>
        <div>
          <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>

          <FontAwesomeIcon icon={faNode}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default About;
