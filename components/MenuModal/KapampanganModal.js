import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCartOutline } from "react-icons/io5";

const KapampanganModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  const handleCheckout = () => {
    // Trigger the success toast
    toast.success("Checkout successful! Thank you for your order.", {
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
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="h-[500px] w-[1000px] bg-opacity-10 flex justify-center mb-6 overflow-y-auto md:overflow-y-hidden">
        <div className="h-screen">
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3 lg:w-3/4 xl:w-4/5">
              {/* Cart item 1 */}
              <div className="flex flex-col items-center justify-center mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <h1 className="mb-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl pt-4">
                  Order Items
                </h1>

                <div className="grid grid-cols-2 gap-2 md:grid-cols-1 lg:grid-cols-2 w-full">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="location"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      placeholder="Enter your location"
                      className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="food-name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Food Name
                    </label>
                    <input
                      type="text"
                      id="food-name"
                      placeholder="Enter food name"
                      className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="food-quantity"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Food Quantity
                    </label>
                    <input
                      type="number"
                      id="food-quantity"
                      placeholder="Enter food quantity"
                      className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md w-full">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">₱120.000</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">₱20.000</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">₱140.000</p>
                </div>
              </div>

              <div className="flex justify-center items-center ">
                <button
                  className="mt-6 w-28 rounded-md bg-yellow-600 py-1.5 font-medium text-blue-50 hover:bg-yellow-700"
                  onClick={handleCheckout}
                >
                  Check Out
                </button>
              </div>

              <div className="flex justify-center items-center ">
                <button
                  className="mt-6 w-48 rounded-md bg-yellow-600 py-1.5 font-medium text-blue-50 hover:bg-yellow-700"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default KapampanganModal;
