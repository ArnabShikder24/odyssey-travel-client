import DashLayout from "@/components/DashLayout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AllOrder() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/orders", {
          headers: {
            Accept: "application/json",
          },
        });
        setOrders(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching orders:", error.message);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="container">
        <section className="items-center lg:flex bg-white font-poppins dark:bg-gray-800">
          <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="pt-4 rounded shadow bg-stone-100 dark:bg-gray-900">
              <div className="flex flex-wrap items-center justify-between px-6 pb-4 border-b dark:border-gray-700">
                <h2 className="mb-4 text-xl font-bold md:mb-0 dark:text-gray-400">
                  List of Orders
                </h2>
              </div>
              <div className="p-4 overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-sm text-left text-gray-500 dark:text-gray-400">
                      <th className="px-6 pb-3 text-lg text-purple-600">User ID</th>
                      <th className="px-6 pb-3 text-lg text-purple-600">Product ID</th>
                      <th className="px-6 pb-3 text-lg text-purple-600">Quantity</th>
                      <th className="px-6 pb-3 text-lg text-purple-600">Subtotal</th>
                      <th className="px-6 pb-3 text-lg text-purple-600">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index} className="text-sm border border-red-300">
                        <td className="px-6 py-5 font-medium">{order.user_id}</td>
                        <td className="px-6 py-5 font-medium">{order.product_id}</td>
                        <td className="px-6 py-5 font-medium">{order.quantity}</td>
                        <td className="px-6 py-5 font-medium">{order.subtotal}</td>
                        <td className="px-6 py-5 font-medium">{order.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

AllOrder.getLayout = function getLayout(page) {
  return <DashLayout>{page}</DashLayout>;
};
