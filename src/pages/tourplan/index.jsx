import React, { useEffect, useState } from "react";
import RootLayout from "@/components/RootLayout";
import { auth } from "@/lib/firebase";
import { pathname } from "@/routes/routes.index";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
// import { Search } from "lucide-react";
import { CiSearch } from "react-icons/ci";

const Tourplan = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
        const response = await axios.get('http://127.0.0.1:8000/api/packages', {
          headers: {
            'Accept': 'application/json'
          }
        });
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching products:', error.message);
      }
    };

    fetchData();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.details.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-green-100 py-8">
      {/* Search Component */}
      <div className="max-w-4xl mx-auto mb-10 px-4 mt-20">
        <div className="p-4 rounded-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">Find Your Perfect Tour Package</h2>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search packages by name or description..."
              className="w-full py-3 px-12 border border-green-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {/* <Search className="absolute left-4 top-3.5 text-green-500" size={20} /> */}
            <CiSearch className="absolute left-4 top-3.5 text-green-500" size={20} />
            {searchTerm && (
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setFilteredProducts(products);
                }}
                className="absolute right-4 top-3.5 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            )}
          </div>
          <div className="mt-2 text-center text-sm text-gray-600">
            {filteredProducts.length} packages found
          </div>
        </div>
      </div>

      {/* Package Cards */}
      <div className="flex items-center justify-center flex-wrap gap-11 px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="w-full sm:w-full md:w-[380px] lg:w-[400px] bg-white p-1 shadow-lg transition-transform hover:shadow-xl hover:scale-[1.01]"
            >
              <div className="p-4">
                <Image
                  height={200}
                  width={500}
                  className="w-full h-[300px] object-cover rounded"
                  src={product.img_url}
                  alt={product.name}
                />
              </div>

              <div className="flex flex-col gap-6 p-5">
                <h3 className="px-6 text-2xl text-center font-bold text-green-500">
                  {product.name}
                </h3>
                <p className="px-6 text-sm text-center text-slate-600">
                  {product.details.slice(0, 30)}
                </p>

                <div className="grid grid-cols-3">
                  <div className="flex flex-col items-center rounded-lg bg-slate-50 p-4">
                    <div className="rounded-full bg-green-200 p-3">
                      <Image
                        width={20}
                        height={20}
                        src="https://img.icons8.com/pastel-glyph/64/person-male--v1.png"
                        alt="Single Person"
                      />
                    </div>
                    <div>
                      <span className="text-sm text-slate-600">${product.price}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center rounded-lg bg-slate-50 p-4">
                    <div className="rounded-full bg-green-200 p-3">
                      <Image
                        width={20}
                        height={20}
                        src="https://img.icons8.com/windows/32/user-group-man-woman.png"
                        alt="Couple"
                      />
                    </div>
                    <div>
                      <span className="text-sm text-slate-600">${(product.price * 2).toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center rounded-lg bg-slate-50 p-4">
                    <div className="rounded-full bg-green-200 p-3">
                      <Image
                        width={20}
                        height={20}
                        src="https://img.icons8.com/ios/50/conference-call--v1.png"
                        alt="Group"
                      />
                    </div>
                    <div>
                      <span className="text-sm text-slate-600">${(product.price * 3)?.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Link href={pathname.tourPlan+`/${product.package_id}`} className="mt-3 w-full text-center rounded-lg bg-green-500 p-3 text-sm font-semibold text-white shadow-xl shadow-green-700/30 outline-none transition-transform hover:scale-105 hover:border-b-indigo-600 hover:bg-indigo-600 focus:scale-105 focus:bg-indigo-600 focus:ring-2">
                  Select Package
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full text-center py-12">
            <div className="mx-auto max-w-lg bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">No packages found</h3>
              <p className="text-gray-600 mb-6">
                We couldn&apos;t find any packages matching &quot;{searchTerm}&quot;. Try different keywords or browse all packages.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setFilteredProducts(products);
                }}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                View All Packages
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tourplan;

Tourplan.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};