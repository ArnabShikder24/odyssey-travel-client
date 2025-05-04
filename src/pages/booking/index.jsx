import RootLayout from '@/components/RootLayout';
import { auth } from '@/lib/firebase';
import { pathname } from '@/routes/routes.index';
import { onAuthStateChanged } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { use, useEffect, useState } from 'react';

const Booking = () => {
  const [email, setEmail] = useState('');
  const [person, setPerson] = useState(1);
  const [allFlight, setAllFlight] = useState([]);
  const [allHotel, setAllHotel] = useState([]);
  const [allGuides, setAllGuides] = useState([]);
  const [slectedPackage, setSelectedPackage] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const packageId = searchParams.get('package_id');
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const email = currentUser.email;
        setEmail(email)
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  
  useEffect(() => {
    setLoading(true);
    const fetchPackageData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/package?package_id=${packageId}`);
        const data = await response.json();
        setSelectedPackage(data?.data);
        setLoading(false);
      } catch (error) {
        setSelectedPackage([]);
        console.error(error);
        setLoading(false);
      }
    };
    
    const fetchFlightsData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/flights/package/${packageId}`);
        const data = await response.json();
        setAllFlight(data);
        if(data?.message) setAllFlight([]);
        setLoading(false);
      } catch (error) {
        setAllFlight([]);
        console.error(error);
        setLoading(false);
      }
    };
    const fetchHotelsData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/hotels/package/${packageId}`);
        const data = await response.json();
        setAllHotel(data);
        if(data?.message) setAllHotel([]);
        setLoading(false);
      } catch (error) {
        setAllHotel([]);
        console.error(error);
        setLoading(false);
      }
    };
    const fetchGuidesData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/tour-guide/package/${packageId}`);
        const data = await response.json();
        setAllGuides(data);
        if(data?.message) setAllGuides([]);
        setLoading(false);
      } catch (error) {
        setAllGuides([]);
        console.error(error);
        setLoading(false);
      }
    };
    setLoading(false)
    if (packageId) {
      fetchPackageData();
      if (page === 1) fetchFlightsData();
      if (page === 2) fetchHotelsData();
      if (page === 3) fetchGuidesData()
    }
  }, [packageId, page]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {
        page === 1 && (
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
                            <div className="mb-5">
                              <p className="mb-2">Total Person:</p>
                              <input type="number" defaultValue="1" onChange={(e) => setPerson(e.target.value)} />
                            </div>
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
                      onChange={(e) => {
                        const flight = allFlight.find(f => f.flight_id == e.target.value);
                        setSelectedFlight(flight || null);
                      }}
                    >
                      <option value="" disabled selected>Choose a flight</option>
                      {allFlight?.map((flight) => (
                        <option key={flight.flight_id} value={flight.flight_id}>
                          {flight?.flight_number} - ${flight?.price} /one way per person
                        </option>
                      ))}
                    </select>
                    </div>
                  <p className="text-sm text-red-500">
                    *Plane fares may vary according to your travel date; they will
                    be adjusted accordingly.
                  </p>
                  <button
                    onClick={() => setPage(2)}
                    className="mt-5 inline-flex items-center justify-center rounded-md border-2 border-transparent bg-green-500 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    Proceed to Select Hotel
                  </button>
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
        )
      }
      {
        page === 2 && (
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
                                  Single Bed
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
                                  double Bed
                                </label>
                              </div>
                              <br />
                              <h3 className="text-lg text-blue-600 mt-5 mb-2">
                                Select Available Hotel :{" "}
                              </h3>
                              <select
                                className="w-full p-2.5 text-gray-700 mb-5 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-green-500"
                                onChange={(e) => {
                                  const hotel = allHotel.find(h => h.hotel_id == e.target.value);
                                  setSelectedHotel(hotel || null);
                                }}
                              >
                                <option value="" disabled selected>
                                  Choose a hotel
                                </option>
                                {allHotel?.map((hotel) => (
                                  <option key={hotel.hotel_id} value={hotel.hotel_id}>
                                  {hotel?.hotel_name} - {"Rating " + hotel?.rating} - {"Price $" + hotel?.price_per_night} /one day
                                </option>
                                ))}
                              </select>
                              <br />
                              <p className="text-sm text-red-500">
                                **Extend days will be charged accordingly and must extend from office.
                              </p>
                              <p className="text-sm text-red-500">
                                **Hotel and room prices may vary; they will be
                                adjusted accordingly.
                              </p>
                              <div className="flex items-center gap-4 mt-5">
                                <button
                                  onClick={() => setPage(1)}
                                  className="bg-green-500 bg-none px-5 py-4 rounded-md text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                                >
                                  Back
                                </button>
                                <button
                                  onClick={() => setPage(3)}
                                  className="nline-flex items-center justify-center rounded-md border-2 border-transparent bg-green-500 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                                >
                                  Proceed to select Guide
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
                    src="https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="object-cover w-full h-full rounded"
                    s
                  />
                </div>
              </div>
            </div>
          </section>
        )
      }
      {
        page === 3 && (
          <section className="py-10 lg:py-20 bg-green-100 font-poppins dark:bg-gray-800">
            <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
              <div className="flex flex-wrap ">
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                  <div className="lg:max-w-md">
                    <div className="px-4 pl-4 mb-6 border-l-4 border-green-500">
                      <h1 className="mt-2 text-3xl font-black text-green-500 md:text-5xl dark:text-gray-300 animate__bounceIn animate__delay-5s">
                        Select Your best Guide
                      </h1>
                    </div>
                    <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                      select guide best tour
                    </p>
                    <div className="ml-2">
                      <div className="Beds">
                        <div className="flex gap-4 mt-4">
                          <div>
                            <div class="flex flex-wrap">
                              <br />
                              <h3 className="text-lg text-blue-600 mt-5 mb-2">
                              Select Your best Guide :{" "}
                              </h3>
                              <select
                                className="w-full p-2.5 text-gray-700 mb-5 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-green-500"
                                onChange={(e) => {
                                  const guide = allGuides.find(g => g.guide_id == e.target.value);
                                  setSelectedGuide(guide || null);
                                }}
                              >
                                <option value="" disabled selected>
                                  Choose a guide
                                </option>
                                {allGuides?.map((guide) => (
                                  <option key={guide.guide_id} value={guide.guide_id}>
                                    {guide?.name} - {"Rating " + guide?.rating} - {"Price $" + guide?.price}
                                </option>
                                ))}
                              </select>
                              <br />
                              <div className="flex items-center gap-4 mt-5">
                                <button
                                  onClick={() => setPage(2)}
                                  className="bg-green-500 bg-none px-5 py-4 rounded-md text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                                >
                                  Back
                                </button>
                                <button
                                  onClick={() => setPage(4)}
                                  className="nline-flex items-center justify-center rounded-md border-2 border-transparent bg-green-500 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                                >
                                  Procced to Payment
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
                    src="https://images.unsplash.com/photo-1530107973768-581951e62d34?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="object-cover w-full h-full rounded"
                  />
                </div>
              </div>
            </div>
          </section>
        )
      }
      {
        page === 4 && (
          <div className="bg-green-100 p-4 h-screen pt-32">
            <div className="bg-white p-12 rounded-lg max-w-4xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-blue-500 inline-block border-b-4 border-blue-500 pb-1">
                  Checkout
                </h2>
              </div>
              <div className="mt-12">
                {/* Payment Summary */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-green-500 mb-4">Order Summary</h3>
                  <div className="border-t pt-4">
                    {slectedPackage ? (
                      <div className="flex justify-between mb-2">
                        <span>Package ({slectedPackage?.name})</span>
                        <span>${slectedPackage?.price}</span>
                      </div>
                    ) : (
                      <div className="text-gray-500 mb-2">No flight selected</div>
                    )}
                    {selectedFlight ? (
                      <div className="flex justify-between mb-2">
                        <span>Flight ({selectedFlight?.flight_number})</span>
                        <span>${selectedFlight?.price} X {parseInt(person)} = ${selectedFlight?.price * parseInt(person)}</span>
                      </div>
                    ) : (
                      <div className="text-gray-500 mb-2">No flight selected</div>
                    )}
                    {selectedHotel ? (
                      <div className="flex justify-between mb-2">
                        <span>Hotel ({selectedHotel?.hotel_name})</span>
                        <span>${selectedHotel?.price_per_night}</span>
                      </div>
                    ) : (
                      <div className="text-gray-500 mb-2">No hotel selected</div>
                    )}
                    {selectedGuide ? (
                      <div className="flex justify-between mb-2">
                        <span>Guide ({selectedGuide?.name})</span>
                        <span>${selectedGuide?.price}</span>
                      </div>
                    ) : (
                      <div className="text-gray-500 mb-2">No guide selected</div>
                    )}
                    <div className="flex justify-between font-bold border-t pt-2">
                      <span>Subtotal</span>
                      <span>
                        ${(
                          parseFloat(slectedPackage?.price || 0) +
                          parseFloat(selectedFlight?.price * parseInt(person) || 0) +
                          parseFloat(selectedHotel?.price_per_night || 0) +
                          parseFloat(selectedGuide?.price || 0)
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div>
                    <h3 className="text-xl font-bold text-green-500">
                      Payment method
                    </h3>
                  </div>
                  <div className="md:col-span-2">
                    {/* ... payment method selection ... */}
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
                    onClick={() => setPage(3)}
                    className="bg-green-500 bg-none px-5 py-4 rounded-md text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    Back
                  </button>
                  <button
                    onClick={async () => {
                      setIsProcessing(true);
                      try {
                        const bookingData = {
                          flight_id: selectedFlight?.flight_id || null,
                          hotel_id: selectedHotel?.hotel_id || null,
                          guide_id: selectedGuide?.guide_id || null,
                          person: parseInt(person) || 1,
                          subtotal: (
                            parseFloat(slectedPackage?.price || 0) +
                            parseFloat(selectedFlight?.price * parseInt(person) || 0) +
                            parseFloat(selectedHotel?.price_per_night || 0) +
                            parseFloat(selectedGuide?.price || 0)
                          ),
                          package_id: parseInt(packageId),
                          email: email,
                          payment_date: new Date().toISOString(),
                          status: 'paid',
                        };

                        console.log(bookingData);

                        // const response = await fetch('http://localhost:8000/api/bookings', {
                        //   method: 'POST',
                        //   headers: {
                        //     'Content-Type': 'application/json',
                        //   },
                        //   body: JSON.stringify(paymentData),
                        // });

                        // if (response.ok) {
                        //   window.location.href = pathname.confirmed;
                        // } else {
                        //   console.error('Payment failed');
                        // }
                        // window.location.href = pathname.confirmed;
                      } catch (error) {
                        console.error('Error processing payment:', error);
                      } finally {
                        setIsProcessing(false);
                      }
                    }}
                    disabled={isProcessing}
                    className={`px-6 py-3.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 ${
                      isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isProcessing ? 'Processing...' : 'Pay now'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Booking;

Booking.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};