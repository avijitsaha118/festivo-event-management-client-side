// import React from 'react';
// import ServiceImage from '../assets/img-1.jpg';

// function Card() {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg">
//       <img className="w-full" src={ServiceImage} alt="Service" />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">Service Name</div>
//         <p className="text-gray-700 text-base">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
//           justo id mi eleifend, at lacinia nibh posuere.
//         </p>
//         <div className="flex justify-between items-center mt-4">
//           <div className="text-gray-700 font-bold text-xl">$99</div>
//           <div>
//             <label className="mr-2 font-bold">Quantity:</label>
//             <input
//               type="number"
//               className="border border-gray-400 px-2 py-1"
//               min="1"
//               max="10"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="px-6 py-4">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Buy Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Card;


import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

const Card = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();

  const handleQuantityChange = (increment) => {
    if (increment) {
      setQuantity(quantity + 1);
    } else if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCustomize = () => {
    history.push(`/customize/${item.id}`);
  };

  const handleConfirm = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/item/${item.id}`, {
        quantity,
        // add any other updated fields here
      });
      console.log(response.data); // display updated data in console
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 border rounded-md shadow-md">
      <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-md" />
      <div className="flex flex-col justify-between w-full mt-4">
        <div>
          <h2 className="text-lg font-medium">{item.name}</h2>
          <p className="mt-2 text-gray-500">{item.description}</p>
          <p className="mt-2 text-gray-500">Price: ${item.price}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <button
              onClick={() => handleQuantityChange(false)}
              className="flex items-center justify-center w-6 h-6 border rounded-full"
            >
              <MinusIcon className="w-4 h-4 text-gray-500" />
            </button>
            <span className="mx-2 font-medium">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(true)}
              className="flex items-center justify-center w-6 h-6 border rounded-full"
            >
              <PlusIcon className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          <button
            onClick={handleCustomize}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
          >
            Customize and Buy
          </button>
        </div>
      </div>
      <button
        onClick={handleConfirm}
        className="mt-4 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
      >
        Confirm
      </button>
    </div>
  );
};

export default Card;
