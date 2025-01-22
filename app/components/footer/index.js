import React from "react";
import logo from "../../assets/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#202936] py-4 flex max-sm:items-center max-sm:gap-2 items-start px-[120px] text-white gap-10">
      <Image src={logo} alt="...logo" />
      <p>© 2023. All rights reserved</p>
    </div>
  );
};

export default Footer;
