import React from "react";
import NavbarOutside from "../../../../components/Navbar/NavbarOutside";

const Menu = () => {
  return (
    <>
      <NavbarOutside />
      <div className="flex justify-center mb-4 gap-4">
        <a
          href="/Home/Menu/Kapampangan"
          className="bg-gray-400 px-2 py-2 rounded-lg"
        >
          Kapampangan
        </a>
        <a href="#" className="bg-gray-400 px-2 py-2 rounded-lg">
          Tagalog
        </a>
        <a href="#" className="bg-gray-400 px-2 py-2 rounded-lg">
          Ilocano
        </a>
      </div>
      <div className="flex justify-center text-3xl font-bold">Menu Item</div>
    </>
  );
};

export default Menu;
