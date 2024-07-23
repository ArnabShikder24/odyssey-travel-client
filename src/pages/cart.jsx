import RootLayout from "@/components/RootLayout";
import Image from "next/image";
import React from "react";

const cart = () => {
  return (
    <div className="bg-green-100 pt-20">
      <div className="font-sans max-w-6xl max-lg:max-w-2xl mx-auto p-4">
        <div className="grid bg-green-100 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-6 rounded-md">
              <h2 className="text-2xl font-extrabold text-green-500">
                Your Selected Packages
              </h2>
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 shrink-0 bg-white p-1 rounded-md">
                    <Image
                      width={500}
                      height={1000}
                      src="https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="w-full">
                    <h3 className="text-base font-semibold text-black">
                      Vermilion Cliffs Arizona
                    </h3>
                    <h6 className="text-sm text-blue-700 font-bold cursor-pointer mt-0.5">
                      $60.50
                    </h6>

                    <div className="flex gap-4 mt-4">
                      <div>
                        <div class="flex flex-wrap">
                          <div class="flex items-center me-4">
                            <input
                              id="red-radio"
                              type="radio"
                              value=""
                              name="colored-radio"
                              class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="red-radio"
                              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Single
                            </label>
                          </div>
                          <div class="flex items-center me-4">
                            <input
                              id="green-radio"
                              type="radio"
                              value=""
                              name="colored-radio"
                              class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="green-radio"
                              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Couple
                            </label>
                          </div>
                          <div class="flex items-center me-4">
                            <input
                              checked
                              id="purple-radio"
                              type="radio"
                              value=""
                              name="colored-radio"
                              class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="purple-radio"
                              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Family
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 fill-red-500 inline cursor-pointer"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-300" />
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 shrink-0 bg-white p-1 rounded-md">
                    <Image
                      width={500}
                      height={1000}
                      src="https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="w-full">
                    <h3 className="text-base font-semibold text-black">
                      Vermilion Cliffs Arizona
                    </h3>
                    <h6 className="text-sm text-blue-700 font-bold cursor-pointer mt-0.5">
                      $60.50
                    </h6>

                    <div className="flex gap-4 mt-4">
                      <div>
                        <div class="flex flex-wrap">
                          <div class="flex items-center me-4">
                            <input
                              id="red-radio"
                              type="radio"
                              value=""
                              name="colored-radio"
                              class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="red-radio"
                              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Single
                            </label>
                          </div>
                          <div class="flex items-center me-4">
                            <input
                              id="green-radio"
                              type="radio"
                              value=""
                              name="colored-radio"
                              class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="green-radio"
                              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Couple
                            </label>
                          </div>
                          <div class="flex items-center me-4">
                            <input
                              checked
                              id="purple-radio"
                              type="radio"
                              value=""
                              name="colored-radio"
                              class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="purple-radio"
                              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Family
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 fill-red-500 inline cursor-pointer"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-300" />
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 shrink-0 bg-white p-1 rounded-md">
                    <Image
                      width={500}
                      height={1000}
                      src="https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="w-full">
                    <h3 className="text-base font-semibold text-black">
                      Vermilion Cliffs Arizona
                    </h3>
                    <h6 className="text-sm text-blue-700 font-bold cursor-pointer mt-0.5">
                      $60.50
                    </h6>

                    <div className="flex gap-4 mt-4">
                      <div>
                        <div class="flex flex-wrap">
                          <div class="flex items-center me-4">
                            <input
                              id="red-radio"
                              type="radio"
                              value=""
                              name="colored-radio"
                              class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="red-radio"
                              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Single
                            </label>
                          </div>
                          <div class="flex items-center me-4">
                            <input
                              id="green-radio"
                              type="radio"
                              value=""
                              name="colored-radio"
                              class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="green-radio"
                              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Couple
                            </label>
                          </div>
                          <div class="flex items-center me-4">
                            <input
                              checked
                              id="purple-radio"
                              type="radio"
                              value=""
                              name="colored-radio"
                              class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="purple-radio"
                              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Family
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 fill-red-500 inline cursor-pointer"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-300" />
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 shrink-0 bg-white p-1 rounded-md">
                    <Image
                      width={500}
                      height={1000}
                      src="https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="w-full">
                    <h3 className="text-base font-semibold text-black">
                      Vermilion Cliffs Arizona
                    </h3>
                    <h6 className="text-sm text-blue-700 font-bold cursor-pointer mt-0.5">
                      $60.50
                    </h6>

                    <div className="flex gap-4 mt-4">
                      <div>
                        <div class="flex flex-wrap">
                          <div class="flex items-center me-4">
                            <input
                              id="red-radio"
                              type="radio"
                              value=""
                              name="colored-radio"
                              class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="red-radio"
                              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Single
                            </label>
                          </div>
                          <div class="flex items-center me-4">
                            <input
                              id="green-radio"
                              type="radio"
                              value=""
                              name="colored-radio"
                              class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="green-radio"
                              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Couple
                            </label>
                          </div>
                          <div class="flex items-center me-4">
                            <input
                              checked
                              id="purple-radio"
                              type="radio"
                              value=""
                              name="colored-radio"
                              class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="purple-radio"
                              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Family
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 fill-red-500 inline cursor-pointer"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-300" />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Order summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      $7,592.00
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-600">
                      -$299.00
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      $99
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      $799
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    $8,191.00
                  </dd>
                </dl>
              </div>

              <a
                href="#"
                className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Proceed to Checkout
              </a>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {" "}
                  or{" "}
                </span>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >
                  Continue Shopping
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <form className="space-y-4">
                <div>
                  <label
                    for="voucher"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Do you have a voucher or gift card?{" "}
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder=""
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Apply Code
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;

cart.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

