import Navbar from "../components/Homepage/Navbar";
import Header from "../components/Homepage/Header";
import Category from "../components/Homepage/Category";
import LastArrival from "../components/Homepage/LastArrival";
import Diamond from "../components/Homepage/Diamond";
import Opinion from "../components/Homepage/opinion";
import Footer from "../components/Homepage/Footer";
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Category />
      <LastArrival />
      <Diamond />
      <Opinion />
      <Footer />
    </div>
  );
}
