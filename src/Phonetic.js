import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <span className="Audio">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Pronunciation
        </a>
      </span>
      <span className="Text"> ({props.phonetic.text})</span>
    </div>
  );
}
