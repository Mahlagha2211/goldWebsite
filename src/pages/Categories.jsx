import { Outlet } from "react-router";
import Footer from "../components/Homepage/Footer";
import Navbar from "../components/Homepage/Navbar";

export default function categories() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
