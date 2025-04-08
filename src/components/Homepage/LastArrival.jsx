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
  const paginationRef = useRef(null);
  const products = [
    {
      id: 1,
      name: "necklace",
      img: "./image/big photo card2(1).png",
      price: 125.9,
    },
    {
      id: 2,
      name: "necklace",
      img: "./image/big photo card.png",
      price: 125.9,
    },
    {
      id: 3,
      name: "necklace",
      img: "./image/big photo card2(2).png",
      price: 125.9,
    },
    {
      id: 4,
      name: "necklace",
      img: "./image/big photo card2(3).png",
      price: 125.9,
    },
    {
      id: 5,
      name: "necklace",
      img: "./image/big photo card2(4).png",
      price: 125.9,
    },
  ];
  return (
    <div className="bg-linear-to-b from-[#F2E9DB] via-[#E4D1B3] to-[#DFC8A5] flex flex-col items-center gap-y-10 py-16 h-[1000px]">
      <div className="text-center space-y-4">
        <p className="text-4xl text-primaryFont">Last Arrivals</p>
        <p className="text-[#C0914B]">Indulge in what we offer</p>
      </div>
      <div className="w-2/3 relative ">
        <button
          ref={prevRef}
          className="absolute z-10  -bottom-16 left-2  p-3 rounded-full shadow text-[#C0914B] border-2 border-[#C0914B] hover:bg-[rgba(255,255,255,0.5)]"
        >
          <GrFormPrevious />
        </button>
        <button
          ref={nextRef}
          className="absolute z-10 -bottom-16 left-16  p-3 rounded-full shadow text-[#C0914B] border-2 border-[#C0914B] hover:bg-[rgba(255,255,255,0.5)]"
        >
          <GrFormNext />
        </button>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = paginationRef.current;
          }}
          pagination={{ clickable: true, el: paginationRef.current }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.navigation.init();
              swiper.navigation.update();
              swiper.pagination.init();
              swiper.pagination.update();
            }, 0);
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="space-y-3">
              <div className="bg-[linear-gradient(to_top,rgba(255,255,255,0.6),rgba(255,255,255,0.1),rgba(255,255,255,0.6))]  p-2 rounded-2xl border border-white">
                <div className=" relative">
                  <img
                    src={product.img}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute  backdrop-blur-2xl w-full text-center bottom-12">
                    <p className="text-2xl">{product.name}</p>
                    <p className="">{product.price} $</p>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#C0914B] text-center rounded-2xl p-3 border text-white">
                Add to CART
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          ref={paginationRef}
          className="absolute  space-x-4 -bottom-[52px] left-1/2"
        ></div>
      </div>
    </div>
  );
}
