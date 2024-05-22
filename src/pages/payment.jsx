import Image from "next/image";
import React from "react";

const payment = () => {
  return (
    <di>
      <div className="bg-green-100 p-4">
        <div className="bg-white p-12 rounded-lg max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-blue-500 inline-block border-b-4 border-blue-500 pb-1">
              Checkout
            </h2>
          </div>
          <div className="mt-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-bold text-green-500">
                  Personal Details
                </h3>
              </div>
              <div className="md:col-span-2">
                <form>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="First name"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Phone number"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-xl font-bold text-green-500">
                  Shopping Address
                </h3>
              </div>
              <div className="md:col-span-2">
                <form>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Street address"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Zip Code"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-xl font-bold text-green-500">
                  Payment method
                </h3>
              </div>
              <div className="md:col-span-2">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="card"
                    />
                    <label
                      for="card"
                      className="ml-4 flex gap-2 cursor-pointer"
                    >
                      <Image
                        height={100}
                        width={100}
                        src="https://readymadeui.com/images/visa.webp"
                        className="w-12"
                        alt="card1"
                      />
                      <Image
                        height={100}
                        width={100}
                        src="https://readymadeui.com/images/american-express.webp"
                        className="w-12"
                        alt="card2"
                      />
                      <Image
                        height={100}
                        width={100}
                        src="https://readymadeui.com/images/master.webp"
                        className="w-12"
                        alt="card3"
                      />
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="paypal"
                    />
                    <label
                      for="paypal"
                      className="ml-4 flex gap-2 cursor-pointer"
                    >
                      <Image
                        height={100}
                        width={100}
                        src="https://readymadeui.com/images/paypal.webp"
                        className="w-20"
                        alt="paypalCard"
                      />
                    </label>
                  </div>
                </div>
                <div className="grid sm:grid-cols-4 gap-6 mt-6">
                  <div className="col-span-2">
                    <input
                      type="number"
                      placeholder="Card number"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <input
                    type="number"
                    placeholder="EXP."
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                  />
                  <input
                    type="number"
                    placeholder="CVV"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-end gap-4 mt-12">
              <button
                type="button"
                className="px-6 py-3.5 text-sm bg-transparent border-2 text-[#333] rounded-md hover:bg-gray-100"
              >
                Pay later
              </button>
              <button
                type="button"
                className="px-6 py-3.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Pay now
              </button>
            </div>
          </div>
        </div>
      </div>
    </di>
  );
};

export default payment;
