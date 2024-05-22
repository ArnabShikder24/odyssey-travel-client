import Image from "next/image";
import React from "react";

const flight = () => {
  return (
    <div>
      <section className="py-10 lg:py-20 bg-green-100 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-green-500">
                  <h1 className="mt-2 text-3xl font-black text-green-500 md:text-5xl dark:text-gray-300 animate__bounceIn animate__delay-5s">
                    Select Your Flight
                  </h1>
                </div>
                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                  In the skies, flight classes offer distinct experiences
                  tailored to diverse preferences and budgets. Business class
                  exudes luxury with spacious seats, gourmet meals, and
                  personalized service, while economy class ensures
                  affordability without compromising on comfort, making air
                  travel accessible to all.
                </p>
                <div className="ml-2">
                  <div className="Hotels">
                    <h3 className="text-lg text-blue-600">
                      Select Your Hotel Category :{" "}
                    </h3>
                    <div className="flex gap-4 mt-4">
                      <div>
                        <div className="flex flex-wrap">
                          <div className="flex items-center me-4">
                            <input
                              id="red-radio"
                              type="radio"
                              value=""
                              name="colored-radio"
                              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="red-radio"
                              className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300"
                            >
                              Economy Class
                            </label>
                          </div>
                          <div className="flex items-center me-4">
                            <input
                              id="green-radio"
                              type="radio"
                              value=""
                              name="colored-radio"
                              className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="green-radio"
                              className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300"
                            >
                              Business Class
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="Date">
                    <h1 className="text-lg text-blue-600">
                      Select Your Approxomiate Travel Date :{" "}
                    </h1>
                    <br />
                    <div>
                      <div className="space-y-2.5">
                        <div className="grid grid-cols-5 items-center gap-x-2 mx-1.5 pb-3">
                          <div>
                            <button
                              type="button"
                              className="size-8 flex justify-center items-center text-gray-800 hover:bg-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800"
                            >
                              <svg
                                className="flex-shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="m15 18-6-6 6-6"></path>
                              </svg>
                            </button>
                          </div>
                          <div className="col-span-2 flex justify-center items-center gap-x-1">
                            <span className="mr-8 text-gray-800 dark:text-neutral-200">
                              June 2024
                            </span>
                          </div>
                          <div className="col-span-1">
                            <button
                              type="button"
                              className="size-8 flex justify-center items-center text-gray-800 hover:bg-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800"
                            >
                              <svg
                                className="flex-shrink-0 size-4"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="flex pb-1.5">
                          <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                            Mo
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                            Tu
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                            We
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                            Th
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                            Fr
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                            Sa
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                            Su
                          </span>
                        </div>
                        <div className="flex">
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                              disabled=""
                            >
                              26
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                              disabled=""
                            >
                              27
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                              disabled=""
                            >
                              28
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                              disabled=""
                            >
                              29
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                              disabled=""
                            >
                              30
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              1
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              2
                            </button>
                          </div>
                        </div>
                        <div className="flex">
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              3
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              4
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              5
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              6
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              7
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              8
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              9
                            </button>
                          </div>
                        </div>
                        <div className="flex">
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              10
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              11
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              12
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              13
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              14
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              15
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              16
                            </button>
                          </div>
                        </div>
                        <div className="flex">
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              17
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              18
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              19
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center bg-blue-600 border border-transparent text-sm font-medium text-white hover:border-blue-600 rounded-full dark:bg-blue-500 disabled:text-gray-300 disabled:pointer-events-none dark:hover:border-blue-500"
                            >
                              20
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              21
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              22
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              23
                            </button>
                          </div>
                        </div>
                        <div className="flex">
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              24
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              25
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              26
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              27
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              28
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              29
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              30
                            </button>
                          </div>
                        </div>
                        <div className="flex">
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                            >
                              31
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                              disabled=""
                            >
                              1
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                              disabled=""
                            >
                              2
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                              disabled=""
                            >
                              3
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                              disabled=""
                            >
                              4
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                              disabled=""
                            >
                              5
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
                              disabled=""
                            >
                              6
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <Image
                width={500}
                height={250}
                src="https://images.unsplash.com/photo-1559268950-2d7ceb2efa3a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="object-cover w-full h-full rounded"
                s
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default flight;
