import React from "react";
import "./Navbar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  FaPinterest,
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navigation">
      <div className="top-left">
        {/* <img src="https://freeimage.host/i/6lj4hF" alt="profile"  className='nav-img'/> */}
        <img
          src="https://iili.io/6lj4hF.jpg"
          alt="6lj4hF.jpg"
          border="0"
          className="nav-img"
        />
        LOGO
      </div>
      <div className="top-center">
        <ul className="nav-link">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <BiSearchAlt2 className="nav-searchIcon" />
        </ul>
      </div>
      <div className="top-right">
        <FaFacebookSquare className="nav-icon" />
        <FaInstagramSquare className="nav-icon" />
        <FaPinterest className="nav-icon" />
        <FaTwitterSquare className="nav-icon" />
        <button className="nav-button">logout</button>
      </div>
    </div>
  );
};

export default Navbar;
