import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Link from "next/link";
import { pathname } from "@/routes/routes.index";

export default function Navbar() {
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

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };
  console.log(currentRouter);
  return (
    <header className="header">
      <h2 className="logo">Odyssey</h2>
      <nav className="navigation">
        <Link className={`${currentRouter !== pathname.home ? "text-gray-500" : "text-white"} py-1.5 px-4 rounded-full mx-2 font-medium hover:bg-[#359381] hover:text-white ${currentRouter === pathname.home && "bg-[#359381]"} active:text-white`} href={pathname.home}>
          Home
        </Link>
        <Link className={`${currentRouter !== pathname.home ? `${currentRouter === pathname.about ? "text-white" : "text-gray-500"}` : "text-white"} py-1.5 px-4 rounded-full mx-2 font-medium hover:bg-[#359381] hover:text-white ${currentRouter === pathname.about && "bg-[#359381]"} active:text-white`} href={pathname.about}>About</Link>
        <Link className={`${currentRouter !== pathname.home ? `${currentRouter === pathname.developer ? "text-white" : "text-gray-500"}` : "text-white"} py-1.5 px-4 rounded-full mx-2 font-medium hover:bg-[#359381] hover:text-white ${currentRouter === pathname.developer && "bg-[#359381]"} active:text-white`} href={pathname.developer}>Developer</Link>
        <Link className={`${currentRouter !== pathname.home ? `${currentRouter === pathname.contact ? "text-white" : "text-gray-500"}` : "text-white"} py-1.5 px-4 rounded-full mx-2 font-medium hover:bg-[#359381] hover:text-white ${currentRouter === pathname.contact && "bg-[#359381]"} active:text-white`} href={pathname.contact}>Contact</Link>
        <Link className={`${currentRouter !== pathname.home ? `${currentRouter === pathname.login ? "text-white" : "text-gray-500"}` : "text-white"} py-1.5 px-4 rounded-full mx-2 font-medium hover:bg-[#359381] hover:text-white active:text-white`} href={pathname.login}>Login</Link>
      </nav>
    </header>
  );
}
