import React, { Children, useState } from "react";

const PercentageInput = ({ perc, setPerc, children }) => {
  return (
    <div>
      <span>{children}</span>
      <select
        name="service"
        id=""
        value={perc}
        onChange={(e) => setPerc(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely Amazing (20%)</option>
      </select>
      <br />
    </div>
  );
};

export default PercentageInput;
