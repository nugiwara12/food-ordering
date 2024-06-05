"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const NavbarOutside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownMenu, setIsDropDownMenu] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 mb-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <GiHamburgerMenu />
          </button>
          <a href="/" className="text-white text-2xl font-bold ml-2">
            <Image src="/logo/foodhub.png" alt="logo" width={40} height={40} />
          </a>
        </div>
        <div className={`md:flex items-center ${isOpen ? "block" : "hidden"}`}>
          <a
            href="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="text-white bg-gray-900"
          >
            Home
          </a>
          <a
            href="/Home/About"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="text-white bg-gray-900"
          >
            About
          </a>
          <div className="relative">
            <button
              href="/Home/Menu"
              className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="text-white bg-gray-900"
              onClick={() => setIsDropDownMenu((prev) => !prev)}
            >
              <span>Menu</span>
              {!isDropDownMenu ? (
                <FaChevronDown className="h-8 ml-2" />
              ) : (
                <FaChevronUp className="h-8 ml-2" />
              )}
            </button>
            {isDropDownMenu && (
              <div className="absolute top-12 left-3 bg-gray-200 rounded-lg p-4 w-40">
                <ul>
                  <li className="mb-4">
                    <a
                      href="/Home/Menu/Kapampangan"
                      className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-yellow-600"
                    >
                      <span className="link link-underline link-underline-black text-black">
                        {" "}
                        Kapampangan
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Home/Menu/Tagalog"
                      className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-yellow-600 hover:text-underline hover:text-yellow-600"
                    >
                      <span className="link link-underline link-underline-black text-black">
                        {" "}
                        Tagalog
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <div
            href="/login"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="text-white bg-gray-900"
          >
            Login
          </div>
          <div
            href="/register"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="text-white bg-gray-900"
          >
            Register
          </div>
          <div
            href="/cart"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="text-white bg-gray-900"
          >
            <IoCartOutline size="1.5em" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarOutside;
