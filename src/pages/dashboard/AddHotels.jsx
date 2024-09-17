import DashLayout from "@/components/DashLayout";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddHotels() {
    const [formData, setFormData] = useState({
        hotel_name: "",
        location: "",
        price_per_night: "",
        rating: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/v1/hotel/create", formData);
            console.log("Hotel added successfully:", response.data.message);
            toast.success("Hotel added successfully");
            setFormData({
              hotel_name: "",
              location: "",
              price_per_night: "",
              rating: ""
            });
        } catch (error) {
            console.error("Error adding Hotel:", error.message);
            toast.error("Error adding Hotel");
        }
    };
    return (
        <div>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <h1 className="mb-16 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
                Add Your{" "}
                <span className="text-blue-600 dark:text-blue-500">Hotel</span>
                </h1>
                <div className="mb-5">
                <label
                    for="product_title"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Hotel Name :
                </label>
                <input
                    type="text"
                    id="product_title"
                    name="hotel_name"
                    value={formData.hotel_name}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <div className="mb-5">
                <label
                    for="product_price"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Location :
                </label>
                <input
                    type="text"
                    id="product_price"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <div className="mb-5">
                <label
                    for="product_quantity"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Price Per Night :
                </label>
                <input
                    type="number"
                    id="product_quantity"
                    name="price_per_night"
                    value={formData.price_per_night}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <div className="mb-5">
                <label
                    for="product_image"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Rating :
                </label>
                <input
                    type="number"
                    id="product_image"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <input className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit" value="Submit" />
            </form>
            </div>
    );
}

AddHotels.getLayout = function getLayout(page) {
    return <DashLayout>{page}</DashLayout>;
};