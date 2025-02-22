import Contact from "../../../Components/Website/ContactBar/Contact";
import Navbar from "../../../Components/Website/Navbar/Navbar";

import Footer from "../../../Components/Website/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Contact />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
