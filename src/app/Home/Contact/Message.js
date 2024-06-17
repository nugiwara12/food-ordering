"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Message = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    // Trigger the success toast
    toast.success(
      "📧 Your Email has been sent! Thank you so much for reaching out.",
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };
  return (
    <>
      <ToastContainer />
      <div className="container mx-auto my-48 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-center rounded-lg shadow-lg md:shadow-yellow-600">
          <div className="mb-8 md:mb-0 w-full">
            <Image
              width={100}
              height={100}
              src="/contact/contact.gif"
              alt="Contact Image"
              className="w-full h-auto"
              unoptimized
            />
          </div>
          <div className="w-full md:w-full mr-0 md:mr-10">
            <div className="flex items-center justify-center min-h-screen">
              <form className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                <div className="mb-4 flex justify-center">
                  <MdOutlineMarkEmailUnread className="text-yellow-600 h-20 w-20" />
                </div>
                <div className="note mb-4 text-center">
                  <label className="title block text-xl font-semibold mb-2">
                    Subscribe for updates
                  </label>
                  <span className="subtitle block text-gray-600">
                    I hope this message finds you well.
                  </span>
                </div>
                <input
                  placeholder="Enter your name"
                  title="Enter your name"
                  name="name"
                  type="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input_field appearance-none w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
                <input
                  placeholder="Enter your e-mail"
                  title="Enter your e-mail"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input_field appearance-none w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
                <textarea
                  placeholder="Enter your message"
                  title="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea_field appearance-none w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  rows="4"
                ></textarea>
                <button
                  className="submit w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSendEmail}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
