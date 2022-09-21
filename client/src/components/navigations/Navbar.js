import React from "react";
import "./Navbar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  FaPinterest,
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <div className="navigation">
      <div className="top-left">
        {/* <img src="https://freeimage.host/i/6lj4hF" alt="profile"  className='nav-img'/> */}
        {user ? (
          <img
            src="https://iili.io/6lj4hF.jpg"
            alt="6lj4hF.jpg"
            border="0"
            className="nav-img"
          />
        ) : (
          <ul className="nav-link">
          <li className="topListItem">

          <Link
            className="link"
            style={{ textDecoration: "none", color: "inherit" }}
            to="/login"
          >
            Login
          </Link>
          </li>
          
          <li className="topListItem">

          <Link
            className="link"
            style={{ textDecoration: "none", color: "inherit" }}
            to="/signup"
          >
            Signup
          </Link>
          </li>
          </ul>
        )}
      </div>
      <div className="top-center">
        <ul className="nav-link">
          <li className="topListItem">
            {" "}
            <Link
              className="link"
              style={{ textDecoration: "none", color: "inherit" }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link
              className="link"
              style={{ textDecoration: "none", color: "inherit" }}
              to="/"
            >
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link
              className="link"
              style={{ textDecoration: "none", color: "inherit" }}
              to="/"
            >
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link
              className="link"
              style={{ textDecoration: "none", color: "inherit" }}
              to="/"
            >
              WRITE
            </Link>
          </li>
          <BiSearchAlt2 className="nav-searchIcon" />
        </ul>
      </div>
      <div className="top-right">
        <FaFacebookSquare className="nav-icon" />
        <FaInstagramSquare className="nav-icon" />
        <FaPinterest className="nav-icon" />
        <FaTwitterSquare className="nav-icon" />
        {user ? (
          <button className="nav-button">logout</button>
        ) : (
          <Link
            className="link"
            style={{ textDecoration: "none", color: "inherit" }}
            to="/"
          ></Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
