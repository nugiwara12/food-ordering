import React from "react";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <section className="section-bg-image">
        <svg
          viewBox="0 0 1265 144"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 0 40 C 164 40 164 20 328 20 L 328 20 L 328 0 L 0 0 Z"
            strokeWidth="0"
          ></path>
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 327 20 C 445.5 20 445.5 89 564 89 L 564 89 L 564 0 L 327 0 Z"
            strokeWidth="0"
          ></path>
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 563 89 C 724.5 89 724.5 48 886 48 L 886 48 L 886 0 L 563 0 Z"
            strokeWidth="0"
          ></path>
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 885 48 C 1006.5 48 1006.5 67 1128 67 L 1128 67 L 1128 0 L 885 0 Z"
            strokeWidth="0"
          ></path>
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 1127 67 C 1196 67 1196 0 1265 0 L 1265 0 L 1265 0 L 1127 0 Z"
            strokeWidth="0"
          ></path>
        </svg>

        <div className="container">
          <div className="relative subscribe bg-white p-4 rounded-lg shadow-md">
            <p className="text-center text-xl font-bold mb-2">SUBSCRIBE</p>
            <input
              placeholder="Your e-mail"
              className="subscribe-input border-b border-gray-300 focus:border-indigo-500 outline-none bg-transparent py-1"
              name="email"
              type="email"
            />
            <div className="submit-btn bg-orange-500 text-white font-bold rounded-full py-2 px-4 absolute right-0 bottom-0 cursor-pointer transition duration-300 ease-in-out hover:bg-orange-600 shadow-md">
              SUBMIT
            </div>
          </div>
        </div>

        <svg
          viewBox="0 0 1265 144"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 0 40 C 164 40 164 20 328 20 L 328 20 L 328 0 L 0 0 Z"
            strokeWidth="0"
          ></path>
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 327 20 C 445.5 20 445.5 89 564 89 L 564 89 L 564 0 L 327 0 Z"
            strokeWidth="0"
          ></path>
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 563 89 C 724.5 89 724.5 48 886 48 L 886 48 L 886 0 L 563 0 Z"
            strokeWidth="0"
          ></path>
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 885 48 C 1006.5 48 1006.5 67 1128 67 L 1128 67 L 1128 0 L 885 0 Z"
            strokeWidth="0"
          ></path>
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 1127 67 C 1196 67 1196 0 1265 0 L 1265 0 L 1265 0 L 1127 0 Z"
            strokeWidth="0"
          ></path>
        </svg>
      </section>
    </>
  );
};

export default Contact;
