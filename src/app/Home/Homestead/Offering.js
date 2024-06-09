import React from "react";

const Offering = () => {
  return (
    <>
      <section className="text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Special Offers
          </h1>
          <p className="text-center text-lg md:text-2xl mb-6 break-words">
            To satisfy your appetites, FoodHub provides scrumptious, freshly
            prepared dishes. A favorite for delicious food that combines
            tradition and flavor, making you fall in love with every bite.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Offer cards go here */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 text-black">
                Customer Support
              </h2>
              <p className="text-gray-600 mb-4">
                Responsive customer support to address inquiries, complaints, or
                special requests.
              </p>
              <div className="flex items-center justify-between">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Get Offer
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 text-black">
                Delivery Options
              </h2>
              <p className="text-gray-600 mb-4">
                Flexible delivery options including scheduled delivery, express
                delivery, or pickup.
              </p>
              <div className="flex items-center justify-between">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Get Offer
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 text-black">
                Special Offer
              </h2>
              <p className="text-gray-600 mb-4">
                Discounts, promotions, and special deals on selected items or
                orders.
              </p>
              <div className="flex items-center justify-between">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Get Offer
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 text-black">
                Special Offer
              </h2>
              <p className="text-gray-600 mb-4">
                Discounts, promotions, and special deals on selected items or
                orders.
              </p>
              <div className="flex items-center justify-between">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Get Offer
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 text-black">
                Customer Support
              </h2>
              <p className="text-gray-600 mb-4">
                Responsive customer support to address inquiries, complaints, or
                special requests.
              </p>
              <div className="flex items-center justify-between">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Get Offer
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 text-black">
                Delivery Options
              </h2>
              <p className="text-gray-600 mb-4">
                Flexible delivery options including scheduled delivery, express
                delivery, or pickup.
              </p>
              <div className="flex items-center justify-between">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Get Offer
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 text-black">
                Special Offer
              </h2>
              <p className="text-gray-600 mb-4">
                Discounts, promotions, and special deals on selected items or
                orders.
              </p>
              <div className="flex items-center justify-between">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Get Offer
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 text-black">
                Special Offer
              </h2>
              <p className="text-gray-600 mb-4">
                Discounts, promotions, and special deals on selected items or
                orders.
              </p>
              <div className="flex items-center justify-between">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Get Offer
                </button>
              </div>
            </div>
            {/* Repeat for other offers */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Offering;
