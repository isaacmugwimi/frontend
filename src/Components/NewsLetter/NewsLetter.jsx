import React from "react";
import "./NewsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1>Get Exclusive Offers On Your Email</h1>

      <p className="p1">Subscribe to our newsletter and stay updated</p>
      <form action="">
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="your email or Id"
            required
          />
          <button>Subscribe</button>
        </div>
      </form>

      {/* <div className="newsletterFooter">
        
      </div> */}
    </div>
  );
};
