import { useState } from "react";

import Header from "./components/conference/Header";
import Form from "./components/conference/Form";
import Display from "./components/conference/Display";
import Logo from "./components/conference/Logo";

export default function App() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [gitErr, setGitErr] = useState(false);
  const [github, setGithub] = useState("");
  const [openDisplay, setOpenDisplay] = useState(null);
  const [selectedFile, setSelectedFile] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const [showContainer, setShowContainer] = useState(true);

  function createTicket() {
    console.log("clicked");
    fname && email !== "" ? setOpenDisplay(!openDisplay) : "";
    fname && email !== "" ? setShowContainer(!showContainer) : "";
  }
  function validateEmail(email) {
    const emailRegex = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function handleChange(e) {
    const emailValue = e.target.value;
    if (!validateEmail(emailValue)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    setEmail(emailValue);
  }

  function handleSubmit(e) {
    if (!validateEmail(email)) {
      setEmailErr(true);
      // setGitErr(true);
      // setNameErr(true);

      setShowContainer(showContainer);
      setOpenDisplay(openDisplay);
      console.log("true");
    } else {
      setEmailErr(false);

      setShowContainer(!showContainer);
      setOpenDisplay(!openDisplay);
      // setShowContainer(null);
    }
    if (github == "") {
      setGitErr(true);
      setShowContainer(showContainer);
      setOpenDisplay(openDisplay);
    }
    if (fname == "") {
      setNameErr(true);
      setShowContainer(showContainer);
      setOpenDisplay(openDisplay);
    }

    if (!imageUrl) {
      setError("Required: Upload your photo (JPG or PNG, max size: 500KB)");
      setShowContainer(showContainer);
      setOpenDisplay(openDisplay);
    }
  }

  function handleImgChange(event) {
    event.preventDefault();

    const file = event.target.files[0];

    if (file && validateFile(file)) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  }

  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    if (file && validateFile(file)) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const [error, setError] = useState(""); // State to store error messages
  const maxSize = 500 * 1024; // 5kb in bytes

  const validateFile = (file) => {
    if (!file) return false;

    // if (file.)

    const validTypes = ["image/jpeg", "image/png"];

    if (!validTypes.includes(file.type)) {
      setError("Only JPG and PNG files are allowed.");
      return false;
    }

    if (file.size > maxSize) {
      setError("File size must not exceed 500KB.");
      return false;
    }

    setError(""); // Clear any previous error
    return true;
  };

  function removeImg() {
    setImageUrl(null);
    setError("");
  }

  return (
    <div className="container" style={{ height: showContainer ? "" : "100vh" }}>
      <Logo />
      {showContainer && (
        <div className="div">
          <Header />
          <Form
            fname={fname}
            email={email}
            github={github}
            setFname={setFname}
            setEmail={setEmail}
            emailErr={emailErr}
            nameErr={nameErr}
            gitErr={gitErr}
            setGithub={setGithub}
            createTicket={createTicket}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            handleImgChange={handleImgChange}
            imageUrl={imageUrl}
            validateEmail={validateEmail}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setImageUrl={setImageUrl}
            removeImg={removeImg}
            validateFile={validateFile}
            handleDrop={handleDrop}
            error={error}
          />
        </div>
      )}
      {openDisplay && (
        <Display
          fname={fname}
          email={email}
          github={github}
          selectedFile={selectedFile}
          imageUrl={imageUrl}
        />
      )}

      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/IkechukwuChiemelieCharles">
          Charlie X
        </a>
        .
      </div>
    </div>
  );
}
