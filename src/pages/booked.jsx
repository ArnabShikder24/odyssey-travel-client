/* eslint-disable no-undef */
import RootLayout from "@/components/RootLayout";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";

const Booked = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detailsMap, setDetailsMap] = useState({
    packages: {},
    flights: {},
    hotels: {},
    guides: {}
  });
  console.log(detailsMap);
  // Fetch package details
  const fetchPackageDetails = async (id) => {
    if (!id) return null;
    
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/package?package_id=${id}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Error fetching package details:`, error);
      return null;
    }
  };

  // Fetch flight details
  const fetchFlightDetails = async (id) => {
    if (!id) return null;
    
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/flight?flight_id=${id}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Error fetching flight details:`, error);
      return null;
    }
  };

  // Fetch hotel details
  const fetchHotelDetails = async (id) => {
    if (!id) return null;
    
    try {
      const response = await fetch(
        `http://localhost:8000/api/hotel/${id}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Error fetching hotel details:`, error);
      return null;
    }
  };

  // Fetch guide details
  const fetchGuideDetails = async (id) => {
    if (!id) return null;
    
    try {
      const response = await fetch(
        `http://localhost:8000/api/tour-guide/${id}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Error fetching guide details:`, error);
      return null;
    }
  };

  // Fetch all related details for bookings
  const fetchAllDetails = async (bookingsData) => {
    const packageIds = [...new Set(bookingsData.map(b => b.package_id).filter(Boolean))];
    const flightIds = [...new Set(bookingsData.map(b => b.flight_id).filter(Boolean))];
    const hotelIds = [...new Set(bookingsData.map(b => b.hotel_id).filter(Boolean))];
    const guideIds = [...new Set(bookingsData.map(b => b.guide_id).filter(Boolean))];
    
    const newDetailsMap = {
      packages: {},
      flights: {},
      hotels: {},
      guides: {}
    };

    // Fetch packages
    await Promise.all(packageIds.map(async (id) => {
      const details = await fetchPackageDetails(id);
      if (details) newDetailsMap.packages[id] = details;
    }));

    // Fetch flights
    await Promise.all(flightIds.map(async (id) => {
      const details = await fetchFlightDetails(id);
      if (details) newDetailsMap.flights[id] = details;
    }));

    // Fetch hotels
    await Promise.all(hotelIds.map(async (id) => {
      const details = await fetchHotelDetails(id);
      if (details) newDetailsMap.hotels[id] = details;
    }));

    // Fetch guides
    await Promise.all(guideIds.map(async (id) => {
      const details = await fetchGuideDetails(id);
      if (details) newDetailsMap.guides[id] = details;
    }));

    setDetailsMap(newDetailsMap);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const email = currentUser.email;

        try {
          const response = await fetch(
            `http://127.0.0.1:8000/api/bookings/email/${email}`,
            {
              headers: {
                Accept: "application/json",
              },
            }
          );
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          const data = await response.json();
          setBookings(data);
          
          // Fetch details for all bookings
          await fetchAllDetails(data);
        } catch (error) {
          console.error("Error fetching bookings:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Helper function to get package name
  const getPackageName = (packageId) => {
    const packageDetails = detailsMap.packages[packageId]?.data;
    return packageDetails && packageDetails?.name;
  };

  // Helper function to get flight info
  const getFlightInfo = (flightId) => {
    if (!flightId) return "Not Selected";
    const flightDetails = detailsMap.flights[flightId]?.data;
    return flightDetails 
      ? `${flightDetails.airline || ''} ${flightDetails.flight_number || ''} (${flightDetails.departure_city || flightDetails.from || ''} → ${flightDetails.arrival_city || flightDetails.to || ''})`
      : `Flight ${flightId}`;
  };

  // Helper function to get hotel info
  const getHotelInfo = (hotelId) => {
    if (!hotelId) return "Not Selected";
    const hotelDetails = detailsMap.hotels[hotelId]?.hotel;
    return hotelDetails 
      ? `${hotelDetails.name || hotelDetails.hotel_name || ''} (${hotelDetails.location || hotelDetails.city || ''}, ${hotelDetails.stars || hotelDetails.rating || ''} stars)`
      : `Hotel ${hotelId}`;
  };

  // Helper function to get guide info
  const getGuideInfo = (guideId) => {
    if (!guideId) return "Not Selected";
    const guideDetails = detailsMap.guides[guideId]?.data;
    return guideDetails 
      ? `${guideDetails.name || guideDetails.guide_name || ''}`
      : `Guide ${guideId}`;
  };

  if (loading) {
    return <div className="text-center py-10 text-lg">Loading your bookings...</div>;
  }

  if (!user) {
    return <div className="text-center py-10 text-lg text-red-500">Please login to see your bookings.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-44">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-500">Your Booked Packages</h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">You have no bookings yet.</p>
      ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking.booking_id}
              className="bg-white shadow-lg rounded-xl p-6 border border-purple-100 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-green-500 mb-3">
                {getPackageName(booking.package_id)}
              </h2>
              <div>
                <Image className="w-full rounded-md mb-4" src={detailsMap.packages[booking.package_id]?.data?.img_url} width={200} height={200} alt="booked" />
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500">Flight</span>
                  <span className="text-gray-800">{getFlightInfo(booking.flight_id)}</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500">Hotel</span>
                  <span className="text-gray-800">{getHotelInfo(booking.hotel_id)}</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500">Guide</span>
                  <span className="text-gray-800">{getGuideInfo(booking.guide_id)}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-3 mt-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500">People</span>
                    <span className="text-gray-800">{booking.person}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500">Total</span>
                    <span className="text-gray-800 font-medium">${booking.subtotal}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {new Date(booking.payment_date).toLocaleDateString()}
                </span>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    booking.status === "paid"
                      ? "bg-green-100 text-green-700"
                      : booking.status === "unpaid"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {booking.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Booked;

Booked.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};