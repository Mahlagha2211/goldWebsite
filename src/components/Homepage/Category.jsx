import { NavLink } from "react-router";

export default function Category() {
  return (
    <div className="bg-linear-to-b from-[#F2E9DB] to-[#DFC8A5] flex flex-col items-center justify-center gap-y-10 py-16">
      <div className="text-center space-y-4">
        <p className="text-4xl text-primaryFont max-[900px]:text-3xl max-[500px]:text-xl">
          Shop By Category
        </p>
        <p className="text-[#C0914B]">Indulge in what we offer</p>
      </div>
      <div className="grid min-[700px]:grid-cols-6 gap-x-4 gap-y-4">
        <NavLink to="/products/bracelets">
          <div className="bgCategory  ">
            <div className="h-full bg-[linear-gradient(to_top,rgba(194,137,120),rgba(194,137,120,0)),url('/image/Bracelets.png')] category ">
              <p className="translate-x-4 translate-y-44 rotate-270 origin-bottom">
                Bracelets
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/products/necklaces">
          <div className="bgCategory">
            <div className="bg-[linear-gradient(to_top,rgba(194,137,120),rgba(194,137,120,0)),url('/image/Necklaces.png')] category">
              <p className="translate-x-4 translate-y-44 rotate-270 origin-bottom">
                Necklaces
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink
          to="/products/rings"
          className="col-span-2  p-1 rounded-2xl border max-[700px]:h-72 border-white  bg-linear-to-t from-20% from-[rgba(194,137,120,0.5)]  via-70% via-[rgba(255,255,255,0.1)] to-100% to-[rgba(255,255,255,0.4)]"
        >
          <div className="bg-[url('/image/Rings.png')] h-full  bg-cover bg-center  rounded-2xl text-[rgb(194,137,120)] flex justify-center items-end ">
            <p className="text-4xl pb-5">Rings</p>
          </div>
        </NavLink>
        <NavLink to="/products/earrings">
          <div className="bgCategory">
            <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0.1),rgba(0,0,0,0)),url('/image/Earrings.png')]  category">
              <p className="translate-x-4 translate-y-44 rotate-270 origin-bottom">
                Earrings
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/products/sets">
          <div className="bgCategory">
            <div className="bg-[linear-gradient(to_top,rgba(194,137,120),rgba(194,137,120,0)),url('/image/Sets.png')] category">
              <p className="translate-x-4 translate-y-44 rotate-270 origin-bottom">
                Sets
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
