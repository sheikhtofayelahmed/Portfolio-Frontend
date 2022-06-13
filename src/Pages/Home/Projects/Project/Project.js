import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'
const Project = ({project}) => {
    const {id,image,name,short_description,site}=project
    return (
        <div className="project">
        <img src={image} alt="" />
        <h1> {name}</h1>
        <p>
          {short_description}
        </p>
        <div className="project-button">
          <button type="submit" className="btn3"><Link to={`/project/:${id}`}>details</Link></button>
          <button type="submit" className="btn3">
            <a href={site}>Live site </a>
          </button>
        </div>
      </div>
    );
};

export default Project;