import React from "react";
import "./Banner.css";
import banner from "../../../Assets/Banner/banner.jpg";
import 'animate.css';
const Banner = () => {
  return (
    <div className="banner">
      <div className="image">
    <img src={banner} alt="" />
  
      </div>
      
      <div className="details animate__animated animate__slideInDown">
        <h1>Sheikh tofayel ahmed</h1>
      </div>
    </div>
  );
};

export default Banner;
