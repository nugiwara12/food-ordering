import React from "react";

const KapampanganModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
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
              <div class="flex flex-col items-center justify-center mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <h1 className="mb-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl pt-4">
                  Order Items
                </h1>
                <div class="flex justify-center items-center w-20 h-20 mb-4">
                  <img src="/logo/foodhub.png" alt="Image" class="md:m-auto" />
                </div>
                <div class="grid grid-cols-2 gap-2 md:grid-cols-1 lg:grid-cols-2 w-full">
                  <div class="col-span-2">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      class="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    />
                  </div>
                  <div class="col-span-2">
                    <label
                      for="location"
                      class="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      placeholder="Enter your location"
                      class="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      for="food-name"
                      class="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Food Name
                    </label>
                    <input
                      type="text"
                      id="food-name"
                      placeholder="Enter food name"
                      class="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      for="food-quantity"
                      class="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Food Quantity
                    </label>
                    <input
                      type="number"
                      id="food-quantity"
                      placeholder="Enter food quantity"
                      class="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
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
                <button className="mt-6 w-48 rounded-md bg-yellow-600 py-1.5 font-medium text-blue-50 hover:bg-yellow-700">
                  Check out
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
    </div>
  );
};

export default KapampanganModal;
