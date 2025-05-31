import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

export default function LastArrival() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "necklace",
      img: "./image/arrival1.png",
      explain:
        "Now + Forever Lab-Grown Diamonds Princess-Cut Bridal Set 1-1/2 ct tw 14K Yellow Gold",
      price: 125.9,
    },
    {
      id: 2,
      name: "necklace",
      img: "./image/arrival2.png",
      explain:
        "Now + Forever Lab-Grown Diamonds Princess-Cut Bridal Set 1-1/2 ct tw 14K Yellow Gold",
      price: 125.9,
    },
    {
      id: 3,
      name: "necklace",
      img: "./image/arrival3.png",
      explain:
        "Now + Forever Lab-Grown Diamonds Princess-Cut Bridal Set 1-1/2 ct tw 14K Yellow Gold",
      price: 125.9,
    },
    {
      id: 4,
      name: "necklace",
      img: "./image/arrival4.png",
      explain:
        "Now + Forever Lab-Grown Diamonds Princess-Cut Bridal Set 1-1/2 ct tw 14K Yellow Gold",
      price: 125.9,
    },
    {
      id: 5,
      name: "necklace",
      img: "./image/arrival5.png",
      explain:
        "Now + Forever Lab-Grown Diamonds Princess-Cut Bridal Set 1-1/2 ct tw 14K Yellow Gold",
      price: 125.9,
    },
  ];
  return (
    <div className="bg-linear-to-b from-[#F2E9DB] via-[#E4D1B3] to-[#DFC8A5] flex flex-col items-center gap-y-10 py-16 ">
      <div className="text-center space-y-4">
        <p className="text-4xl text-primaryFont max-[900px]:text-3xl max-[500px]:text-xl">Last Arrivals</p>
        <p className="text-[#C0914B]">Indulge in what we offer</p>
      </div>
      <div className="w-3/4  relative ">
        <button
          ref={prevRef}
          className="absolute z-10  bottom-1/2 sm:-left-16 max-[400px]:-left-5 -left-10  sm:p-3 p-2 rounded-full shadow text-[#C0914B] border-2 border-[#C0914B] hover:bg-[rgba(255,255,255,0.5)]"
        >
          <GrFormPrevious />
        </button>
        <button
          ref={nextRef}
          className="absolute z-10 bottom-1/2 sm:-right-16  sm:p-3 p-2 max-[400px]:-right-5 -right-10 rounded-full shadow text-[#C0914B] border-2 border-[#C0914B] hover:bg-[rgba(255,255,255,0.5)]"
        >
          <GrFormNext />
        </button>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={12}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            550: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id} className="space-y-3">
              <div
                className={`p-2  rounded-2xl  border border-white ${
                  index % 2 === 0
                    ? "bg-[linear-gradient(to_top,rgba(255,255,255,0.6),rgba(255,255,255,0.1),rgba(255,255,255,0.6))] "
                    : "bg-linear-to-t from-20% from-[rgba(194,137,120,0.5)]  via-70% via-[rgba(255,255,255,0.1)] to-100% to-[rgba(255,255,255,0.4)]"
                } `}
              >
                <div className=" relative rounded-2xl overflow-hidden">
                  <img
                    src={product.img}
                    className="w-full h-[350px] max-[500px]:h-[300px]  "
                  />
                  <div className="absolute w-full text-center bottom-0  p-4">
                    <p className="text-xl max-[500px]:text-[18px]">{product.name}</p>
                    <p className="text-justify text-[12px] max-[500px]:text-[11px]">{product.explain}</p>
                    <p className="">{product.price} $</p>
                  </div>
                </div>
              </div>
              <div
                className={`w-full  text-center rounded-2xl sm:p-3 py-2 max-sm:text-[13px] border text-white cursor-pointer ${
                  index % 2 === 0
                    ? "bg-[#a87830] hover:bg-[#C0914B]"
                    : "bg-[rgba(194,137,120,0.8)] border-[#C28978] hover:bg-[rgb(197,133,114)]"
                }`}
              >
                Add to CART
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="max-[900px]:hidden w-full my-32 grid min-[900px]:grid-cols-2 grid-cols-1 gap-x-3 relative">
        <div className="bg-linear-to-t   from-[rgba(255,255,255,0.6)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.6)]  border border-white pl-10 pr-30 space-y-4 h-80 flex justify-center  flex-col">
          <p className="text-4xl max-[1150px]:text-2xl text-[#806132]">
            <span className="text-6xl max-[1150px]:text-5xl">Gifts</span> Of The Season
          </p>
          <p className="text-[#604825]  text-justify">
            When it comes to celebrations we strive to make your experience as
            brilliant as our jewelry with the perfect pieces for every occasion.
          </p>
          <a
            href=""
            className="bg-[#C0914B] text-white p-2 rounded-lg text-sm border self-baseline"
          >
            EXPLORE NOW
          </a>
        </div>
        <div className="bg-linear-to-t from-[rgba(255,255,255,0.6)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.6)] rounded-tl-2xl rounded-bl-2xl py-2 pl-2  absolute min-[1210px]:w-[700px] min-[1090px]:w-[650px] w-[550px]  h-96 right-0 -top-7 border border-white ">
          <img
            src="./image/necklace3.png"
            alt=""
            className="rounded-tl-2xl rounded-bl-2xl w-full h-full  "
          />
        </div>
      </div>
    </div>
  );
}
