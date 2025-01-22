import React from "react";

const Button = ({ text }) => {
  return (
    <div className="flex flex-1 justify-center whitespace-nowrap w-full">
      <button className="navbtn max-lg:w-full">{text}</button>
    </div>
  );
};

export default Button;
