import React from "react";

const Timeline = () => {
  return (
    <section
      className="py-12 bg-gray-100 bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: 'url("/logo/background.jpg")' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-white md:text-4xl font-bold">
            Our Journey
          </h2>
          <p className="text-gray-300 mt-4">A timeline of our milestones</p>
        </div>
        <div className="relative">
          <div className="hidden md:block border-l-4 border-yellow-500 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {/* Timeline Item 1 */}
            <div className="flex flex-col md:flex-row items-center w-full">
              <div className="w-full md:w-1/2 md:pr-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-2">2010 - Conception</h3>
                  <p className="text-gray-600">
                    A group of local farmers and community activists in a small
                    town brainstorm the idea of a centralized hub to connect
                    local producers with consumers. June 2010: The concept of
                    FoodHub is formally outlined, focusing on sustainability,
                    reducing food miles, and supporting local agriculture.
                  </p>
                  <span className="text-yellow-600 block mt-4">
                    Timeline of FoodHub
                  </span>
                </div>
              </div>
              <div className="hidden md:block w-1/2"></div>
            </div>
            {/* Timeline Item 2 */}
            <div className="flex flex-col md:flex-row items-center w-full">
              <div className="hidden md:block w-1/2"></div>
              <div className="w-full md:w-1/2 md:pl-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-2">Milestone Two</h3>
                  <p className="text-gray-600">Description of milestone two.</p>
                  <span className="text-yellow-600 block mt-4">
                    Timeline of FoodHub 1
                  </span>
                </div>
              </div>
            </div>
            {/* Timeline Item 3 */}
            <div className="flex flex-col md:flex-row items-center w-full">
              <div className="w-full md:w-1/2 md:pr-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-2">Milestone Three</h3>
                  <p className="text-gray-600">
                    Description of milestone three.
                  </p>
                  <span className="text-yellow-600 block mt-4">
                    Timeline of FoodHub
                  </span>
                </div>
              </div>
              <div className="hidden md:block w-1/2"></div>
            </div>
            {/* Timeline Item 4 */}
            <div className="flex flex-col md:flex-row items-center w-full">
              <div className="hidden md:block w-1/2"></div>
              <div className="w-full md:w-1/2 md:pl-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-2">Milestone Four</h3>
                  <p className="text-gray-600">
                    Description of milestone four.
                  </p>
                  <span className="text-yellow-600 block mt-4">
                    Timeline of FoodHub
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
