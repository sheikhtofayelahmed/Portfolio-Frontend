import React from "react";
import "./Projects.css";
import capture1 from "../../../Assets/capture/Capture1.png";
import capture2 from "../../../Assets/capture/Capture2.png";
import capture3 from "../../../Assets/capture/Capture3.jpg";
import { Link } from "react-router-dom";
import useProject from "../../../Hooks/useProject";
import Project from "./Project/Project";
const Projects = () => {
  const [project]=useProject()
  return (
    <div className="Projects">
      <h1 className="heading">latest project</h1>
      <div className="project-container">
        {
          project.map(project=><Project project={project} key={project.id}></Project>)
        }
       

       
      </div>
    </div>
  );
};

export default Projects;
