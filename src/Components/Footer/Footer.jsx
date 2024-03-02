import React from "react";
import logo from "../Assets/logo.png";
import instagram from "../Assets/instagram_icon.png";
import pintrest from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <div className="divMenu">
        <ul>
          <li>
            <div>Company</div>
          </li>
          <li>
            <div>Products</div>
          </li>
          <li>
            <div>Offices</div>
          </li>
          <li>
            <div>About</div>
          </li>
          <li>
            <div>Contact</div>
          </li>
        </ul>
      </div>
      <div className="social-icons">
        <div>
          <img src={instagram} alt="" />
        </div>
        <div>
          <img src={pintrest} alt="" />
        </div>
        <div>
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footerContainer">
        <hr />
        <p className="copyright">Copyright &copy; 2024-All Right Reserved.</p>
      </div>
    </div>
  );
};
