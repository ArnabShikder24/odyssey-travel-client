import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { pathname } from "@/routes/routes.index";

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div onClick={() => router.push(pathname.cart)} className="shadow-2xl fixed right-12 cursor-pointer bottom-9 text-black bg-white w-14 h-14 flex items-center justify-center rounded-full font-mono">
        Cart
      </div>
      <Footer />
    </>
  );
}
