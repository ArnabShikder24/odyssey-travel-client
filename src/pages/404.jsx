import Image from "next/image";
import errorgif from "../../public/image/error.gif";
import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <Image src={errorgif} id="hill1" alt="Error" />
        <div>
          <div>
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              Look like you are lost
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-center">
              the page you are looking for not avaible!
            </p>
          </div>
          <div className="text-center">
            <Link href="/">
              <button className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
                <p>Go back home</p>
              </button>
            </Link>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
