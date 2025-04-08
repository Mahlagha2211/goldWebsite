import Navbar from "../components/Homepage/Navbar";
import Header from "../components/Homepage/Header";
import Category from "../components/Homepage/Category";
import LastArrival from "../components/Homepage/LastArrival";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Category />
      <LastArrival />
    </div>
  );
}
