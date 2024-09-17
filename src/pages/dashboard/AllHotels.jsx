import DashLayout from "@/components/DashLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
const { Modal } = require("antd");

export default function AllHotels() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/hotels", {
          headers: {
            Accept: "application/json",
          },
        });
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching products:", error.message);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [message, modalShow]);

  const handleDelete = async (hotel_id) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/hotel/delete?hotel_id=${hotel_id}`);
        setMessage(`${response.data.message}, ${randomNumber}`);
    } catch (error) {
        setMessage(`${error.response.data.message}, ${randomNumber}`);
    }
  };

  if (loading) {
    return <p>loading...</p>
  }

  return (
    <div>
      <div className="container">
        <section className="items-center lg:flex bg-white font-poppins dark:bg-gray-800 ">
          <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="pt-4 rounded shadow bg-stone-100 dark:bg-gray-900">
              <div className="flex flex-wrap items-center justify-between px-6 pb-4 border-b dark:border-gray-700">
                <h2 className="mb-4 text-xl font-bold md:mb-0 dark:text-gray-400">
                  List of Packages
                </h2>
              </div>
              <div className="p-4 overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-sm text-left text-gray-500 dark:text-gray-400">
                      <th className="px-6 pb-3 text-lg text-purple-600">Hotel ID</th>
                      <th className="px-6 pb-3 text-lg text-purple-600">hotel Name</th>
                      <th className="px-6 pb-3 text-lg text-purple-600">Location</th>
                      <th className="px-6 pb-3 text-lg text-purple-600">Price Per Night</th>
                      <th className="px-6 pb-3 text-lg text-purple-600">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((product) => (
                      <tr key={product.product_id} className="text-sm border border-red-300">
                        <td className="px-6 py-5 font-medium">{product.hotel_id}</td>
                        <td className="px-6 py-5 font-medium">{product.hotel_name}</td>
                        <td className="px-6 py-5 font-medium">{product.location.slice(0, 10)}</td>
                        <td className="px-6 py-5 font-medium">{product.price_per_night}</td>
                        <td className="px-6 py-5 font-medium">{product.rating}</td>
                        <td className="flex items-center px-6 py-5 ">
                          <button
                        type="button"
                        onClick={() => handleDelete(product.hotel_id)}
                            className="text-red-700 bg-white hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                          >
                            Delete
                          </button>
                        </td>
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

AllHotels.getLayout = function getLayout(page) {
  return <DashLayout>{page}</DashLayout>;
};
