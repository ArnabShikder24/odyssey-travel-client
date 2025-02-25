import RootLayout from '@/components/RootLayout';
import { pathname } from '@/routes/routes.index';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import React, { use, useEffect, useState } from 'react';

const Booking = () => {
  const [allFlight, setAllFlight] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const packageId = searchParams.get('package_id');
  console.log(allFlight);
  useEffect(() => {
    // Fetch data from an API
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/flights/package/${packageId}`);
        const data = await response.json();
        setAllFlight(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    if (packageId) {
      fetchData();
    }
  }, [packageId]);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
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
                      Select Your Seat Class :{" "}
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
                </div>
                </div>
                <div className='my-5'>
                <select 
                  className="w-full p-2.5 text-gray-700 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-green-500"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="" disabled selected>Choose a flight</option>
                  {allFlight.map((flight) => (
                    <option key={flight.id} value={flight.id}>
                      {flight?.flight_number}
                    </option>
                  ))}
                </select>
                </div>
              <p className="text-sm text-red-500">
                *Plane fares may vary according to your travel date; they will
                be adjusted accordingly.
              </p>
              <Link
                href={pathname.payment}
                className="mt-5 inline-flex items-center justify-center rounded-md border-2 border-transparent bg-green-500 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 mr-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Proceed to Payment
              </Link>
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
    </div>
  );
};

export default Booking;

Booking.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};