import React, { useState } from "react";
import KapampanganModal from "../MenuModal/KapampanganModal";

const KapampanganButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <button
          type="button"
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Order Now
        </button>
        <KapampanganModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
    </>
  );
};

export default KapampanganButton;
