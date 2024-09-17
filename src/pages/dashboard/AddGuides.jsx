import DashLayout from "@/components/DashLayout";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddGuides() {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
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
            const response = await axios.post("http://localhost:5000/api/v1/tour_guide/create", formData);
            console.log("Tour Guide added successfully:", response.data.message);
            toast.success("Tour Guide added successfully");
            setFormData({
                name: "",
                location: "",
                rating: ""
            });
        } catch (error) {
            console.error("Error adding Tour Guide:", error.message);
            toast.error("Error adding Tour Guide");
        }
    };

    return (
        <div>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <h1 className="mb-16 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
                    Add Your{" "}
                    <span className="text-blue-600 dark:text-blue-500">Tour Guide</span>
                </h1>
                <div className="mb-5">
                    <label
                        htmlFor="guide_name"
                        className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                    >
                        Name :
                    </label>
                    <input
                        type="text"
                        id="guide_name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="location"
                        className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                    >
                        Location :
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="rating"
                        className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                    >
                        Rating :
                    </label>
                    <input
                        type="number"
                        id="rating"
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

AddGuides.getLayout = function getLayout(page) {
    return <DashLayout>{page}</DashLayout>;
};
