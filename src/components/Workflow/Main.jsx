export default function Main() {
  return (
    <div className="">
      <div className="text-white h-96 relative bg-[url(/image/workflow.png)]  bg-center bg-cover">
        <div className="w-50  absolute  bottom-10 left-24 space-y-3">
          <p className="text-5xl">
            CUSTOM <br />
            JEWELRY
          </p>
          <p>Learn all about our custom jewelry design process.</p>
          <p className="bg-primaryColor border rounded-lg inline-block px-2 py-1">
            Get Started
          </p>
        </div>
      </div>
      <div className="bg-linear-to-b py-20 from-[#F8F8F8] to-[#DFC8A5]">
        <div className="text-center px-50 space-y-3">
          <p className="text-3xl text-[#604825]">CREATE YOUR DREAM JEWELRY</p>
          <p className="text-primaryColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem
            distinctio amet aliquam cum cumque, harum enim voluptate
            necessitatibus non maiores iure veniam autem explicabo dolore
            tempore iusto
          </p>
        </div>
        <div className="py-30 space-y-40">
          <div className="h-80 flex ml-50 border-y border-l  border-white bg-linear-to-r rounded-l-lg from-[rgba(194,137,120,0.5)] via-[rgba(255,255,255,0.1) to-[rgba(255,255,255,0.4)]]">
            <div className="h-full w-[800px]">
              <img
                src="/image/idea.png"
                className="h-full transform rounded-lg -translate-y-5 translate-x-5 w-full object-cover"
                alt=""
              />
            </div>
            <div className="">
              <div className="px-30 py-10 space-y-4">
                <p className="text-[#604825] text-3xl">Step 1 : Your Idea</p>
                <p className="text-[#777677] text-justify">
                  Share your personalized jewelry, ideas, images, or sketches
                  with us to start. Our skilled artisans will refine your
                  vision, guide you, and give a quote before starting the
                  creation process.
                </p>
              </div>
            </div>
          </div>
          <div className="h-80 flex mr-50 border-y border-r  border-white bg-linear-to-r rounded-r-lg to-[rgba(194,137,120,0.5)] via-[rgba(255,255,255,0.1) from-[rgba(255,255,255,0.4)]]">
            <div className="space-y-20">
              <div className="px-30 py-10 space-y-4">
                <p className="text-[#604825] text-3xl">Step 2 : Your Design</p>
                <p className="text-[#777677] text-justify">
                  Our design experts will use cutting-edge jewelry CAD
                  technology to create detailed renderings of your beautiful
                  design from multiple angles. You can make unlimited
                  adjustments until you are happy with the final design.
                </p>
              </div>
            </div>
            <div className="h-full w-[800px]">
              <img
                src="/image/design.png"
                className="h-full transform rounded-lg -translate-y-5 -translate-x-5 w-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="h-80 flex ml-50 border-y border-l  border-white bg-linear-to-r rounded-l-lg from-[rgba(194,137,120,0.5)] via-[rgba(255,255,255,0.1) to-[rgba(255,255,255,0.4)]]">
            <div className="h-full w-[800px]">
              <img
                src="/image/create.png"
                className="h-full transform rounded-lg -translate-y-5 translate-x-5 w-full object-cover"
                alt=""
              />
            </div>
            <div className="space-y-20">
              <div className="px-30 py-10 space-y-4">
                <p className="text-[#604825] text-3xl">Step 3 : Your Jewerly</p>
                <p className="text-[#777677] text-justify">
                  After you have given your final approval for the jewelry
                  design, our skilled jewelry artisans will begin crafting your
                  custom piece. Typically, custom pieces are completed and
                  delivered within 3 to 6 weeks, depending on the intricacy of
                  the design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
