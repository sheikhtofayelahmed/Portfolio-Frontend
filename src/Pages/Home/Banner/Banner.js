import React from "react";
import "./Banner.css";
import banner from "../../../Assets/Banner/banner.jpg";
import "animate.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="image">
        <img src={banner} alt="" />
      </div>

      <div className="details">
        <div className=" animate__animated animate__slideInDown">
          <h1>Sheikh tofayel ahmed</h1>
        </div>
        <h2>web application developer</h2>
        <div className="button">
          <button className="btn-1 animate__animated animate__fadeInLeft">who i am</button>
          <button className="btn-2 animate__animated animate__fadeInRight">contact me</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
