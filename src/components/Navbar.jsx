import React from "react";
import style from "../css/Navbar.module.css";
import logoImg from "../images/logo_2_1200x1200 (1).png";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <div className={style.list}>
          <i className="bi bi-list fs-2 text-white"></i>
        </div>
        <div className={style.home}>
          <img src={logoImg} className={style.logoImg} alt="" />
          <div className={style.home2}>
            <div>
              <li>Home</li>
            </div>
            <li>Products</li>
            <li>Community</li>
            <li>Support</li>
          </div>
        </div>
        <div className={style.icons}>
          <i className="bi bi-search"></i>
          <i className="bi bi-person d-none d-lg-block"></i>
          <i className="bi bi-cart"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
