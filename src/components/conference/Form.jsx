import React, { useState } from "react";
import Inputs from "./Inputs";

const Form = ({
  fname,
  email,
  github,
  setFname,
  setEmail,
  setGithub,
  createTicket,
  selectedFile,
  setSelectedFile,
  handleImgChange,
  imageUrl,
  validateEmail,
  handleChange,
  emailErr,
  setEmailErr,
  handleSubmit,
}) => {
  // function validateEmailOnclick() {
  // }

  function removeImg() {
    imageUrl === null;
  }

  return (
    <form>
      <div className="upload">
        <label>Upload Avatar</label>
        <div className="uploadArea">
          {imageUrl === null ? (
            <div className="uploadCont">
              <div className="iconCont">
                <label htmlFor="fileInput">
                  <img src="./public/assets/images/icon-upload.svg" alt="" />
                </label>
              </div>

              <div></div>

              <input
                // value={selectedFile}
                type="file"
                id="fileInput"
                onChange={handleImgChange}
              />
              <p>Drag and Drop to upload</p>
            </div>
          ) : (
            <div className="uploadedImgXchange">
              <img src={imageUrl} alt="" />
              <div className="removeXchange">
                <button onClick={removeImg} className="remove">
                  Remove image
                </button>

                <div>
                  <label htmlFor="fileInput">
                    <button>Change image</button>
                  </label>
                </div>
                <div></div>

                <input
                  // value={selectedFile}
                  type="file"
                  id="fileInput"
                  onChange={handleImgChange}
                />
                {/* <button onClick={handleImgChange}>Change image</button> */}
              </div>
            </div>
          )}
        </div>
        <span className="info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              stroke="#D1D0D5"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
            />
            <path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
            <path
              stroke="#D1D0D5"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.004 10.462V7.596M8 5.569v-.042"
            />
          </svg>{" "}
          Upload your photo (JPG or PNG, max size: 5MB)
        </span>
      </div>

      <Inputs type="text" init={fname} setInit={setFname}>
        {" "}
        Full Name
      </Inputs>
      {/* <Inputs
        type="email"
        init={email}
        setInit={setEmail}
        placeholder="example@email.com"
      >
        {" "}
        Email Address
      </Inputs> */}

      <div className="emailInput">
        <label htmlFor="">Email Address</label>

        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          style={{
            border: emailErr ? "1px solid hsl(7, 71%, 60%)" : "",
          }}
        />

        {emailErr && (
          <span className="emailErr">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke="hsl(7, 71%, 60%)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
              />
              <path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
              <path
                stroke="hsl(7, 71%, 60%)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.004 10.462V7.596M8 5.569v-.042"
              />
            </svg>{" "}
            Please enter a valid email address
          </span>
        )}
      </div>
      <Inputs
        type="text"
        init={github}
        setInit={setGithub}
        placeholder="@yourusername"
      >
        {" "}
        GitHub Username
      </Inputs>
      <button
        className="generate"
        onClick={(e) => {
          e.preventDefault();
          createTicket();
          // validateEmailOnclick();
          handleSubmit();
        }}
      >
        Generate My Ticket
      </button>
    </form>
  );
};

export default Form;
