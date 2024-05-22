import Image from "next/image";
import React from "react";

const hotel = () => {
  return (
    <div>
      <section className="py-10 lg:py-20 bg-green-100 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-green-500">
                  <h1 className="mt-2 text-3xl font-black text-green-500 md:text-5xl dark:text-gray-300 animate__bounceIn animate__delay-5s">
                    Select Your Desired Hotel & Room
                  </h1>
                </div>
                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                  Hotels offer a sanctuary away from home, where comfort meets
                  convenience in each room. From cozy retreats to lavish suites,
                  they cater to every travelers needs, promising a memorable
                  stay wrapped in luxury and hospitality.
                </p>
                <div className="ml-2">
                  <div className="Hotels">
                    <h3 className="text-lg text-blue-600">
                      Select Your Hotel Category :{" "}
                    </h3>
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
                              class="ms-2 text-md font-medium text-gray-900 dark:text-gray-300"
                            >
                              3 Star ($200 - $400)
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
                              class="ms-2 text-md font-medium text-gray-900 dark:text-gray-300"
                            >
                              5 Star ($700 - $2000)
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="Beds">
                    <h3 className="text-lg text-blue-600">
                      Select Your Bed Category :{" "}
                    </h3>
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
                              class="ms-2 text-md font-medium text-gray-900 dark:text-gray-300"
                            >
                              Single Bed ($50 - $150)
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
                              class="ms-2 text-md font-medium text-gray-900 dark:text-gray-300"
                            >
                              Couple Bed ($150 - $400)
                            </label>
                          </div>
                          <br />
                          <br />
                          <p className="text-red-500">
                            **All kinds of rooms will be air-conditioned.
                          </p>
                          <p className="text-red-500">
                            **Hotel and room prices may vary; they will be
                            adjusted accordingly.
                          </p>
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
                src="https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

export default hotel;
