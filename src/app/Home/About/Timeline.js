import React from "react";

const Timeline = () => {
  return (
    <section className="py-12">
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
                  <h3 className="text-2xl font-bold mb-2">FoodHub</h3>
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
                  <h3 className="text-2xl font-bold mb-2">FoodHub Mission</h3>
                  <p className="text-gray-600">
                    FoodHub is a platform that promotes food as a universal
                    language, connects farmers, and supports health, wellness,
                    and sustainability through eco-friendly packaging and
                    regenerative agriculture.
                  </p>
                  <span className="text-yellow-600 block mt-4">
                    Timeline of FoodHub
                  </span>
                </div>
              </div>
            </div>
            {/* Timeline Item 3 */}
            <div className="flex flex-col md:flex-row items-center w-full">
              <div className="w-full md:w-1/2 md:pr-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-2">FoodHub Vission</h3>
                  <p className="text-gray-600">
                    FoodHub enhances food experiences by promoting flavor,
                    health, and community through diverse ingredients, recipes,
                    and sustainable sourcing, while also fostering an educated
                    food lover community.
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
                  <h3 className="text-2xl font-bold mb-2">FoodHub Service</h3>
                  <p className="text-gray-600">
                    FoodHub focuses on providing high-quality service,
                    sustainability, and user-friendly websites, partnering with
                    top logistics providers for secure delivery, and promoting a
                    sense of belonging through events and workshops.
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
