import Image from "next/image";
import React from "react";

const payment = () => {
  return (
    <div>
      <div class="font-[sans-serif] bg-white p-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl font-extrabold text-[#333] inline-block border-b-4 border-[#333] pb-1">
              Checkout
            </h2>
          </div>
          <div class="mt-12">
            <div class="grid md:grid-cols-3 gap-6">
              <div>
                <h3 class="text-xl font-bold text-[#333]">01</h3>
                <h3 class="text-xl font-bold text-[#333]">Personal Details</h3>
              </div>
              <div class="md:col-span-2">
                <form>
                  <div class="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="First name"
                      class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Phone number"
                      class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div class="grid md:grid-cols-3 gap-6 mt-12">
              <div>
                <h3 class="text-xl font-bold text-[#333]">02</h3>
                <h3 class="text-xl font-bold text-[#333]">Shopping Address</h3>
              </div>
              <div class="md:col-span-2">
                <form>
                  <div class="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Street address"
                      class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Zip Code"
                      class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div class="grid md:grid-cols-3 gap-6 mt-12">
              <div>
                <h3 class="text-xl font-bold text-[#333]">03</h3>
                <h3 class="text-xl font-bold text-[#333]">Payment method</h3>
              </div>
              <div class="md:col-span-2">
                <div class="grid gap-6 sm:grid-cols-2">
                  <div class="flex items-center">
                    <input
                      type="radio"
                      class="w-5 h-5 cursor-pointer"
                      id="card"
                      checked
                    />
                    <label for="card" class="ml-4 flex gap-2 cursor-pointer">
                      <Image
                        height={100}
                        width={100}
                        src="https://readymadeui.com/images/visa.webp"
                        class="w-12"
                        alt="card1"
                      />
                      <Image
                        height={100}
                        width={100}
                        src="https://readymadeui.com/images/american-express.webp"
                        class="w-12"
                        alt="card2"
                      />
                      <Image
                        height={100}
                        width={100}
                        src="https://readymadeui.com/images/master.webp"
                        class="w-12"
                        alt="card3"
                      />
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="radio"
                      class="w-5 h-5 cursor-pointer"
                      id="paypal"
                    />
                    <label for="paypal" class="ml-4 flex gap-2 cursor-pointer">
                      <Image
                        height={100}
                        width={100}
                        src="https://readymadeui.com/images/paypal.webp"
                        class="w-20"
                        alt="paypalCard"
                      />
                    </label>
                  </div>
                </div>
                <div class="grid sm:grid-cols-4 gap-6 mt-6">
                  <div class="col-span-2">
                    <input
                      type="number"
                      placeholder="Card number"
                      class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <input
                    type="number"
                    placeholder="EXP."
                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                  />
                  <input
                    type="number"
                    placeholder="CVV"
                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap justify-end gap-4 mt-12">
              <button
                type="button"
                class="px-6 py-3.5 text-sm bg-transparent border-2 text-[#333] rounded-md hover:bg-gray-100"
              >
                Pay later
              </button>
              <button
                type="button"
                class="px-6 py-3.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Pay now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default payment;
