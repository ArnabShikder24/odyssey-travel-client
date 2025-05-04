import RootLayout from "@/components/RootLayout";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import { auth } from "@/lib/firebase";

const Booked = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const email = currentUser.email;

        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/bookings/email/arnabshikder2001@gmail.com`,
            {
              headers: {
                Accept: "application/json",
              },
            }
          );
          setBookings(response.data);
          console.log(response.data);
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

  if (loading) {
    return <div className="text-center py-10 text-lg">Loading your bookings...</div>;
  }

  if (!user) {
    return <div className="text-center py-10 text-lg text-red-500">Please login to see your bookings.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-44" >
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-600">Your Booked Packages</h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">You have no bookings yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking.booking_id}
              className="bg-white shadow-lg rounded-xl p-6 border border-purple-100 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-purple-700 mb-2">
                Package ID: {booking.package_id}
              </h2>
              <p><strong>Flight:</strong> {booking.flight_id ?? "Not Selected"}</p>
              <p><strong>Hotel:</strong> {booking.hotel_id ?? "Not Selected"}</p>
              <p><strong>Guide:</strong> {booking.guide_id ?? "Not Selected"}</p>
              <p><strong>People:</strong> {booking.person}</p>
              <p><strong>Subtotal:</strong> ${booking.subtotal}</p>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Payment Date:</strong> {new Date(booking.payment_date).toLocaleDateString()}</p>
              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium ${
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
