import Image from "next/image";
import { useEffect, useState } from "react";
import hill1 from "../../public/image/hill1.png";
import hill2 from "../../public/image/hill2.png";
import hill3 from "../../public/image/hill3.png";
import hill4 from "../../public/image/hill4.png";
import hill5 from "../../public/image/hill5.png";
import tree from "../../public/image/tree.png";
import plant from "../../public/image/plant.png";
import leaf from "../../public/image/leaf.png";
import RootLayout from "@/components/RootLayout";
import { pathname } from "@/routes/routes.index";
import Link from "next/link";
import axios from "axios";
import Contact from "./contact";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/pack', {
          headers: {
            'Accept': 'application/json'
          }
        });
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching products:', error.message);
      }
    };

    fetchData();
  }, []); 
  
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      const maxScroll = 500;
      const clampedValue = Math.min(value, maxScroll);

      document.getElementById("text").style.marginTop = `${
        clampedValue * 2.5
      }px`;
      document.getElementById("leaf").style.top = `${clampedValue * -1.5}px`;
      document.getElementById("leaf").style.left = `${clampedValue * 1.5}px`;
      document.getElementById("hill5").style.left = `${clampedValue * 1.5}px`;
      document.getElementById("hill4").style.left = `${clampedValue * -1.5}px`;
      document.getElementById("hill1").style.top = `${clampedValue * 1}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-container">
      <section className="parallax">
        <Image src={hill1} id="hill1" alt="Hill 1" />
        <Image src={hill2} id="hill2" alt="Hill 2" />
        <Image src={hill3} id="hill3" alt="Hill 3" />
        <Image src={hill4} id="hill4" alt="Hill 4" />
        <Image src={hill5} id="hill5" alt="Hill 5" />
        <Image src={tree} id="tree" alt="Tree" />
        <h2 id="text">Odyssey Travels</h2>
        <Image src={leaf} id="leaf" alt="Leaf" />
        <Image src={plant} id="plant" alt="Plant" />
      </section>

      <section className="sec">
        <h2 className="text-center py-5">Select Your Perfect Tour</h2>
        <div className="flex items-center justify-center min-h-screen flex-wrap py-10 gap-11">
      {products.slice(0, 6)?.map((product, index) => (
        <div
          key={index}
          className="w-full sm:w-full md:w-[380px] lg:w-[400px] bg-white p-1 shadow-lg"
        >
          <div className="p-4">
            <Image
              height={200}
              width={500}
              className="w-full h-[300px]"
              src={product.img_url}
              alt=""
            />
          </div>

          <div className="flex flex-col gap-6 p-5">
            <h3 className="px-6 text-2xl text-center font-bold text-green-500">
              {product.name}
            </h3>
            <p className="px-6 text-sm text-center text-slate-600">
              {product.details.slice(0, 20)}
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
                  <span className="text-sm text-slate-600">${product.price}</span>
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
                  <span className="text-sm text-slate-600">${product.price * 2}</span>
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
                  <span className="text-sm text-slate-600">${product.price * 3}</span>
                </div>
              </div>
            </div>

            <Link href={pathname.tourPlan+`/${product.package_id}`} className="mt-3 w-full text-center rounded-lg bg-green-500 p-3 text-sm font-semibold text-white shadow-xl shadow-green-700/30 outline-none transition-transform hover:scale-105 hover:border-b-indigo-600 hover:bg-indigo-600 focus:scale-105 focus:bg-indigo-600 focus:ring-2">
              Select Package
            </Link>
          </div>
        </div>
      ))}
    </div>
      </section>

      <section className="sec2">
        <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-center text-purple-600 mb-8">
          What Our Clients Say
        </h2>

        <div className="flex flex-wrap justify-center gap-8 py-10">
          {/* Testimonial Card 1 */}
          <div className="max-w-sm bg-green-400 shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Image
                width={20}
                height={20}
                src="https://img.icons8.com/windows/32/user-group-man-woman.png"
                alt="person-male--v1"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-gray-600">CEO, Company X</p>
              </div>
            </div>
            <p className="text-gray-700">
              The team delivered a top-notch product that exceeded our expectations. Their attention to detail and dedication is unmatched!
            </p>
            <div className="mt-4 flex items-center">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="ml-2 text-gray-600">(5/5)</span>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="max-w-sm bg-green-400 shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Image
                width={20}
                height={20}
                src="https://img.icons8.com/windows/32/user-group-man-woman.png"
                alt="person-male--v1"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Jane Smith</h3>
                <p className="text-gray-600">CTO, Innovatech</p>
              </div>
            </div>
            <p className="text-gray-700">
            Absolutely fantastic experience! The developers were responsive, professional, and delivered everything on time.
            </p>
            <div className="mt-4 flex items-center">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="ml-2 text-gray-600">(5/5)</span>
            </div>
              </div>
              
          {/* Testimonial Card 3 */}
          <div className="max-w-sm bg-green-400 shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Image
                width={20}
                height={20}
                src="https://img.icons8.com/windows/32/user-group-man-woman.png"
                alt="person-male--v1"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Smith</h3>
                <p className="text-gray-600">COT, Innovatech</p>
              </div>
            </div>
            <p className="text-gray-700">
              Absolutely fantastic experience! The developers were responsive, professional, and delivered everything on time.
            </p>
            <div className="mt-4 flex items-center">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="ml-2 text-gray-600">(5/5)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>
      <section className="py-10 bg-[#003329] sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="animate__bounceIn animate__delay-5s text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
              Contact us
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">
              We believe that travel is not just about visiting new places, but
              about creating memories that last a lifetime. With our extensive
              knowledge, insider access, and unwavering customer support, we
              ensure every trip is as unique as the traveler embarking on it.
              Join us and discover a world of possibilities.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
              <div className="overflow-hidden bg-white rounded-xl animate__flipOutX animate__delay-4s">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium text-gray-900">
                    +880151234564
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    +88096523655
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded-xl animate__flipOutX animate__delay-4s">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium text-gray-900">
                    odysseytravels@gmail.com
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    odyssey.inc@apple.com
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded-xl animate__flipOutX animate__delay-2s">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                    8502 Hazari Lane. Cinema Palace, Chittagong 98380,
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden bg-white rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-gray-900">
                  Send us a message
                </h3>

                <form action="#" method="POST" className="mt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Your name{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Phone number{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="tel"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Company name{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Message{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          name=""
                          id=""
                          placeholder=""
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
