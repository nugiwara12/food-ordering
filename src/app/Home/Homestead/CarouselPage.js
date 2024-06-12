"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Carousel from "../../../../components/Carousel/Carousel";

const slides = [
  {
    image: "/menu/kapampangan/adobo.png",
    name: "ADOBO",
    position: "Kapampangan Foods",
    quotes:
      "“Kapampangan adobo, a regional variation of Filipino adobo, is a rich, bold, and tangy dish traditionally served with pork or chicken, reflecting the Kapampangan peoples culinary heritage.”",
  },
  {
    image: "/menu/kapampangan/kaldereta.png",
    name: "KALDERETA",
    position: "Kapampangan Foods",
    quotes:
      "“Kapampangan Kaldereta, a regional Filipino stew from Pampanga, features tender meat chunks in a tomato-based sauce with native ingredients, showcasing culinary expertise.”",
  },
  {
    image: "/menu/tagalog/bulalo.png",
    name: "BULALO",
    position: "Tagalog Foods",
    quotes:
      "“Bulalo, a popular Filipino beef soup, is a hearty comfort food made with beef shanks, marrow bones, onions, garlic, and peppercorns, enjoyed hot or with family.”",
  },
  {
    image: "/menu/tagalog/letchon.png",
    name: "LETCHON",
    position: "Tagalog Foods",
    quotes:
      "“Lechon, a Filipino culinary masterpiece, is a whole roasted pig dish with crispy skin and tender meat, symbolizing joy and Filipino culinary heritage.”",
  },
  {
    image: "/menu/tagalog/pancit.png",
    name: "PANCIT GUISADO",
    position: "Tagalog Foods",
    quotes:
      "“Pancit Bihon Guisado is a popular Filipino noodles dish made with bihon, karne, hipon, and gulay, a part of the country's culture and cuisine.”",
  },
];

const CarouselPage = () => {
  return (
    <div className="py-20 container mx-auto text-white">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-prose">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Food<span className="text-yellow-600">Hub</span>
          </h1>
          <p className="text-lg md:text-2xl mb-6 break-words">
            To satisfy your appetites, FoodHub provides scrumptious, freshly
            prepared dishes. A favorite for delicious food that combines
            tradition and flavor, making you fall in love with every bite.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center font-tight items-center w-3/4 mx-auto">
        <div className="w-full px-2">
          <Carousel autoSlide={true} autoSlideInterval={5000}>
            {slides.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex justify-center items-center">
                  <Image
                    width={200}
                    height={200}
                    src={item.image}
                    alt={`Image ${index}`}
                    className="flex justify-center items-center w-40 h-40 rounded-full object-cover mb-10"
                  />
                </div>
                <div className="flex justify-center text-center text-black font-bold text-2xl mb-2 transition-opacity duration-500">
                  {item.name}
                </div>
                <div className="text-center text-gray-100 text-md mb-8 transition-opacity duration-500">
                  {item.position}
                </div>
                <div className="text-center text-gray-300 text-2xl whitespace-normal py-8">
                  {item.quotes}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselPage;
