import React, { useState, useEffect } from "react";
import axios from "axios"
import "./Sidebar.css";
import {
  FaPinterest,
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom"

const Sidebar = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/cat")
      setCats(res.data)
    }
    getCats()
  },[])
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
        {cats.map(cat => (
          <Link to={`/?cat=${cat.name}`} style={{ textDeoration: "none", color:"inherit"}}>

          <li className="sidebarListItem">{cat.name}</li>
          </Link>
        ))}
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
