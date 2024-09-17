import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function UpdateProduct({ product_id, setModalShow, setPId }) {
    const [formData, setFormData] = useState({
        product_id: null,
        title: "",
        price: "",
        quantity: "",
        img: "",
        category: "",
        color: "",
        description: ""
    });
    const [loading, setLoading] = useState(true);
    
  
    useEffect(() => {
      const fetchProduct = async () => {
          const url = `http://localhost:5000/api/v1/product?product_id=${product_id}`;
          try {
              const response = await axios.get(url, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            setFormData(response?.data?.data);
            setLoading(false)
          } catch (error) {
            console.log("error");
            setLoading(false)
          }
      };
      if (product_id) {
        fetchProduct();
      }

    }, [product_id]);
  
    if (loading || !product_id) {
      return <p>loading...</p>
    }
  
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
        const response = await axios.post("http://localhost:5000/api/v1/product/update", formData);
        console.log("Product Updated successfully:", response.data.message);
        toast.success("Product Updated successfully");
        setFormData({
          product_id: null,
          title: "",
          price: "",
          quantity: "",
          img: "",
          category: "",
          color: "",
          description: ""
        });
        setModalShow(false);
        setPId(null);
      } catch (error) {
        console.error("Error updating product:", error.message);
        toast.error("Error updating product");
        setModalShow(false);
        setPId(null);
      }
    };
    return (
        <div>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <h1 className="mb-16 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
                Update {" "}
                <span className="text-blue-600 dark:text-blue-500">Product</span>
                </h1>
                <div className="mb-5">
                <label
                    htmlFor="product_title"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Title :
                </label>
                <input
                    type="text"
                    id="product_title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="product_price"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Price :
                </label>
                <input
                    type="number"
                    id="product_price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="product_quantity"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Quantity :
                </label>
                <input
                    type="number"
                    id="product_quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="product_image"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Image :
                </label>
                <input
                    type="text"
                    id="product_image"
                    name="img"
                    value={formData.img}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="product_category"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Category :
                </label>
                <input
                    type="text"
                    id="product_category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="product_color"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Color :
                </label>
                <input
                    type="text"
                    id="product_color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="product_description"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Description :
                </label>
                <input
                    type="text"
                    id="product_description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <input className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit" value="Submit" />
            </form>
            </div>
    );
}
