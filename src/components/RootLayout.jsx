import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
