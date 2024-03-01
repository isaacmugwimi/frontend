import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png"

export const Offers = () => {
  return (
    <div className="offers">
      <div className="exclusive-offers-left">
        <p>Exclusive </p>
        <p>Offers For You</p>
        <p className="p1">ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div className="exclusive-offers-right">
        <img src={exclusive_image} alt="" />

      </div>
    </div>
  );
};
