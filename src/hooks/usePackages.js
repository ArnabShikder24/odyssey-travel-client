import { useEffect, useState } from "react";
import axios from "axios";

const usePackages = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/packages")
            .then((res) => {
                setPackages(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching packages:", err);
                setError(err);
                setLoading(false);
            });
    }, []);

    return { packages, loading, error };
};

export default usePackages;
