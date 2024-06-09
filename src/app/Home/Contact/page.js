import React from "react";
import { MdOutlineMail } from "react-icons/md";
import Navbar from "../../../../components/Navbar/NavbarOutside";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-48 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-center rounded-lg shadow-lg md:shadow-yellow-600">
          <div className="mb-8 md:mb-0 md:w-full">
            <Image
              width={100}
              height={100}
              src="/contact/contact.gif"
              alt="Contact Image"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10">
            <h1 className="text-3xl font-bold text-black font-tight">
              Send Message
            </h1>
            <form className="max-w-md mt-4">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6">
                  <input
                    className="appearance-none block w-full text-gray-700 border-b border-gray-400 rounded-none px-4 mb-3 leading-tight font-tight focus:outline-none focus:bg-white"
                    placeholder="First Name"
                    id="first-name"
                    type="text"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                  <input
                    className="appearance-none block w-full text-black border-b border-gray-400 rounded-none px-4 mb-3 leading-tight font-tight focus:outline-none focus:bg-white"
                    placeholder="Last Name"
                    id="last-name"
                    type="text"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                  <input
                    className="appearance-none block w-full text-gray-700 border-b border-gray-400 rounded-none px-4 mb-3 leading-tight font-tight focus:outline-none focus:bg-white"
                    placeholder="Email"
                    id="email"
                    type="email"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                  <input
                    className="appearance-none block w-full text-gray-700 border-b border-gray-400 rounded-none px-4 mb-3 leading-tight font-tight focus:outline-none focus:bg-white"
                    placeholder="Mobile Number"
                    id="mobile-number"
                    type="tel"
                  />
                </div>

                <div className="w-full px-3 mb-6">
                  <label
                    className="appearance-none block w-full text-gray-400 px-4 mb-3 leading-tight focus:outline-none font-tight focus:bg-white"
                    htmlFor="how-can-we-help"
                  >
                    How can we help?
                  </label>
                  <textarea
                    className="appearance-none block w-full text-gray-700 border-b border-gray-400 rounded-none px-4 mb-3 leading-tight font-tight focus:outline-none focus:bg-white"
                    id="how-can-we-help"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button
                  className="shadow bg-yellow-600 hover:bg-yellow-700 focus:shadow-outline-blue focus:outline-none text-white font-bold py-2 px-4 mr-4 mb-4 rounded"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
