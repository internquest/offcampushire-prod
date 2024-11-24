"use client";
import { useState } from "react";
import NavbarMenuDropdown from "./NavbarMenuDropdown";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/Group 85.svg'

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const closeMenu = () => {
    setIsMenuClicked(false);
  };

  return (
    <>
      <nav className="fixed top-0 z-[999]  w-full  rounded-md border border-gray-100 bg-gray-400 bg-opacity-10 bg-clip-padding backdrop-blur-sm backdrop-filter">
        <div className="relative flex flex-row items-center border-b border-gray-100 bg-[hsla(0,0%,100%,0.7)] backdrop-blur-[12px]">
          <div className="bg-white-700 relative z-30 mx-auto flex w-full flex-row items-center justify-between pl-1 pr-6 py-4 backdrop-blur-md xl:max-w-[1170px] xl:bg-transparent xl:px-0 xl:backdrop-filter-none">
            <div className="flex w-[162px] justify-start">
              <Link href="/" className="z-30 w-28">
                <Image
                  alt="logo"
                  width="112"
                  height="24"
                  className="z-30 aspect-[14/3] w-full"
                  style={{ color: "transparent" }}
                  src={logo}
                />
              </Link>
            </div>
            <div id="nav" className="t12:hidden flex-row items-center gap-4 leading-none flex">
              <Link href="/about">
                <div className="group flex items-center gap-1 font-semibold">
                  <div className="text-[rgba(2, 6, 23, 1)] z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-[14px] transition-all hover:bg-gray-100 hover:text-gray-900">
                    About us
                  </div>
                </div>
              </Link>
              <Link href="/students">
                <div className="group flex items-center gap-1 font-semibold">
                  <div className="text-[rgba(2, 6, 23, 1)] z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-[14px] transition-all hover:bg-gray-100 hover:text-gray-900">
                    For Students
                  </div>
                </div>
              </Link>
              <Link href="/colleges">
                <div className="group flex items-center gap-1 font-semibold">
                  <div className="text-[rgba(2, 6, 23, 1)] z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-[14px] transition-all hover:bg-gray-100 hover:text-gray-900">
                    College
                  </div>
                </div>
              </Link>
              <Link href="/ambassador">
                <div className="group flex items-center gap-1 font-semibold">
                  <div className="text-[rgba(2, 6, 23, 1)] z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-[14px] transition-all hover:bg-gray-100 hover:text-gray-900">
                    Ambassador
                  </div>
                </div>
              </Link>
              <Link href="/membership">
                <div className="group flex items-center gap-1 font-semibold">
                  <div className="text-[rgba(2, 6, 23, 1)] z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-[14px] transition-all hover:bg-gray-100 hover:text-gray-900">
                    Membership
                  </div>
                </div>
              </Link>
            </div>
            <div className="z-30 t12:hidden items-center gap-2 xl:flex">
              <button className="focus:shadow-purple group pointer-events-auto relative h-fit w-full rounded-lg transition-all">
                <span className="flex flex-row items-center justify-center gap-2 rounded-lg bg-transparent px-4 py-3 text-[14px] font-bold leading-none text-[#020617] transition-all hover:bg-gray-100 hover:text-gray-700 active:bg-gray-50 active:bg-clip-text active:text-blue-400 active:text-transparent active:shadow-md">
                  Sign in
                </span>
              </button>
              <Link href="/signup">
                <button className="group pointer-events-auto relative h-fit w-full rounded-lg transition-all hover:bg-blue-100 active:bg-blue-50">
                  <span className="from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 flex flex-row items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-custom-gradient px-4 py-3 text-[14px] font-bold leading-none text-[#FFFFFF] transition-all hover:bg-clip-text hover:text-transparent hover:shadow-lg">
                    Get Started
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <button
            className="absolute right-6 z-30 h-5 w-5 text-gray-700 t12:block hidden [&>*]:h-0.5 [&>*]:rounded-full [&>*]:bg-gray-700 [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out"
            onClick={handleMenuClick}
          >
            <div
              className={`w-5 ${isMenuClicked ? "translate-y-0.5 rotate-45" : "translate-y-2"} `}
            ></div>
            <div
              className={`${isMenuClicked ? "w-0 opacity-0" : "w-5 opacity-100"} `}
            ></div>
            <div
              className={`w-5 ${isMenuClicked ? "-translate-y-0.5 -rotate-45" : "-translate-y-2"} `}
            ></div>
          </button>
          {isMenuClicked && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
              <NavbarMenuDropdown
                isMenuClicked={isMenuClicked}
                closeMenu={closeMenu}
              />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
