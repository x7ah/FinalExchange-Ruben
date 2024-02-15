import React from "react";
import "./styles/MyInput.css";

export default function MyInput({ type, title, label, onChange }) {
  return (
    <label>
      {label}
      <input type={type} placeholder={title} onChange={onChange}/>
    </label>
  );
}
