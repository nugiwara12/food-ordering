"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Offering = () => {
  const handleGetOffer = () => {
    // Trigger the success toast
    toast.success("🎉 Get Offer Successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      <ToastContainer />
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
                <button
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleGetOffer}
                >
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
                <button
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleGetOffer}
                >
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
                <button
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleGetOffer}
                >
                  Get Offer
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 text-black">
                Percentage Discounts
              </h2>
              <p className="text-gray-600 mb-4">
                Foodhub provides discounts ranging from 10% to 30% on selected
                orders, varying by restaurant and location.
              </p>
              <div className="flex items-center justify-between">
                <button
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleGetOffer}
                >
                  Get Offer
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 text-black">
                Fixed Amount Discounts
              </h2>
              <p className="text-gray-600 mb-4">
                Customers can avail vouchers for specific savings, like ₱130 off
                orders over ₱120 or ₱150 off takeaway.
              </p>
              <div className="flex items-center justify-between">
                <button
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleGetOffer}
                >
                  Get Offer
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 text-black">
                Exclusive Local Deals
              </h2>
              <p className="text-gray-600 mb-4">
                Pre-ordering from selected restaurants in Food-Hub areas can
                save up to 25%, with some areas offering up to 30% off.
              </p>
              <div className="flex items-center justify-between">
                <button
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleGetOffer}
                >
                  Get Offer
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 text-black">
                Free Delivery
              </h2>
              <p className="text-gray-600 mb-4">
                Order from participating restaurants and enjoy free delivery on
                your meal.
              </p>
              <div className="flex items-center justify-between">
                <button
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleGetOffer}
                >
                  Get Offer
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 text-black">Meal Deals</h2>
              <p className="text-gray-600 mb-4">
                Get a complete meal at a discounted price, including an entree,
                side, and drink.
              </p>
              <div className="flex items-center justify-between">
                <button
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleGetOffer}
                >
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
