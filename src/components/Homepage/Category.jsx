export default function Category() {
  return (
    <div className="bg-linear-to-b from-[#F2E9DB] to-[#DFC8A5] flex flex-col items-center gap-y-10 py-16">
      <div className="text-center space-y-4">
        <p className="text-4xl text-primaryFont">Shop By Category</p>
        <p className="text-[#C0914B]">Indulge in what we offer</p>
      </div>
      <div className="flex gap-x-4">
        <div className="bgCategory">
          <div className="bg-[linear-gradient(to_top,rgba(194,137,120),rgba(194,137,120,0)),url('/image/Bracelets.png')] category ">
            <p className="translate-x-4 translate-y-44 rotate-270 origin-bottom">Bracelets</p>
          </div>
        </div>
        <div className="bgCategory">
          <div className="bg-[linear-gradient(to_top,rgba(194,137,120),rgba(194,137,120,0)),url('/image/Necklaces.png')] category">
            <p className="translate-x-4 translate-y-44 rotate-270 origin-bottom">Necklaces</p>
          </div>
        </div>
        <div className=" p-1 rounded-2xl border border-white bg-linear-to-t from-20% from-[rgba(194,137,120,0.5)]  via-70% via-[rgba(255,255,255,0.1)] to-100% to-[rgba(255,255,255,0.4)]"> 
          <div className="bg-[url('/image/Rings.png')]  bg-cover  h-72 w-56 rounded-2xl text-[rgb(194,137,120)] flex justify-center items-end ">
            <p className="text-4xl pb-5">Rings</p>
          </div>
        </div>
        <div className="bgCategory">
          <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0.1),rgba(0,0,0,0)),url('/image/Earrings.png')]  category">
           <p className="translate-x-4 translate-y-44 rotate-270 origin-bottom">Earrings</p>
          </div>
        </div>
        <div className="bgCategory">
          <div className="bg-[linear-gradient(to_top,rgba(194,137,120),rgba(194,137,120,0)),url('/image/Sets.png')] category">
            <p className="translate-x-4 translate-y-44 rotate-270 origin-bottom">Sets</p>
          </div>
        </div>
      </div>
    </div>
  );
}
