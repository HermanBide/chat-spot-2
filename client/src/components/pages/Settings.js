import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Settings.css";
import { FaUserCircle } from 'react-icons/fa'

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle"></span>
          <span className="settingsDeleteTitle"></span>
        </div>

        <form className="settingsForm">
            <label>Profile picture</label>
            <div className="settingsPP">
                <img className="settingsImg" src="https://iili.io/6Me4hx.md.jpg" alt="6Me4hx.md.jpg" />
                <label htmlFor="fileInput">
                    <FaUserCircle className="settingsPPIcon" />
                </label>
                <input type="file" id="fileInput" style={{display: "none"}} />
            </div>

            <label>Username</label>
            <input type="text" placeholder="name.."/>
            <label>Email</label>
            <input type="email" placeholder="Email.."/>
            <label>Poassword</label>
            <input type="password" placeholder="name.."/>
            <button className="settingsUpdateButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
