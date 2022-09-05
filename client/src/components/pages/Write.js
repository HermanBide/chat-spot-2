import React from "react";
import "./Write.css";
import { GrFormAdd } from "react-icons/gr";

const Write = () => {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://iili.io/6Me4hx.md.jpg"
        alt="6Me4hx.md.jpg"
      ></img>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <GrFormAdd className="writeIcon" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>

        <div className="writeFromGroup">
          <textarea
            placeholder="Write your blog..."
            type="text"
            className="writeText writeInput"
          ></textarea>
        </div>
        <button className="submit"> Publish</button>
      </form>
    </div>
  );
};

export default Write;
