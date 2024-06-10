import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 2000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        {/* Features Section for Button */}
      </div>

      <div className="flex justify-center my-4">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all duration-300 ease-in-out rounded-full
                            ${
                              curr === i
                                ? "w-6 h-3 bg-yellow-500"
                                : "w-3 h-3 bg-yellow-400 bg-opacity-50"
                            }
                            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
