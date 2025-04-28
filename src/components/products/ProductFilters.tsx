"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    brands: true,
    ratings: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <button
          className="flex w-full items-center justify-between text-lg font-medium text-gray-900"
          onClick={() => toggleSection("categories")}
        >
          <span>Categories</span>
          <ChevronDown
            className={`h-5 w-5 transform transition-transform ${
              expandedSections.categories ? "rotate-180" : ""
            }`}
          />
        </button>

        {expandedSections.categories && (
          <div className="mt-4 space-y-2">
            {[
              "Electronics",
              "Clothing",
              "Home & Kitchen",
              "Beauty & Personal Care",
              "Sports & Outdoors",
            ].map((category) => (
              <div key={category} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${category}`}
                  className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                <label
                  htmlFor={`category-${category}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 pt-6">
        <button
          className="flex w-full items-center justify-between text-lg font-medium text-gray-900"
          onClick={() => toggleSection("price")}
        >
          <span>Price Range</span>
          <ChevronDown
            className={`h-5 w-5 transform transition-transform ${
              expandedSections.price ? "rotate-180" : ""
            }`}
          />
        </button>

        {expandedSections.price && (
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">${priceRange[0]}</span>
              <span className="text-sm text-gray-700">${priceRange[1]}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number.parseInt(e.target.value)])
              }
              className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
            />
            <div className="mt-4 flex items-center space-x-2">
              <input
                type="number"
                min="0"
                max={priceRange[1]}
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([
                    Number.parseInt(e.target.value),
                    priceRange[1],
                  ])
                }
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                min={priceRange[0]}
                max="1000"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([
                    priceRange[0],
                    Number.parseInt(e.target.value),
                  ])
                }
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 pt-6">
        <button
          className="flex w-full items-center justify-between text-lg font-medium text-gray-900"
          onClick={() => toggleSection("brands")}
        >
          <span>Brands</span>
          <ChevronDown
            className={`h-5 w-5 transform transition-transform ${
              expandedSections.brands ? "rotate-180" : ""
            }`}
          />
        </button>

        {expandedSections.brands && (
          <div className="mt-4 space-y-2">
            {["Apple", "Samsung", "Sony", "Bose", "Nike", "Adidas"].map(
              (brand) => (
                <div key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`brand-${brand}`}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label
                    htmlFor={`brand-${brand}`}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {brand}
                  </label>
                </div>
              )
            )}
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 pt-6">
        <button
          className="flex w-full items-center justify-between text-lg font-medium text-gray-900"
          onClick={() => toggleSection("ratings")}
        >
          <span>Ratings</span>
          <ChevronDown
            className={`h-5 w-5 transform transition-transform ${
              expandedSections.ratings ? "rotate-180" : ""
            }`}
          />
        </button>

        {expandedSections.ratings && (
          <div className="mt-4 space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <input
                  type="checkbox"
                  id={`rating-${rating}`}
                  className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                <label
                  htmlFor={`rating-${rating}`}
                  className="ml-2 flex items-center text-sm text-gray-700"
                >
                  <span className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < rating
                            ? "fill-orange-400 text-orange-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    ))}
                  </span>
                  <span className="ml-2">& Up</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 pt-6">
        <button className="w-full rounded-md bg-teal-700 py-2 font-medium text-white hover:bg-teal-800">
          Apply Filters
        </button>
        <button className="mt-2 w-full rounded-md border border-gray-300 bg-white py-2 font-medium text-gray-700 hover:bg-gray-50">
          Reset Filters
        </button>
      </div>
    </div>
  );
}
