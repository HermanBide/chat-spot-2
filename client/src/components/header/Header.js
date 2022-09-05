import React from "react";
import Navbar from "../navigations/Navbar";
import "./Header.css";

const header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="headerImg-container">
        <img
          className="headerImg"
          src="https://iili.io/6lrKiB.md.jpg"
          alt="6lNqKJ.md.jpg"
        />
      </div>
    </div>
  );
};

export default header;
