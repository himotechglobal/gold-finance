import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="px-[10%] py-[25px] max-xl:flex max-xl:justify-center">
      {children}
    </div>
  );
};

export default Wrapper;
