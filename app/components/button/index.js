import React from "react";

const Button = ({ text }) => {
  return (
    <div className="flex flex-1 justify-end whitespace-nowrap">
      <button className="navbtn">{text}</button>
    </div>
  );
};

export default Button;
