import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <span className="Audio">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <i className="fas fa-volume-up"></i>
        </a>
      </span>
      <span className="Text">/{props.phonetic.text}/</span>
    </div>
  );
}
