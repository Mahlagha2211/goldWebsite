export default function Diamond() {
  return (
    <div className="bg-[#F2E9DB]  flex flex-col items-center gap-y-16 py-12 border border-white shadow">
      <p className="text-primaryFont text-4xl">Explore Diamonds</p>
      <div className="flex gap-x-12">
        <div className="diamond">
          <img src="./image/round.png"  alt="" />
          <p>ROUND</p>
        </div>
        <div className="diamond">
          <img src="./image/ascher.png" alt="" />
          <p>ASCHER</p>
        </div>
        <div className="diamond">
          <img src="./image/oval.png" alt="" />
          <p>OVAL</p>
        </div>
        <div className="diamond">
          <img src="./image/marquise.png" alt="" />
          <p>MARQUISE</p>
        </div>
        <div className="diamond">
          <img src="./image/emerald.png" alt="" />
          <p>EMERALD</p>
        </div>
        <div className="diamond">
          <img src="./image/cushion.png" alt="" />
          <p>CUshion</p>
        </div>
        <div className="diamond">
          <img src="./image/heart.png" alt="" />
          <p>HEART</p>
        </div>
        <div className="diamond">
          <img src="./image/pear.png" alt="" />
          <p>PEAR</p>
        </div>
      </div>
    </div>
  );
}
