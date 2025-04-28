"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function ProductSorter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Featured");

  const options = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Newest",
    "Best Selling",
    "Top Rated",
  ];

  return (
    <div className="relative">
      <button
        className="flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Sort by: {selectedOption}</span>
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-gray-200 bg-white shadow-lg">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                className={`block w-full px-4 py-2 text-left text-sm ${
                  selectedOption === option
                    ? "bg-gray-100 text-teal-700 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
