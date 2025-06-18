import React from "react";
import style from '../css/Footer.module.css'
import logoImg from "../images/logo_2_1200x1200 (1).png";


const Footer = () => {
  return (
    <div className={style.container}>
      <div>
        <h6>INFORMATION</h6>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <a href="">Terms of Service</a>
        </li>{" "}
      </div>
      <div>
        <h6>SUPPORT</h6>
        <li>
          <a href="">Warranty</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
        <li>
          <a href="">Return and Refund policy</a>
        </li>
        <li>
          <a href="">Shipping Policy</a>
        </li>{" "}
        <li>
          <a href="">Install Videos</a>
        </li>{" "}
        <li>
          <a href="">User Manual</a>
        </li>
      </div>
      <div>
        <h6>QUICK LINKS</h6>
        <li>
          <a href="">Contact Us</a>
        </li>
        <li>
          <a href="">Help Center</a>
        </li>
        <li>
          <a href="">Product</a>
        </li>{" "}
      </div>
          <div>
              <img src={logoImg} alt="" className={style.logoImg} />
      </div>
    </div>
  );
};

export default Footer;
