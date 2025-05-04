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
      <Footer />
    </>
  );
}
