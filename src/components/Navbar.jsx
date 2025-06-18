import React from 'react'
import logoImg from '../images/logo_2_1200x1200 (1).png'

const Navbar = () => {
  return (
    <div>
      <img src={logoImg} alt="" />
      <i className="bi bi-search"></i>
      <i className="bi bi-list"></i>
      <div>
        <li>Home</li>
        <li>Products</li>
        <li>Community</li>
        <li>Support</li>
      </div>
    </div>
  );
}

export default Navbar