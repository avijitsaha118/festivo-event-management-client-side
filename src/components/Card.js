import React from 'react';
import ServiceImage from '../assets/img-1.jpg';

function Card() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={ServiceImage} alt="Service" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Service Name</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          justo id mi eleifend, at lacinia nibh posuere.
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-700 font-bold text-xl">$99</div>
          <div>
            <label className="mr-2 font-bold">Quantity:</label>
            <input
              type="number"
              className="border border-gray-400 px-2 py-1"
              min="1"
              max="10"
            />
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Card;
