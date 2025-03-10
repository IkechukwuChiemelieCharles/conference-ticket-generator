import React from "react";

const Total = ({ bill, aveTot , tip}) => {
  return (
    <h1>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h1>
  );
};

export default Total;
