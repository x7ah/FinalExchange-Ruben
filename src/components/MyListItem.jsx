import React from "react";
import "./styles/MyListItem.css";

export default function MyListItem() {
  return (
    <div className="item">
      <div className="ori">
        <img
          src="./img/flags/us.png"
          style={{
            width: "40px",
          }}
        />
        <small>US Dollar</small>
        <small>20.03293232</small>
      </div>
      <button className="delete">
        <i class="ri-delete-bin-line"></i>
      </button>
      <div className="des">
        <img
          src="./img/flags/au.png"
          style={{
            width: "40px",
          }}
        />
        <small>Australian Dollar</small>
        <small>34.9899076</small>
      </div>
    </div>
  );
}