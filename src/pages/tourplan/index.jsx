import React, { useEffect, useState } from "react";
import RootLayout from "@/components/RootLayout";
import { auth } from "@/lib/firebase";
import { pathname } from "@/routes/routes.index";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";

const Tourplan = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/products', {
          headers: {
            'Accept': 'application/json'
          }
        });
        setProducts(response.data.data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching products:', error.message);
      }
    };

    fetchData();
  }, []); 
  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100 flex-wrap py-28 gap-11">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="w-full sm:w-full md:w-[380px] lg:w-[400px] bg-white p-1 shadow-lg"
        >
          <div className="p-4">
            <Image
              height={200}
              width={500}
              src="https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-6 p-5">
            <h3 className="px-6 text-2xl text-center font-bold text-green-500">
              Vermilion Cliffs Arizona
            </h3>
            <p className="px-6 text-sm text-center text-slate-600">
              Vermilion Cliffs in Arizona boasts stunning red sandstone
              formations. This remote area offers limited access, preserving its
              pristine beauty and cultural significance for visitors to marvel
              at its natural wonders and rich history.
            </p>

            <div className="grid grid-cols-3">
              <div className="flex flex-col items-center rounded-lg bg-slate-50 p-4">
                <div className="rounded-full bg-green-200 p-3">
                  <Image
                    width={20}
                    height={20}
                    src="https://img.icons8.com/pastel-glyph/64/person-male--v1.png"
                    alt="person-male--v1"
                  />
                </div>
                <div>
                  <span className="text-sm text-slate-600">$150.56</span>
                </div>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-slate-50 p-4">
                <div className="rounded-full bg-green-200 p-3">
                  <Image
                    width={20}
                    height={20}
                    src="https://img.icons8.com/windows/32/user-group-man-woman.png"
                    alt="person-male--v1"
                  />
                </div>
                <div>
                  <span className="text-sm text-slate-600">$250.74</span>
                </div>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-slate-50 p-4">
                <div className="rounded-full bg-green-200 p-3">
                  <Image
                    width={20}
                    height={20}
                    src="https://img.icons8.com/ios/50/conference-call--v1.png"
                    alt="person-male--v1"
                  />
                </div>
                <div>
                  <span className="text-sm text-slate-600">$500.89</span>
                </div>
              </div>
            </div>

            <Link href={pathname.tourPlan+"/abcd"} className="mt-3 w-full text-center rounded-lg bg-green-500 p-3 text-sm font-semibold text-white shadow-xl shadow-green-700/30 outline-none transition-transform hover:scale-105 hover:border-b-indigo-600 hover:bg-indigo-600 focus:scale-105 focus:bg-indigo-600 focus:ring-2">
              Select Package
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tourplan;

Tourplan.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
