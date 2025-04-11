import React, { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function Opinion() {
  const testimonials = [
    {
      name: "Tina",
      text: "Fast shipping and great customer service. The bracelet fits perfectly and looks exquisite!",
      image: "./image/customer1.png",
    },
    {
      name: "Sonia",
      text: "Such a unique design! I love how delicate yet eye-catching it is. Thank you for this masterpiece.",
      image: "./image/customer2.png",
    },
    {
      name: "Sara",
      text: "This necklace is a dream! I’ve received so many compliments already. Highly recommend!",
      image: "./image/customer3.png",
    },
  
  ];
  const [index, setIndex] = useState(0);
  const length = testimonials.length;

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % length);
  };

  const getPosition = (i) => {
    if (i === index) return "center";
    if (i === (index - 1 + length) % length) return "left";
    if (i === (index + 1) % length) return "right";
    return "hidden";
  };
  return (
    <div className="bg-linear-to-b from-[#EADAC3] to-[#DFC8A5] flex flex-col items-center gap-y-8 py-16">
      <p className="text-4xl text-primaryFont">OUR Satisfied Customers </p>
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center ">
        <button
          onClick={prev}
          className="absolute left-12 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full shadow text-[#C0914B] border-2 border-[#C0914B] hover:bg-[rgba(255,255,255,0.5)]"
        >
          <GrFormPrevious />
        </button>

        <div className="relative flex w-full h-[400px] items-center justify-center">
          {testimonials.map((t, i) => {
            const pos = getPosition(i);

            const base = "transition-all duration-800 ease-in-out absolute";
            const common =
              "flex flex-col items-center text-center  rounded-xl shadow-xl p-2 w-[260px] border border-white";

            const positions = {
              center: "z-30 scale-[1.25] opacity-100 translate-x-0 bg-[#D9B8A7]",
              left: "-translate-x-[300px] scale-90 z-20 opacity-60 bg-[#F9F0E9] ",
              right: "translate-x-[300px] scale-90 z-20 opacity-60 bg-[#F9F0E9]",
              hidden: "opacity-0 pointer-events-none",
            };

            return (
              <div key={i} className={`${base} ${common} ${positions[pos]}  `}>
                <div className="rounded-xl  p-5 flex flex-col items-center gap-y-2">
                  
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 rounded-full   border border-white "
                  />
                  <p className="text-md  text-[#815B50]">{t.name}</p>
                  <p className="text-[11px] text-[#464646] mt-2">{t.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="absolute right-12 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full shadow text-[#C0914B] border-2 border-[#C0914B] hover:bg-[rgba(255,255,255,0.5)]"
        >
          <GrFormNext />
        </button>
      </div>
    </div>
  );
}
