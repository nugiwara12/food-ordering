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
            Special discounts, limited-time offers, and exclusive deals are
            available for food lovers, offering big savings and delicious
            treats.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Offer cards go here */}
            <div className="card bg-white shadow-md rounded-lg overflow-hidden relative">
              <p className="card-title text-lg font-semibold mb-2">
                Customer Support
              </p>
              <p className="small-desc text-gray-600 mb-4">
                Responsive customer support to address inquiries, complaints, or
                special requests.
              </p>
              <button
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-0 m-4"
                onClick={handleGetOffer}
              >
                Get Offer
              </button>
              <div className="go-corner absolute top-0 right-0 bg-yellow-600 text-white p-2">
                <div className="go-arrow">→</div>
              </div>
            </div>
            <div className="card bg-white shadow-md rounded-lg overflow-hidden relative">
              <p className="card-title text-lg font-semibold mb-2">
                Delivery Options
              </p>
              <p className="small-desc text-gray-600 mb-4">
                Flexible delivery options including scheduled delivery, express
                delivery, or pickup.
              </p>
              <button
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-0 m-4"
                onClick={handleGetOffer}
              >
                Get Offer
              </button>
              <div className="go-corner absolute top-0 right-0 bg-yellow-600 text-white p-2">
                <div className="go-arrow">→</div>
              </div>
            </div>
            <div className="card bg-white shadow-md rounded-lg overflow-hidden relative">
              <p className="card-title text-lg font-semibold mb-2">
                Special Offer
              </p>
              <p className="small-desc text-gray-600 mb-4">
                Discounts, promotions, and special deals on selected items or
                orders.
              </p>
              <button
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-0 m-4"
                onClick={handleGetOffer}
              >
                Get Offer
              </button>
              <div className="go-corner absolute top-0 right-0 bg-yellow-600 text-white p-2">
                <div className="go-arrow">→</div>
              </div>
            </div>
            <div className="card bg-white shadow-md rounded-lg overflow-hidden relative">
              <p className="card-title text-lg font-semibold mb-2">
                Percentage Discounts
              </p>
              <p className="small-desc text-gray-600 mb-4">
                Foodhub provides discounts ranging from 10% to 30% on selected
                orders, varying by restaurant and location.
              </p>
              <button
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-0 m-4"
                onClick={handleGetOffer}
              >
                Get Offer
              </button>
              <div className="go-corner absolute top-0 right-0 bg-yellow-600 text-white p-2">
                <div className="go-arrow">→</div>
              </div>
            </div>
            <div className="card bg-white shadow-md rounded-lg overflow-hidden relative">
              <p className="card-title text-lg font-semibold mb-2">
                Fixed Amount Discounts
              </p>
              <p className="small-desc text-gray-600 mb-4">
                Customers can avail vouchers for specific savings, like ₱130 off
                orders over ₱120 or ₱150 off takeaway.
              </p>
              <button
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-0 m-4"
                onClick={handleGetOffer}
              >
                Get Offer
              </button>
              <div className="go-corner absolute top-0 right-0 bg-yellow-600 text-white p-2">
                <div className="go-arrow">→</div>
              </div>
            </div>
            <div className="card bg-white shadow-md rounded-lg overflow-hidden relative">
              <p className="card-title text-lg font-semibold mb-2">
                Exclusive Local Deals
              </p>
              <p className="small-desc text-gray-600 mb-4">
                Pre-ordering from selected restaurants in Food-Hub areas can
                save up to 25%, with some areas offering up to 30% off.
              </p>
              <button
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-0 m-4"
                onClick={handleGetOffer}
              >
                Get Offer
              </button>
              <div className="go-corner absolute top-0 right-0 bg-yellow-600 text-white p-2">
                <div className="go-arrow">→</div>
              </div>
            </div>
            <div className="card bg-white shadow-md rounded-lg overflow-hidden relative">
              <p className="card-title text-lg font-semibold mb-2">
                Free Delivery
              </p>
              <p className="small-desc text-gray-600 mb-4">
                Order from participating restaurants and enjoy free delivery on
                your meal.
              </p>
              <button
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-0 m-4"
                onClick={handleGetOffer}
              >
                Get Offer
              </button>
              <div className="go-corner absolute top-0 right-0 bg-yellow-600 text-white p-2">
                <div className="go-arrow">→</div>
              </div>
            </div>
            <div className="card bg-white shadow-md rounded-lg overflow-hidden relative">
              <p className="card-title text-lg font-semibold mb-2">
                Meal Deals
              </p>
              <p className="small-desc text-gray-600 mb-4">
                Get a complete meal at a discounted price, including an entree,
                side, and drink.
              </p>
              <button
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-0 m-4"
                onClick={handleGetOffer}
              >
                Get Offer
              </button>
              <div className="go-corner absolute top-0 right-0 bg-yellow-600 text-white p-2">
                <div className="go-arrow">→</div>
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
