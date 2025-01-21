import React from "react";

const Button = ({ text }) => {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <button className="navbtn hidden lg:block ">{text}</button>
    </div>
  );
};

export default Button;
