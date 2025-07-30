import React from 'react';

const Card = ({ title, description, children, className = '' }) => (
  <div className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${className}`}>
    {title && <h3 className="text-xl font-semibold mb-2 text-green">{title}</h3>}
    {description && <p className="mb-4 text-gray-600">{description}</p>}
    {children}
  </div>
);

export default Card;