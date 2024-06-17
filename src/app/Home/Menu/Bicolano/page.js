"use client";
import React, { useState } from "react";
import NavbarOutside from "../../../../../components/Navbar/NavbarOutside";
import KapampanganModal from "../../../../../components/MenuModal/KapampanganModal";
import KapampanganButton from "../../../../../components/Button/KapampanganButton";
import Image from "next/image";

const Bicolano = () => {
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
            src="/menu/bicolano/bicol-express.png"
            alt="Bicol Express"
            className="h-40 w-40"
          />
          <h2 className="text-lg font-bold mt-2">Bicol Express</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Bico-Express")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <Image
            height={200}
            width={200}
            src="/menu/bicolano/ginatang-santonl.png"
            alt="Ginatang-Santol"
            className="h-40 w-40"
          />
          <h2 className="text-lg font-bold mt-2">Ginatang Santol</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton
            onClick={() => handleOpenModal("Ginatang-Santol")}
          />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <Image
            height={200}
            width={200}
            src="/menu/bicolano/kandingga.png"
            alt="Kandingga"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Kandingga</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Kandingga")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <Image
            height={200}
            width={200}
            src="/menu/bicolano/kinunot.png"
            alt="Kinunot"
            className="h-48 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Kinunot</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Kinunot")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <Image
            height={200}
            width={200}
            src="/menu/bicolano/laing.png"
            alt="Laing"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Laing</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Laing")} />
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 transition-colors duration-300 ease-in-out hover:bg-white shadow-lg hover:shadow-lg p-4">
          <Image
            height={200}
            width={200}
            src="/menu/bicolano/pancit-bato.png"
            alt="Pancit Bato"
            className="h-36 w-40 rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">Pancit Bato</h2>
          <p className="text-sm text-gray-600 mb-4">A classic Filipino dish</p>
          <KapampanganButton onClick={() => handleOpenModal("Pancit-Bato")} />
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

export default Bicolano;
