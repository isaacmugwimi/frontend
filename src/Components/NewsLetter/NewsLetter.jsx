import React from "react";
import "./NewsLetter.css";
import logo from "../Assets/logo.png";
import instagram from"../Assets/instagram_icon.png"
import pintrest from"../Assets/pintester_icon.png"
import whatsapp from"../Assets/whatsapp_icon.png"
export const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h>Get Exclusive Offers On Your Email</h>

      <p>Subscribe to our newsletter and stay updated</p>
      <div className="subscribe">
        <input type="text" name="" id="" placeholder="your email or Id" />
        <button>Subscribe</button>
      </div>
      <div className="logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <div className="divMenu">
        <ul>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="social-icons">
        <img src={instagram} alt="" />
        <img src={pintrest} alt="" />
        <img src={whatsapp} alt="" />
      </div>
    </div>
  );
};
