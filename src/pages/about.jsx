import React from "react";
import Image from "next/image";
import RootLayout from "@/components/RootLayout";
import "animate.css";

const About = () => {
  return (
    <div>
      <section className="py-10 lg:py-20 bg-green-100 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-green-500">
                  <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                    Who we are?
                  </span>
                  <h1 className="mt-2 text-3xl font-black text-green-500 md:text-5xl dark:text-gray-300 animate__bounceIn animate__delay-5s">
                    About Us
                  </h1>
                </div>
                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                  Odyssey Travels was founded with a passion for exploration and
                  a mission to make travel accessible and enjoyable for
                  everyone. With over 10 years of experience in the industry, we
                  pride ourselves on our expertise and customer-centric
                  approach. Whether you are planning a solo adventure, a family
                  vacation, or a romantic getaway, our team of travel experts is
                  here to assist you every step of the way.
                </p>
                <div className="flex flex-wrap items-center">
                  <div className=" w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900 animate__flipOutY animate__delay-4s">
                      <span className="text-green-500 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="w-10 h-10 bi bi-file-earmark-text"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        30k+
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Tourists Served
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900 animate__flipOutY animate__delay-4s">
                      <span className="text-green-500 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="w-10 h-10 bi bi-people-fill"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path
                            fillRule="evenodd"
                            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                          />
                          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        3,590
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Local Tour Guide
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900 animate__flipOutY animate__delay-4s">
                      <span className="text-green-500 dark:text-blue-400">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#212bc0"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                              stroke="#16A34A"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>{" "}
                            <path
                              d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                              stroke="#16A34A"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        20+
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Countrys
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900 animate__flipOutY animate__delay-4s">
                      <span className="text-green-500 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="w-10 h-10 bi bi-alarm-fill"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        365
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Days Booking
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <Image
                width={500}
                height={250}
                src="https://images.unsplash.com/photo-1570143675316-51a19f90a943?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

export default About;

About.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
