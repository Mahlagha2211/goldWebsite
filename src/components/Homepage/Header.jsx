import { Link } from "react-router";

export default function Header() {
  return (
    <div className="bg-[#E4D1B3] md:h-[500px] flex flex-col-reverse  md:grid md:grid-cols-2 md:items-end p-12 pt-30 text-[#885c30] gap-y-10">
      <div className="flex flex-col items-baseline gap-y-3 ">
        <p className="max-sm:text-[13px]">Discover the Brilliance of Luctury Jewellry</p>
        <p className="md:text-4xl min-[1040px]:!text-5xl sm:text-2xl text-xl">
          Elevate Your Style
        </p>
        <p className="text-justify max-sm:text-[13px] min-md:max-[1040px]:text-[14px]">
          Indulge in the finest craftsmanship and timeless elegance of our
          luxury jewelry collection, where every piece tells a story of
          sophistication and beauty
        </p>
        <Link to="/product" className="bg-[#D4A373]  px-9 py-2 max-sm:text-[14px] text-white rounded-lg">
          Buy now
        </Link>
      </div>
      <div className="max-md:flex max-md:justify-center">
        <div className="flex md:justify-end justify-center relative">
          <img
            src="./image/headerImage1.png"
            className="min-[1040px]:w-42 min-[1040px]:h-54 w-32 h-44 max-[450px]:h-36 max-[450px]:w-28 rounded-t-full outline-2 outline-bgMain self-end max-md:relative max-md:left-5 md:absolute min-[1040px]:!right-38 md:right-30"
            alt=""
          />
          <img
            src="./image/headerImage.png"
            className="min-[1040px]:w-50 min-[1040px]:h-70 w-40 h-60 max-[450px]:h-50 max-[450px]:w-36 rounded-t-full outline-2 outline-bgMain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
