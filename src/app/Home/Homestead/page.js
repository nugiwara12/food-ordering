import React from "react";
import { MdOnlinePrediction } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { SiFirefoxbrowser } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

const Homestead = () => {
  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <section
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: 'url("logo/background.jpg")' }}
        >
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white max-w-prose">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Food<span className="text-yellow-600">Hub</span>
              </h1>
              <p className="text-lg md:text-2xl mb-6 break-words">
                To satisfy your appetites, FoodHub provides scrumptious, freshly
                prepared dishes. It&apos;s a favorite for delicious food that
                combines tradition and flavor, making you fall in love with
                every bite.
              </p>
              <a
                href="#"
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8 bg-gray-200">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Our Features</h2>
              <p className="text-gray-600 mt-4">
                Explore the amazing features we offer
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="e-card playing flex flex-col justify-center items-center">
                <div className="flex justify-center items-center w-full h-full">
                  <MdOnlinePrediction className="h-60 w-60" />
                </div>
                <div className="image"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="mt-6 text-center text-lg font-semibold absolute top-20 left-0 right-0 infotop">
                  <p className="text-sm font-semibold text-gray-200">
                    Online Ordering
                  </p>
                  <p className="text-sm font-normal text-wrap px-4 mt-2 text-gray-300">
                    Integration with local restaurants and food vendors for
                    seamless online ordering and delivery services.
                  </p>
                </div>
              </div>

              <div className="e-card playing flex flex-col justify-center items-center">
                <div className="flex justify-center items-center w-full h-full">
                  <CiMobile3 className="h-60 w-60" />
                </div>
                <div className="image"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="mt-6 text-center text-lg font-semibold absolute top-20 left-0 right-0 infotop">
                  <p className="text-sm font-semibold text-gray-200">
                    Mobile App Integration
                  </p>
                  <p className="text-sm font-normal text-wrap px-4 mt-2 text-gray-300">
                    Seamless integration with a mobile app for on-the-go access
                    to recipes, restaurant recommendations, and food-related
                    content.
                  </p>
                </div>
              </div>
              <div className="e-card playing flex flex-col justify-center items-center">
                <div className="flex justify-center items-center w-full h-full">
                  <SiFirefoxbrowser className="h-60 w-60" />
                </div>
                <div className="image"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="mt-6 text-center text-lg font-semibold absolute top-20 left-0 right-0 infotop">
                  <p className="text-sm font-semibold text-gray-200">
                    Easy Browsing
                  </p>
                  <p className="text-sm font-normal text-wrap px-4 mt-2 text-gray-300">
                    Intuitive navigation allowing users to easily browse through
                    various categories like cuisine type, dietary preferences,
                    and meal types.
                  </p>
                </div>
              </div>
              <div className="e-card playing flex flex-col justify-center items-center">
                <div className="flex justify-center items-center w-full h-full">
                  <FaGlobe className="h-60 w-60" />
                </div>
                <div className="image"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="mt-6 text-center text-lg font-semibold absolute top-20 left-0 right-0 infotop">
                  <p className="text-sm font-semibold text-gray-200">
                    Web Development Integration
                  </p>
                  <p className="text-sm font-normal text-wrap px-4 mt-2 text-gray-300">
                    Using tools, technologies, and computer languages to
                    integrate features such as online ordering, tailored
                    suggestions, and interactive interfaces improves a website's
                    functionality and user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homestead;
