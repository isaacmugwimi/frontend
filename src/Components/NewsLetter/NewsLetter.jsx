import React from "react";
import "./NewsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1>Get Exclusive Offers On Your Email</h1>

      <p className="p1">Subscribe to our newsletter and stay updated</p>
      <div className="subscribe">
        <input type="text" name="" id="" placeholder="your email or Id" />
        <button>Subscribe</button>
      </div>

      {/* <div className="newsletterFooter">
        
      </div> */}
    </div>
  );
};
