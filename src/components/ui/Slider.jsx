import React from 'react';
import { Link } from 'react-router-dom';

const Slider = ({ items }) => (
  <div className="relative overflow-hidden">
    <div className="flex animate-slide">
      {items.map((item, index) => (
        <div key={index} className="min-w-full md:min-w-[33.33%] p-4">
          <Link to={item.link}>
            <div className="bg-cover bg-center h-72 rounded-lg shadow-lg" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="bg-black bg-opacity-60 h-full flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                  <p className="text-white text-sm">Discover More</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Slider;