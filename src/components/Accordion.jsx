import React, { useState } from "react";

const faqs = [
  {
    title: "Where are hese chairs assembled",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, ratione? ",
  },
  {
    title: "How long do I have to return my chair",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, ratione? ",
  },
  {
    title: "Do you sgip countries outside the EU",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, ratione? ",
  },
];

const Accordion = () => {
  const [acc, setAcc] = useState(false);

  function handleToggle() {
    setAcc((acc) => !acc);
  }

  return (
    <div>
      <ul>
        {faqs.map((faq) => (
          <AccList faq={faq} key={faq.title} acc={acc} onClick={handleToggle} />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;

function AccList({ faq, acc, onClick }) {
  return (
    <>
      <li onClick={() => onclick}>{faq.title} </li>

      {acc ? <li>{faq.text}</li> : ""}
    </>
  );
}
