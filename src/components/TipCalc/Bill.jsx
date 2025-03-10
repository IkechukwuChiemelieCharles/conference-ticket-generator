import React, { useState } from "react";

const Bill = ({ bill, setBill }) => {
  return (
    <div>
      <span>How much was the bill? </span>
      <input
        placeholder="Bill value"
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
};

export default Bill;
