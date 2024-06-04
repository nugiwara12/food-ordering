"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

const NavbarOutside = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <a to="/" className="text-white text-2xl font-bold ml-2">
            <Image src="/logo/foodhub.png" alt="logo" width={40} height={40} />
          </a>
        </div>
        <div className={`md:flex items-center ${isOpen ? "block" : "hidden"}`}>
          <div
            href="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="text-white bg-gray-900"
          >
            Home
          </div>
          <a
            href="/Home/About"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="text-white bg-gray-900"
          >
            About
          </a>
          <a
            href="/Home/Menu"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="text-white bg-gray-900"
          >
            Menu
          </a>
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
