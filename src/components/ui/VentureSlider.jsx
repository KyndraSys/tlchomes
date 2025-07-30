import React, { useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Button from './Button';

const VentureSlider = ({ ventures }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.venture-slide');
    const totalSlides = slides.length;
    const slidesPerSet = 3;
    const totalSets = Math.ceil(totalSlides / slidesPerSet);
    let revolutionCount = 0;

    const showSlides = () => {
      if (!sliderRef.current) return;

      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * (100 / slidesPerSet)}%)`;
        slide.style.opacity = index >= slideIndex && index < slideIndex + slidesPerSet ? '1' : '0';
      });

      slideIndex += slidesPerSet;
      if (slideIndex >= totalSlides) {
        slideIndex = 0;
        revolutionCount++;
        if (revolutionCount >= 2) {
          revolutionCount = 0; // Reset after two revolutions
        }
      }

      setTimeout(showSlides, 3000); // 3 seconds per slide set
    };

    showSlides();

    // Cleanup
    return () => clearTimeout();
  }, [ventures]);

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={sliderRef} className="flex transition-transform duration-500 ease-linear">
        {ventures.map((venture, index) => (
          <div key={index} className="venture-slide w-1/3 p-6 flex-shrink-0">
            <div className="relative overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 h-80 min-h-[20rem] flex flex-col justify-between">
              <div className="p-6 flex-1">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-[#004f33] rounded-full flex items-center justify-center mr-6">
                    <venture.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{venture.title}</h3>
                    <p className="text-sm text-green-600 font-medium">{venture.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-1">{venture.description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {venture.stats.map((stat, statIndex) => (
                    <span key={statIndex} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-xs font-medium">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <Button variant="tertiary" className="w-full">
                  Learn More <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: Math.ceil(ventures.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (sliderRef.current) {
                sliderRef.current.style.transform = `translateX(-${index * (100 / 3)}%)`;
              }
            }}
            className={`w-3 h-3 rounded-full transition-all ${index === 0 ? 'bg-green-600 w-6' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VentureSlider;