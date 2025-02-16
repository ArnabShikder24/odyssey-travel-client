import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import { auth } from "@/lib/firebase";

const AdminProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const email = currentUser.email;

        try {
          const response = await axios.post("http://127.0.0.1:8000/api/getUserByEmail", {
            email: email,
          });

          if (response.data.role === "admin") {
            setIsAdmin(true);
          } else {
            router.push("/");
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
          router.push("/");
        }
      } else {
        router.push("/");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return isAdmin ? children : null;
};

export default AdminProtectedRoute;
