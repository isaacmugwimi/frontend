import React from "react";
import handIcon from "../Assets/hand_icon.png";
import "./hero.css";
import heroImage from "../Assets/hero_image.png";
import arrowIcon from "../Assets/arrow.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>NEW ARRIVALS ONLY</h1>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={handIcon} alt="" />
          </div>

          <p>collections</p>
          <p>for everyone</p>
        </div>

        <div className="hero-latest-button">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};
