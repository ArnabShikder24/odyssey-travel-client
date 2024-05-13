import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import styles from "../styles/Navbar.module.css";
// sakib
export default function Navbar() {
  const [btnClicked, setBtnClicked] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const currentRouter = router.pathname;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const shadow = document.getElementById("main_div");

    window.onscroll = () => {
      if (window.scrollY > 50) {
        shadow.classList.add("shadow");
      } else {
        shadow.classList.remove("shadow");
      }
    };
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div id="main_div" className="sticky top-0 z-10">
      <nav className="px-4 py-3 bg-[#fbfcfd]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Image
              src={"/logo.jpeg"}
              alt=""
              width={40}
              height={40}
              onClick={() => router.push("/")}
              className="cursor-pointer rounded"
            />
            {/* {className = "hidden md:block" } */}
            {/* <Image src={'/logo-small.svg'} alt="" width={47} height={47} className="md:hidden" /> */}
            <div className="md:flex space-x-6 hidden">
              <Link
                className={`text-[#00000080] hover:text-mainYellow font-semibold text-sm ${
                  currentRouter === "/" && "text-mainYellow"
                }`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`text-[#00000080] hover:text-mainYellow font-semibold text-sm ${
                  currentRouter === "/about" && "text-mainYellow"
                }`}
                href="/about"
              >
                About
              </Link>
              {loading ? (
                <p>loading..</p>
              ) : (
                <>
                  {user && (
                    <>
                      <Link
                        className={`text-[#00000080] hover:text-mainYellow font-semibold text-sm ${
                          currentRouter === "/products" && "text-mainYellow"
                        }`}
                        href="/products"
                      >
                        Products
                      </Link>
                      <Link
                        className={`text-[#00000080] hover:text-mainYellow font-semibold text-sm ${
                          currentRouter === "/cart" && "text-mainYellow"
                        }`}
                        href="/cart"
                      >
                        Cart
                      </Link>
                    </>
                  )}
                </>
              )}
              <Link
                className={`text-[#00000080] hover:text-mainYellow font-semibold text-sm ${
                  currentRouter === "/contact" && "text-mainYellow"
                }`}
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className={`text-[#00000080] hover:text-mainYellow font-semibold text-sm ${
                  currentRouter === "/developer" && "text-mainYellow"
                }`}
                href="/developer"
              >
                Developer
              </Link>
              {loading ? (
                <p>loading..</p>
              ) : (
                <>
                  {user ? (
                    <>
                      <span>Welcome, {user.email}</span>
                      <button
                        className="bg-red-500 px-5 py-1 rounded-md text-white"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link
                      className={`text-[#00000080] hover:text-mainYellow font-semibold text-sm ${
                        currentRouter === "/login" && "text-mainYellow"
                      }`}
                      href="/login"
                    >
                      LogIn
                    </Link>
                  )}
                </>
              )}
            </div>
            <div
              id="menu_btn"
              className={`block md:hidden focus:outline-none ${
                styles.hamburger
              } ${btnClicked && styles.open}`}
              onClick={() => setBtnClicked((btnClicked) => !btnClicked)}
            >
              <span className={styles.hamburger_top}></span>
              <span className={styles.hamburger_middle}></span>
              <span className={styles.hamburger_bottom}></span>
            </div>
          </div>

          <div className="md:hidden">
            {btnClicked && (
              <div
                id="menu"
                className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
              >
                <Link
                  className={`text-[#00000080] hover:text-mainYellow font-semibold text-base ${
                    currentRouter === "/" && "text-mainYellow"
                  }`}
                  href="/"
                  onClick={() => setBtnClicked((btnClicked) => !btnClicked)}
                >
                  Home
                </Link>
                <Link
                  className={`text-[#00000080] hover:text-mainYellow font-semibold text-base ${
                    currentRouter === "/about" && "text-mainYellow"
                  }`}
                  href="/about"
                  onClick={() => setBtnClicked((btnClicked) => !btnClicked)}
                >
                  About
                </Link>
                {loading ? (
                  <p>loading..</p>
                ) : (
                  <>
                    {user && (
                      <>
                        <Link
                          className={`text-[#00000080] hover:text-mainYellow font-semibold text-base ${
                            currentRouter === "/products" && "text-mainYellow"
                          }`}
                          href="/products"
                          onClick={() =>
                            setBtnClicked((btnClicked) => !btnClicked)
                          }
                        >
                          Products
                        </Link>
                        <Link
                          className={`text-[#00000080] hover:text-mainYellow font-semibold text-sm ${
                            currentRouter === "/cart" && "text-mainYellow"
                          }`}
                          href="/cart"
                        >
                          Cart
                        </Link>
                      </>
                    )}
                  </>
                )}
                <Link
                  className={`text-[#00000080] hover:text-mainYellow font-semibold text-base ${
                    currentRouter === "/contact" && "text-mainYellow"
                  }`}
                  href="/contact"
                  onClick={() => setBtnClicked((btnClicked) => !btnClicked)}
                >
                  Contact
                </Link>
                <Link
                  className={`text-[#00000080] hover:text-mainYellow font-semibold text-base ${
                    currentRouter === "/developer" && "text-mainYellow"
                  }`}
                  href="/developer"
                  onClick={() => setBtnClicked((btnClicked) => !btnClicked)}
                >
                  Developer
                </Link>
                {loading ? (
                  <p>loading..</p>
                ) : (
                  <>
                    {user ? (
                      <>
                        <span>Welcome, {user.email}</span>
                        <button
                          className="bg-red-500 px-5 py-1  rounded-md text-white"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <Link
                        className={`text-[#00000080] hover:text-mainYellow font-semibold text-sm ${
                          currentRouter === "/login" && "text-mainYellow"
                        }`}
                        href="/login"
                      >
                        LogIn
                      </Link>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
