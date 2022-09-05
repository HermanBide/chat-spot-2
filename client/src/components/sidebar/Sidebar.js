import React from "react";
import "./Sidebar.css";
import {
  FaPinterest,
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg"src="https://iili.io/6ltIb1.md.jpg" alt="6ltIb1.md.jpg" />
        <p>lorem</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Events</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Health</li>
          <li className="sidebarListItem">Finance</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <FaFacebookSquare className="sidebar-icon" />
          <FaInstagramSquare className="sidebar-icon" />
          <FaPinterest className="sidebar-icon" />
          <FaTwitterSquare className="sidebar-icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
