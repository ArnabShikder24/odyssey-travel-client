import DashLayout from "@/components/DashLayout";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddFlights() {
    const [formData, setFormData] = useState({
        flight_number: "",
        seat_class: "",
        departure_time: "",
        arrival_time: "",
        price: ""
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
            const response = await axios.post("http://localhost:5000/api/v1/flight/create", formData);
            console.log("Flight added successfully:", response.data.message);
            toast.success("Flight added successfully");
            setFormData({
                flight_number: "",
                seat_class: "",
                departure_time: "",
                arrival_time: "",
                price: ""
            });
        } catch (error) {
            console.error("Error adding Flight:", error.message);
            toast.error("Error adding Flight");
        }
    };

    return (
        <div>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <h1 className="mb-16 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
                Add Your{" "}
                <span className="text-blue-600 dark:text-blue-500">Flight</span>
                </h1>
                <div className="mb-5">
                    <label
                        htmlFor="flight_number"
                        className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                    >
                        Flight Number :
                    </label>
                    <input
                        type="text"
                        id="flight_number"
                        name="flight_number"
                        value={formData.flight_number}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="seat_class"
                        className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                    >
                        Seat Class :
                    </label>
                    <input
                        type="text"
                        id="seat_class"
                        name="seat_class"
                        value={formData.seat_class}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="departure_time"
                        className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                    >
                        Departure Time :
                    </label>
                    <input
                        type="datetime-local"
                        id="departure_time"
                        name="departure_time"
                        value={formData.departure_time}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="arrival_time"
                        className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                    >
                        Arrival Time :
                    </label>
                    <input
                        type="datetime-local"
                        id="arrival_time"
                        name="arrival_time"
                        value={formData.arrival_time}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="price"
                        className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                    >
                        Price :
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <input className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit" value="Submit" />
            </form>
        </div>
    );
}

AddFlights.getLayout = function getLayout(page) {
    return <DashLayout>{page}</DashLayout>;
};
