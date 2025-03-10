import { useState } from "react";
import Steps from "./components/Steps";
import Accordion from "./components/Accordion";
import Bill from "./components/TipCalc/Bill";
import PercentageInput from "./components/TipCalc/PercentageInput";
import Total from "./components/TipCalc/Total";
import Reset from "./components/TipCalc/Reset";

import Header from "./components/conference/Header";
import Form from "./components/conference/Form";
import Display from "./components/conference/Display";
import Logo from "./components/conference/Logo";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  const [bill, setBill] = useState("");
  const [perc, setPerc] = useState(0);
  const [secperc, setSecPerc] = useState(0);

  const tip = bill * ((perc + secperc) / 2 / 100);

  function handleReset() {
    setBill("");
    setPerc(0);
    setSecPerc(0);
  }

  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
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
      setShowContainer(showContainer);
      setOpenDisplay(openDisplay);
      console.log("true");
    } else {
      setEmailErr(false);
      console.log("false");
      setShowContainer(!showContainer);
      setOpenDisplay(!openDisplay);
      // setShowContainer(null);
    }
  }

  function handleImgChange(event) {
    event.preventDefault();
    // setSelectedFile(e.target.files[0]);
    const file = event.target.files[0];

    // setImageUrl(URL.createObjectURL(event.target.files[0]));

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
      {/* <Bill bill={bill} setBill={setBill} />
      <PercentageInput perc={perc} setPerc={setPerc}>
        How do you like the service{" "}
      </PercentageInput>
      <PercentageInput perc={secperc} setPerc={setSecPerc}>
        How did your friend like the service{" "}
      </PercentageInput>
      {bill > 0 ? (
        <>
          {" "}
          <Total bill={bill} perc={perc} secperc={secperc} tip={tip} />{" "}
          <Reset onClick={handleReset} />{" "}
        </>
      ) : (
        ""
      )} */}
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // const [ranger, setRanger] = useState("");

  // const date = new Date("june 21 2027");

  Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());

    date.setDate(date.getDate() + days);
    return date;
  };

  let date = new Date();
  console.log(date);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>

        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
        <br />

        <button onClick={() => setCount((s) => s - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((s) => s + step)}>+</button>

        <p>
          {count === 0
            ? `Today is ${date.addDays(count)}`
            : count < 0
            ? `${count} days ago was ${date.addDays(count)}`
            : `${Number(count)} days from now is ${date.addDays(count)}`}{" "}
        </p>

        {count !== 0 || step !== 1 ? (
          <button onClick={handleReset}>Reset</button>
        ) : null}
      </div>
    </div>
  );
}

function FlashCards() {
  const [secid, setSecid] = useState(null);

  function handleFlash(id) {
    setSecid(id !== secid ? id : null);
  }
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          onClick={() => handleFlash(question.id)}
          className={question.id === secid ? "selected" : ""}
        >
          <p>{question.id === secid ? question.answer : question.question} </p>
        </div>
      ))}
    </div>
  );
}

// function Card({ quest }) {
//   return (
//     <div>
//       <p>{quest.question}</p>{" "}
//     </div>
//   );
// }
