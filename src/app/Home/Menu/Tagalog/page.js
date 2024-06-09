"use client";
import React, { useState } from "react";
import NavbarOutside from "../../../../../components/Navbar/NavbarOutside";
import KapampanganModal from "../../../../../components/MenuModal/KapampanganModal";
import KapampanganButton from "../../../../../components/Button/KapampanganButton";
import Image from "next/image";

const Tagalog = () => {
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
            src="/menu/Tagalog/sour-pork.png"
            alt="Sour-Pork"
            className="h-40 w-40"
          />
          <h2 className="text-lg font-bold mt-2">Sour-Pork</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Sour-Pork")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <Image
            height={200}
            width={200}
            src="/menu/Tagalog/bulalo.png"
            alt="Sour-Pork"
            className="h-40 w-40"
          />
          <h2 className="text-lg font-bold mt-2">Bulalo</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Bulalo")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <Image
            height={200}
            width={200}
            src="/menu/Tagalog/kare-kare.png"
            alt="Bulalo"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Kare-Kare</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Kare-Kare")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <Image
            height={200}
            width={200}
            src="/menu/Tagalog/letchon.png"
            alt="Letchon"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Letchon</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Letchon")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <Image
            height={200}
            width={200}
            src="/menu/Tagalog/liampo.png"
            alt="Liampo"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Liampo</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Liampo")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <Image
            height={200}
            width={200}
            src="/menu/Tagalog/pancit.png"
            alt="Pancit"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Pancit Canton</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Pancit")} />
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

export default Tagalog;
