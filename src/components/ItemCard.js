import React, { useState, useEffect } from "react";
import axios from "axios";

const ItemCard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get("http://localhost:5000/item");
      setItems(result.data);
    };

    fetchItems();
  }, []);

  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-4"> Services </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-6 mr-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-gray-500">{item.description}</p>
              <div className="flex justify-between mt-4">
                <p className="text-lg font-bold">${item.price}</p>
                <div className="flex items-center">
                  <p className="text-gray-500 mr-2">{item.quantity} left</p>
                  <p className="text-gray-500">{item.guest} guests</p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <span className="bg-gray-500 rounded-full h-2 w-2 mr-1"></span>
                  <p className="text-gray-500">{item.light} lights</p>
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-500 rounded-full h-2 w-2 mr-1"></span>
                  <p className="text-gray-500">{item.table} VIP tables</p>
                </div>
              </div>
              <div class="mt-4">
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-600 rounded-full transition-colors duration-300 ease-in-out">
        
                    <span class="mr-2">Customize and Buy</span>
                  
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemCard;
