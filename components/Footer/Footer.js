import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer
      className="w-full py-6 md:py-10 mt-24 md:mt-32 px-4 md:px-8 lg:px-20 bg-center"
      style={{ backgroundImage: 'url("/logo/background.jpg")' }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center md:items-start">
          {" "}
          {/* Adjusted alignment */}
          <img
            src="/logo/foodhub.png"
            alt="logo"
            width={150}
            height={150}
            className="mb-4"
          />{" "}
          {/* Adjusted width */}
          <p className="text-white text-sm md:text-base mb-4 font-normal text-center md:text-left">
            {" "}
            {/* Adjusted font size and alignment */}
            We build and customize software solutions and business applications.
          </p>
          <div className="flex justify-center md:justify-start text-white">
            {" "}
            {/* Adjusted alignment */}
            <a href="#" className="mr-4 hover:underline">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:underline">
              <IoLogoLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="py-4 text-lg font-bold text-white">Quick Links</h2>
          <ul className="text-white text-md font-thin">
            <li className="mb-2 md:mb-4">
              {" "}
              {/* Adjusted spacing */}
              <a href="#" className="font-normal hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2 md:mb-4">
              {" "}
              {/* Adjusted spacing */}
              <a href="#" className="font-normal hover:underline">
                Service
              </a>
            </li>
            <li className="mb-2 md:mb-4">
              {" "}
              {/* Adjusted spacing */}
              <a href="#" className="font-normal hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="py-4 text-lg font-bold text-white">Lets talk</h2>
          <ul className="text-white text-md">
            <li className="mb-2 md:mb-4">
              {" "}
              {/* Adjusted spacing */}
              <p className="font-normal hover:underline">+63 928 486 2519</p>
            </li>
            <li className="mb-2 md:mb-4">
              {" "}
              {/* Adjusted spacing */}
              <a href="#" className="text-wrap font-normal hover:underline">
                foodhub@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="py-4 text-lg font-bold text-white">Location</h2>
          <ul className="text-white text-md">
            <li className="mb-2 md:mb-4">
              {" "}
              {/* Adjusted spacing */}
              <p className="font-normal hover:underline">
                Unit No. 204, 2nd Floor KACC Philmade Building, Lot 1 & 2 corner
                Jose Abad Santos Avenue and E. Quirino st., Clark Freeport Zone,
                Philippines
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
