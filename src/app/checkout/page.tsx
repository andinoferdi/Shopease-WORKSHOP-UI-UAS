"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

type CheckoutStep = "shipping" | "payment" | "review";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const { showToast } = useToast();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("shipping");
  const [isProcessing, setIsProcessing] = useState(false);

  // Form state
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "USA",
    email: "",
    phone: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // Calculate order totals
  const subtotal = total;
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.1;
  const orderTotal = subtotal + shipping + tax;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("payment");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("review");
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Clear cart
      clearCart();

      // Show success message with transaction history prompt
      showToast(
        "Order placed successfully! View your order in transaction history.",
        "success"
      );

      // Redirect to homepage instead of confirmation page
      router.push("/");
    } catch (error) {
      console.error("Error placing order:", error);
      showToast("Failed to place order. Please try again.", "error");
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    router.push("/cart");
    return null;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">Checkout</h1>

      {/* Checkout steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div
            className={`flex flex-1 items-center ${
              currentStep === "shipping" ? "text-teal-700" : "text-gray-500"
            }`}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                currentStep === "shipping"
                  ? "border-teal-700 bg-teal-700 text-white"
                  : "border-gray-300"
              }`}
            >
              1
            </div>
            <span className="ml-2 text-sm font-medium">Shipping</span>
          </div>
          <div className="flex-1 border-t-2 border-gray-300"></div>
          <div
            className={`flex flex-1 items-center ${
              currentStep === "payment" ? "text-teal-700" : "text-gray-500"
            }`}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                currentStep === "payment"
                  ? "border-teal-700 bg-teal-700 text-white"
                  : "border-gray-300"
              }`}
            >
              2
            </div>
            <span className="ml-2 text-sm font-medium">Payment</span>
          </div>
          <div className="flex-1 border-t-2 border-gray-300"></div>
          <div
            className={`flex flex-1 items-center ${
              currentStep === "review" ? "text-teal-700" : "text-gray-500"
            }`}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                currentStep === "review"
                  ? "border-teal-700 bg-teal-700 text-white"
                  : "border-gray-300"
              }`}
            >
              3
            </div>
            <span className="ml-2 text-sm font-medium">Review</span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          {/* Shipping Information */}
          {currentStep === "shipping" && (
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-medium">Shipping Information</h2>
              <form onSubmit={handleShippingSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      value={shippingInfo.firstName}
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          firstName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      value={shippingInfo.lastName}
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          lastName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      value={shippingInfo.address}
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          address: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      value={shippingInfo.city}
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          city: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      value={shippingInfo.state}
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          state: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="zipCode"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      value={shippingInfo.zipCode}
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          zipCode: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      value={shippingInfo.country}
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          country: e.target.value,
                        })
                      }
                      required
                    >
                      <option value="USA">United States</option>
                      <option value="CAN">Canada</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      value={shippingInfo.email}
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      value={shippingInfo.phone}
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          phone: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-md bg-teal-700 px-6 py-2 text-white hover:bg-teal-800"
                  >
                    Continue to Payment
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Payment Information */}
          {currentStep === "payment" && (
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-medium">Payment Information</h2>
              <form onSubmit={handlePaymentSubmit}>
                <div className="grid gap-4">
                  <div>
                    <label
                      htmlFor="cardName"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Name on Card
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      value={paymentInfo.cardName}
                      onChange={(e) =>
                        setPaymentInfo({
                          ...paymentInfo,
                          cardName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      placeholder="XXXX XXXX XXXX XXXX"
                      value={paymentInfo.cardNumber}
                      onChange={(e) =>
                        setPaymentInfo({
                          ...paymentInfo,
                          cardNumber: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="expiryDate"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                        placeholder="MM/YY"
                        value={paymentInfo.expiryDate}
                        onChange={(e) =>
                          setPaymentInfo({
                            ...paymentInfo,
                            expiryDate: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cvv"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                        placeholder="XXX"
                        value={paymentInfo.cvv}
                        onChange={(e) =>
                          setPaymentInfo({
                            ...paymentInfo,
                            cvv: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    className="rounded-md border border-gray-300 bg-white px-6 py-2 text-gray-700 hover:bg-gray-50"
                    onClick={() => setCurrentStep("shipping")}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-teal-700 px-6 py-2 text-white hover:bg-teal-800"
                  >
                    Review Order
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Order Review */}
          {currentStep === "review" && (
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-medium">Review Your Order</h2>

              <div className="mb-6">
                <h3 className="mb-2 text-sm font-medium text-gray-700">
                  Shipping Information
                </h3>
                <div className="rounded-md bg-gray-50 p-3 text-sm">
                  <p>
                    {shippingInfo.firstName} {shippingInfo.lastName}
                  </p>
                  <p>{shippingInfo.address}</p>
                  <p>
                    {shippingInfo.city}, {shippingInfo.state}{" "}
                    {shippingInfo.zipCode}
                  </p>
                  <p>{shippingInfo.country}</p>
                  <p>{shippingInfo.email}</p>
                  <p>{shippingInfo.phone}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="mb-2 text-sm font-medium text-gray-700">
                  Payment Information
                </h3>
                <div className="rounded-md bg-gray-50 p-3 text-sm">
                  <p>{paymentInfo.cardName}</p>
                  <p>Card ending in {paymentInfo.cardNumber.slice(-4)}</p>
                  <p>Expires {paymentInfo.expiryDate}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="mb-2 text-sm font-medium text-gray-700">
                  Order Items
                </h3>
                <div className="rounded-md bg-gray-50 p-3">
                  <ul className="divide-y divide-gray-200">
                    {items.map((item) => (
                      <li key={item.id} className="flex items-center py-3">
                        <span className="flex-1 text-sm">{item.name}</span>
                        <span className="text-sm text-gray-600">
                          x{item.quantity}
                        </span>
                        <span className="ml-4 text-sm font-medium">
                          $
                          {(
                            (item.discountPrice || item.price) * item.quantity
                          ).toFixed(2)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  type="button"
                  className="rounded-md border border-gray-300 bg-white px-6 py-2 text-gray-700 hover:bg-gray-50"
                  onClick={() => setCurrentStep("payment")}
                  disabled={isProcessing}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="rounded-md bg-teal-700 px-6 py-2 text-white hover:bg-teal-800 disabled:bg-teal-300"
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span className="flex items-center">
                      <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                      Processing...
                    </span>
                  ) : (
                    "Place Order"
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">Order Summary</h2>
            <div className="mb-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium">${orderTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
