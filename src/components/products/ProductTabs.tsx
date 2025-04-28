"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-12">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: "description", label: "Description" },
            { id: "specifications", label: "Specifications" },
            { id: "reviews", label: "Reviews (24)" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`whitespace-nowrap border-b-2 py-4 text-sm font-medium ${
                activeTab === tab.id
                  ? "border-teal-700 text-teal-700"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="py-6">
        {activeTab === "description" && (
          <div className="prose max-w-none">
            <p>
              Experience premium sound quality with our wireless headphones.
              Featuring advanced noise cancellation technology, these headphones
              deliver an immersive audio experience whether you&rsquo;re commuting,
              working out, or relaxing at home.
            </p>
            <p>
              The ergonomic design ensures comfort during extended listening
              sessions, while the durable construction guarantees long-lasting
              performance. With intuitive touch controls, you can easily manage
              your music, calls, and voice assistant.
            </p>
            <h3>Key Features:</h3>
            <ul>
              <li>
                Active Noise Cancellation: Block out external noise for an
                immersive listening experience.
              </li>
              <li>
                Long Battery Life: Enjoy up to 30 hours of playback on a single
                charge.
              </li>
              <li>
                Premium Sound Quality: High-definition audio with deep bass and
                crisp highs.
              </li>
              <li>
                Comfortable Fit: Soft ear cushions and adjustable headband for
                all-day comfort.
              </li>
              <li>
                Bluetooth 5.0: Stable connection with your devices and support
                for multiple device pairing.
              </li>
              <li>
                Built-in Microphone: Crystal-clear calls with noise reduction
                technology.
              </li>
            </ul>
          </div>
        )}

        {activeTab === "specifications" && (
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap py-4 pl-0 pr-3 text-sm font-medium text-gray-900">
                    Brand
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                    ShopEase Audio
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-0 pr-3 text-sm font-medium text-gray-900">
                    Model
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                    WH-1000XM5
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-0 pr-3 text-sm font-medium text-gray-900">
                    Color
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                    Black, White, Blue, Silver
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-0 pr-3 text-sm font-medium text-gray-900">
                    Connectivity
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                    Bluetooth 5.0, 3.5mm Audio Jack
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-0 pr-3 text-sm font-medium text-gray-900">
                    Battery Life
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                    Up to 30 hours
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-0 pr-3 text-sm font-medium text-gray-900">
                    Charging Time
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                    3 hours (15 minutes for 5 hours playback)
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-0 pr-3 text-sm font-medium text-gray-900">
                    Weight
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                    250g
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-0 pr-3 text-sm font-medium text-gray-900">
                    Dimensions
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                    7.3 x 3.1 x 9.4 inches
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-0 pr-3 text-sm font-medium text-gray-900">
                    Warranty
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                    1 Year Limited Warranty
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Customer Reviews
                  </h3>
                  <div className="mt-1 flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < 4
                              ? "fill-orange-400 text-orange-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">
                      Based on 24 reviews
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <div className="flex w-24 items-center">
                        <span className="text-sm font-medium text-gray-700">
                          {rating} stars
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div
                            className="h-2 rounded-full bg-orange-400"
                            style={{
                              width: `${
                                rating === 5
                                  ? 70
                                  : rating === 4
                                  ? 20
                                  : rating === 3
                                  ? 5
                                  : rating === 2
                                  ? 3
                                  : 2
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="ml-4 w-16 text-right text-sm text-gray-500">
                        {rating === 5
                          ? "70%"
                          : rating === 4
                          ? "20%"
                          : rating === 3
                          ? "5%"
                          : rating === 2
                          ? "3%"
                          : "2%"}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button className="rounded-md bg-teal-700 px-4 py-2 font-medium text-white hover:bg-teal-800">
                    Write a Review
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div
                    key={review}
                    className="border-b border-gray-200 pb-6 last:border-b-0"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            alt="User avatar"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">
                            John Doe
                          </h4>
                          <div className="mt-1 flex items-center">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < 5
                                      ? "fill-orange-400 text-orange-400"
                                      : "fill-gray-200 text-gray-200"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">3 days ago</span>
                    </div>
                    <h5 className="mb-2 text-sm font-medium text-gray-900">
                      Amazing sound quality!
                    </h5>
                    <p className="text-sm text-gray-600">
                      These headphones exceeded my expectations. The sound
                      quality is incredible, and the noise cancellation works
                      perfectly. They&rsquo;re also very comfortable to wear for
                      extended periods. Highly recommended!
                    </p>
                  </div>
                ))}

                <div className="mt-4 text-center">
                  <button className="text-sm font-medium text-teal-700 hover:text-teal-900">
                    Load More Reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
