import React from "react";
import Logo from "./Logo";

const Display = ({
  fname,
  email,
  github,
  openDisplay,
  selectedFile,
  imageUrl,
  randomNum,
}) => {
  return (
    <div className="display">
      <div className="text">
        <h1>
          Congrats, <span>{fname}</span> ! Your ticket is ready.
        </h1>
        <p>
          We have emailed your ticket to,<span> {email}</span> and will send
          updates in the run up to the event.
        </p>
      </div>

      <div className="img">
        <div className="logoXdate">
          <Logo />
          <p>Jan 31, 2025 / Austin, TX</p>
        </div>

        <div className="ImgXname">
          <img className="uploadedImg" src={imageUrl} alt="img" />

          <div className="name">
            <h2>{fname}</h2>
            <p>
              <img src="\assets\images\icon-github.svg" alt="" /> {github}
            </p>
          </div>
        </div>
        <p className="randomNum">#{randomNum}</p>
      </div>
    </div>
  );
};

export default Display;
