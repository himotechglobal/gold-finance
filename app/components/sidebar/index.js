import React from "react";

const Sidebar = ({ sidebarOpen }) => {
  let sidebarData = {
    btnText: ["BUY GOLD COIN", "BUY GOLD SHARE", "MINT NFT"],
    links: [
      {
        title: "OCTIONS",
        href: "/octions",
      },
      {
        title: "INFO",
        href: "/info",
      },
      {
        title: "NFT DASHBOARD",
        href: "/octions",
      },
    ],
  };

  return (
    <div
      className={`fixed top-16 left-0 h-full w-64 bg-[#202936] text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-5 flex flex-col gap-5">
        {sidebarData?.btnText?.map((btn, index) => (
          <button key={index} className="sidebtn text-[#c09028]">
            {btn}
          </button>
        ))}
      </div>

      <div className="my-10 flex flex-col gap-5">
        {sidebarData?.links?.map((obj, index) => (
          <button
            key={index}
            className="text-[#c09028] sidelink w-full py-[11px] text-[16px] text-white"
          >
            {obj.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
