"use client";
import React, { useState } from "react";
import NavbarOutside from "../../../../../components/Navbar/NavbarOutside";
import KapampanganModal from "../../../../../components/MenuModal/KapampanganModal";
import KapampanganButton from "../../../../../components/Button/KapampanganButton";
import Image from "next/image";

const Ilocano = () => {
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
          <Image
            height={200}
            width={200}
            src="/menu/ilocano/bagnet.png"
            alt="Bagnet"
            className="h-40 w-40"
          />
          <h2 className="text-lg font-bold mt-2">Bagnet</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Bagnet")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <Image
            height={200}
            width={200}
            src="/menu/ilocano/dinakdakan.png"
            alt="Dinakdakan"
            className="h-40 w-40"
          />
          <h2 className="text-lg font-bold mt-2">Dinakdakan</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Dinakdakan")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <Image
            height={200}
            width={200}
            src="/menu/ilocano/dinengdeng.png"
            alt="Dinengdeng"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Dinengdeng</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Dinengdeng")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <Image
            height={200}
            width={200}
            src="/menu/ilocano/igado.png"
            alt="Igado"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Igado</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Igado")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <Image
            height={200}
            width={200}
            src="/menu/ilocano/pakbet.png"
            alt="Pakbet"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Pakbet</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Pakbet")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <Image
            height={200}
            width={200}
            src="/menu/ilocano/longganisa.png"
            alt="Longganisa"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Longganisa</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Longganisa")} />
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

export default Ilocano;
