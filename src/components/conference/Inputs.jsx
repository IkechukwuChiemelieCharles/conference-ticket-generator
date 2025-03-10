import React from "react";

const Inputs = ({
  children,
  type,
  fname,
  email,
  github,
  init,
  setInit,
  placeholder,
}) => {
  return (
    <div className="inputs">
      <label htmlFor="">{children}</label>
      <input
        type={type}
        value={init}
        onChange={(e) => setInit(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Inputs;
