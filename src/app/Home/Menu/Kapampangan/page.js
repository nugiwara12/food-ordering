import React from "react";
import NavbarOutside from "../../../../../components/Navbar/NavbarOutside";
import { BiArrowBack } from "react-icons/bi";

const Kapampangan = () => {
  return (
    <>
      <NavbarOutside />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4 aspect-auto">
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <img
            src="/menu/kapampangan/adobo.png"
            alt="Adobo"
            className="h-40 w-40"
          />
          <h2 className="text-lg font-bold mt-2">Adobo</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Order Now
          </button>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <img
            src="/menu/kapampangan/adobo.png"
            alt="Sinigang"
            className="h-40 w-40"
          />
          <h2 className="text-lg font-bold mt-2">Sinigang</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Order Now
          </button>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <img
            src="/menu/kapampangan/sisig.png"
            alt="Leche Flan"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Sisig</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Order Now
          </button>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <img
            src="/menu/kapampangan/sisig.png"
            alt="Leche Flan"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Sisig</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Order Now
          </button>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <img
            src="/menu/kapampangan/sisig.png"
            alt="Leche Flan"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Sisig</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Order Now
          </button>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <img
            src="/menu/kapampangan/sisig.png"
            alt="Leche Flan"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Sisig</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Kapampangan;
