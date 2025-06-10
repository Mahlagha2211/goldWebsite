import FormCustome from "./FormCustome";
import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Create() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="text-white min-[600px]:h-96 min-[450px]:max-[600px]:h-80 h-56 relative bg-[url(/image/workflow.png)]  bg-center bg-cover">
        <div className="min-[400px]:w-50 w-36  absolute  rounded-2xl   min-[450px]:bottom-10 bottom-5 min-md:left-20 min-[400px]:max-md:left-10 left-5  space-y-3">
          <p className="min-[600px]:text-5xl min-[450px]:max-[600px]:text-3xl text-[18px] ">
            CUSTOM <br />
            JEWELRY
          </p>
          <p className="min-[450]:max-[600px]:text-[12px] text-[10px]">
            Learn all about our custom jewelry design process.
          </p>
          <p
            onClick={() => setIsOpen(true)}
            className="bg-primaryColor cursor-pointer border rounded-lg inline-block px-2 py-1 max-[450px]:text-[12px]"
          >
            Get Started
          </p>
        </div>
      </div>
      <div className="bg-linear-to-b py-20 from-[#F8F8F8] to-[#DFC8A5]">
        <div className="text-center lg:px-50 min-[550px]:max-lg:px-16 min-[400px]:max-[550px]:px-10 px-5 space-y-3">
          <p className="md:text-3xl min-[550px]:max-md:text-xl text-[18px]  text-[#604825]">
            CREATE YOUR DREAM JEWELRY
          </p>
          <p className="text-primaryColor max-md:text-[12px] ">
            why settle for purchasing a generic piece of jewelry when tou can
            have a one-of-a-kind creation? with briliance , out team of expert
            designers and skilled artisans can work with you to craft the
            perfect piece of personalized jewelry .
          </p>
        </div>
        <div className="py-30 space-y-40">
          <div className="min-[725px]:h-80 min-[550px]:max-[727px]:h-64 flex max-[550px]:flex-col min-[950px]:ml-50 ml-20 border-y border-l  border-white bg-linear-to-r rounded-l-lg from-[rgba(194,137,120,0.5)] via-[rgba(255,255,255,0.1) to-[rgba(255,255,255,0.4)]]">
            <div className="min-[550px]:h-full h-64 max-[550px]:px-5 min-[550px]:w-[800px]">
              <img
                src="/image/idea.png"
                className="h-full transform rounded-lg -translate-y-5 min-[550px]:translate-x-5 w-full object-cover"
                alt=""
              />
            </div>
            <div>
              <div className="min-[950px]:px-30 min-[727px]:max-[950px]:px-16 min-[550px]:max-[727px]:px-10 px-5 min-[727px]:py-10 min-[550px]:max-[727px]:py-5 pb-5 space-y-4">
                <p className="text-[#604825] min-[727px]:text-3xl text-xl">
                  Step 1 : Your Idea
                </p>
                <p className="text-[#777677] text-justify max-[727px]:text-[12px]">
                  Share your personalized jewelry, ideas, images, or sketches
                  with us to start. Our skilled artisans will refine your
                  vision, guide you, and give a quote before starting the
                  creation process.
                </p>
                <p
                  className="bg-primaryColor cursor-pointer border rounded-lg inline-block px-5 py-1 max-[727px]:text-[12px] text-white"
                  onClick={() => setIsOpen(true)}
                >
                  Order
                </p>
              </div>
            </div>
          </div>

          <div className="min-[725px]:h-80 min-[550px]:max-[727px]:h-64 flex max-[550px]:flex-col-reverse min-[950px]:mr-50 mr-20 border-y border-r  border-white bg-linear-to-r rounded-r-lg to-[rgba(194,137,120,0.5)] via-[rgba(255,255,255,0.1) from-[rgba(255,255,255,0.4)]]">
            <div>
              <div className="min-[950px]:px-30 min-[727px]:max-[950px]:px-16 min-[550px]:max-[727px]:px-10 px-5 min-[727px]:py-10 min-[550px]:max-[727px]:py-5 pb-5 space-y-4">
                <p className="text-[#604825] min-[727px]:text-3xl text-xl">
                  Step 2 : Your Design
                </p>
                <p className="text-[#777677] text-justify max-[727px]:text-[12px]">
                  Our design experts will use cutting-edge jewelry CAD
                  technology to create detailed renderings of your beautiful
                  design from multiple angles. You can make unlimited
                  adjustments until you are happy with the final design.
                </p>
                <p
                  className="bg-primaryColor cursor-pointer border rounded-lg inline-block px-5 py-1 max-[727px]:text-[12px] text-white"
                  onClick={() => setIsOpen(true)}
                >
                  Order
                </p>
              </div>
            </div>
            <div className="min-[550px]:h-full h-64 max-[550px]:px-5 min-[550px]:w-[800px]">
              <img
                src="/image/design.png"
                className="h-full transform rounded-lg -translate-y-5 min-[550px]:-translate-x-5 w-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="min-[725px]:h-80 min-[550px]:max-[727px]:h-64 flex max-[550px]:flex-col min-[950px]:ml-50 ml-20 border-y border-l  border-white bg-linear-to-r rounded-l-lg from-[rgba(194,137,120,0.5)] via-[rgba(255,255,255,0.1) to-[rgba(255,255,255,0.4)]]">
            <div className="min-[550px]:h-full h-64 max-[550px]:px-5 min-[550px]:w-[800px]">
              <img
                src="/image/create.png"
                className="h-full transform rounded-lg -translate-y-5 min-[550px]:translate-x-5 w-full object-cover"
                alt=""
              />
            </div>
            <div>
              <div className="min-[950px]:px-30 min-[727px]:max-[950px]:px-16 min-[550px]:max-[727px]:px-10 px-5 min-[727px]:py-10 min-[550px]:max-[727px]:py-5 pb-5 space-y-4">
                <p className="text-[#604825] min-[727px]:text-3xl text-xl">
                  Step 3 : Your Jewelry
                </p>
                <p className="text-[#777677] text-justify max-[727px]:text-[12px]">
                  After you have given your final approval for the jewelry
                  design, our skilled jewelry artisans will begin crafting your
                  custom piece. Typically, custom pieces are completed and
                  delivered within 3 to 6 weeks, depending on the intricacy of
                  the design.
                </p>
                <p
                  className="bg-primaryColor cursor-pointer border rounded-lg inline-block px-5 py-1 max-[727px]:text-[12px] text-white"
                  onClick={() => setIsOpen(true)}
                >
                  Order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Custom Modal"
        className="bg-[#e0c4ba] shadow-[0_0_10px_black]  rounded-xl  min-sm:max-w-md w-[80%] mx-auto  outline-none z-50"
        overlayClassName="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-md z-40"
      >
        <FormCustome setIsOpen={setIsOpen} />
      </Modal>
    </div>
  );
}
