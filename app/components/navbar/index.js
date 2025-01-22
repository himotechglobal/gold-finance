"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import ham from "../../assets/ham.svg";
import Link from "next/link";
import Sidebar from "../sidebar";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "FARM", href: "/farm" },
  { name: "BOARDROOM", href: "/boardroom" },
  { name: "BASED DEX", href: "/based-dex" },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="bg-[#202936] fixed top-0 w-full">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        >
          <div className="flex lg:flex-1 items-center gap-5">
            <div onClick={() => setSidebarOpen((prev) => !prev)}>
              <Image
                src={ham}
                width={24}
                height={24}
                className="cursor-pointer"
                alt="...ham"
              />
            </div>
            <Link href="#" className="-m-1.5 p-1.5">
              <Image src={logo} alt="...logo" />
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-white headerLink"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex flex-1 justify-end">
            <button className="navbtn">Connect</button>
          </div>
        </nav>
      </header>
      <Sidebar sidebarOpen={sidebarOpen} />
    </>
  );
}
