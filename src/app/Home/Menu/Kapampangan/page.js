"use client";
import React, { useState } from "react";
import NavbarOutside from "../../../../../components/Navbar/NavbarOutside";
import KapampanganModal from "../../../../../components/MenuModal/KapampanganModal";
import KapampanganButton from "../../../../../components/Button/KapampanganButton";

const Kapampangan = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setShowModal(true);
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

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
          <KapampanganButton onClick={() => handleOpenModal("Adobo")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <img
            src="/menu/kapampangan/sinigang.png"
            alt="Sinigang"
            className="h-40 w-40"
          />
          <h2 className="text-lg font-bold mt-2">Kaldereta</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Kaldereta")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <img
            src="/menu/kapampangan/Kaldereta.png"
            alt="kaldereta"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Kaldereta</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Kaldereta")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <img
            src="/menu/kapampangan/sisig.png"
            alt="Sisig"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Sisig</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Sisig")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <img
            src="/menu/kapampangan/sinampalukan.png"
            alt="Sinampalukang Manok"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Buro</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Buro")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <img
            src="/menu/kapampangan/buro.png"
            alt="Buro"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Buro</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Buro")} />
        </div>
        {/* other menu items */}
        {showModal && (
          <KapampanganModal
            isVisible={showModal}
            onClose={handleCloseModal}
            item={selectedItem}
          />
        )}
      </div>
    </>
  );
};

export default Kapampangan;
