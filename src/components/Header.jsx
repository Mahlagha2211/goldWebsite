import { Link } from "react-router";

export default function Header() {
  return (
    <div className="bg-[#E4D1B3] h-[500px] grid grid-cols-2 items-end p-10">
      <div className="flex flex-col items-baseline gap-y-3">
        <p>Discover the Brilliance of Luctury Jewellry</p>
        <p className="text-6xl">Elevate Your Style</p>
        <p>
          Indulge in the finest craftsmanship and timeless elegance of our
          luxury jewelry collection, where every piece tells a story of
          sophistication and beauty
        </p>
        <Link to="/product" className="bg-[#D4A373] p-4 text-white rounded-lg" > Buy now</Link>
      </div>
      <div className="flex justify-end relative ">
        <img
          src="../../../public/image/headerImage1.png"
          className="w-42 h-54 rounded-t-full outline-2 outline-bgMain self-end absolute right-38"
          alt=""
        />
        <img
          src="../../../public/image/headerImage.png"
          className="w-50 h-70 rounded-t-full outline-2 outline-bgMain"
          alt=""
        />
      </div>
    </div>
  );
}
