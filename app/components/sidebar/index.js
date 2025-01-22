import React from "react";
import Button from "../button";

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
      {
        title: "Dashboard",
        href: "/dashboard",
      },
      {
        title: "FARM",
        href: "/farm",
      },
      {
        title: "BOARDROOM",
        href: "/boardroom",
      },
      {
        title: "BASED DEX",
        href: "/based-dex",
      },
    ],
  };

  let isMobile = window.innerWidth < 1024;

  return (
    <div
      className={`sidebar-container fixed top-12 xl:top-[62px] left-0 h-full w-64 bg-[#202936] text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } overflow-y-auto`}
    >
      <div className="p-5 flex flex-col gap-5 items-center">
        {sidebarData?.btnText?.map((btn, index) => (
          <button key={index} className="sidebtn text-[#c09028]">
            {btn}
          </button>
        ))}

        <div className="max-lg:block hidden w-[200px]">
          <Button text={"Connect"} />
        </div>
      </div>

      <div className="my-10 flex flex-col gap-5">
        {!isMobile
          ? sidebarData?.links.slice(0, 3).map((obj, index) => (
              <button
                key={index}
                className="sidelink w-full py-[11px] text-[16px] text-white"
              >
                {obj.title}
              </button>
            ))
          : sidebarData?.links?.map((obj, index) => (
              <button
                key={index}
                className="sidelink w-full py-[11px] text-[16px] text-white"
              >
                {obj.title}
              </button>
            ))}
      </div>
    </div>
  );
};

export default Sidebar;
