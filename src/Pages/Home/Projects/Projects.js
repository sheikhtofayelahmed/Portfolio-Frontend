import React from "react";
import "./Projects.css";
import capture1 from "../../../Assets/capture/Capture1.png";
import capture2 from "../../../Assets/capture/Capture2.png";
import capture3 from "../../../Assets/capture/Capture3.jpg";
const Projects = () => {
  return (
    <div className="Projects">
      <h1 className="heading">latest project</h1>
      <div className="project-container">
        <div className="project">
          <img src={capture1} alt="" />
          <h1 > warehouse management</h1>
          <div className="project-button">
          <button type="submit" className="btn3">           details          </button>
          <button type="submit" className="btn3">           Live site          </button>
          </div>
        </div>
        <div className="project">
          <img src={capture2} alt="" />
          <h1 > Gym trainer</h1>
          <div className="project-button">
          <button type="submit" className="btn3">           details          </button>
          <button type="submit" className="btn3">           Live site          </button>
          </div>
        </div>

        <div className="project">
          <img src={capture3} alt="" />
          <h1 > tools manufacturer</h1>
          <div className="project-button">
          <button type="submit" className="btn3">           details          </button>
          <button type="submit" className="btn3">           Live site          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
