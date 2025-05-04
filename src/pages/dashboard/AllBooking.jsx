import DashLayout from "@/components/DashLayout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AllBooking() {
  const [booking, setbooking] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/bookings", {
          headers: {
            Accept: "application/json",
          },
        });
        setbooking(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching bookings:", error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="container">
      <section className="items-center lg:flex bg-white font-poppins dark:bg-gray-800">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="pt-4 rounded shadow bg-stone-100 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between px-6 pb-4 border-b dark:border-gray-700">
              <h2 className="mb-4 text-xl font-bold md:mb-0 dark:text-gray-400">
                List of Bookings
              </h2>
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-sm text-left text-gray-500 dark:text-gray-400">
                    <th className="px-4 pb-3 text-purple-600">Flight ID</th>
                    <th className="px-4 pb-3 text-purple-600">Hotel ID</th>
                    <th className="px-4 pb-3 text-purple-600">Guide ID</th>
                    <th className="px-4 pb-3 text-purple-600">Person</th>
                    <th className="px-4 pb-3 text-purple-600">Subtotal</th>
                    <th className="px-4 pb-3 text-purple-600">Package ID</th>
                    <th className="px-4 pb-3 text-purple-600">Email</th>
                    <th className="px-4 pb-3 text-purple-600">Payment Date</th>
                    <th className="px-4 pb-3 text-purple-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {booking.map((order, index) => (
                    <tr key={index} className="text-sm border-b border-gray-300">
                      <td className="px-4 py-3">{order.flight_id}</td>
                      <td className="px-4 py-3">{order.hotel_id}</td>
                      <td className="px-4 py-3">{order.guide_id}</td>
                      <td className="px-4 py-3">{order.person}</td>
                      <td className="px-4 py-3">{order.subtotal}</td>
                      <td className="px-4 py-3">{order.package_id}</td>
                      <td className="px-4 py-3">{order.email}</td>
                      <td className="px-4 py-3">{order.payment_date}</td>
                      <td className="px-4 py-3">{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {booking.length === 0 && <p className="mt-4 text-center text-gray-500">No bookings found.</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

AllBooking.getLayout = function getLayout(page) {
  return <DashLayout>{page}</DashLayout>;
};
