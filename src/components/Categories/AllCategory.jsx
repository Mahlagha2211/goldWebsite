import { NavLink } from "react-router";

export default function AllCategory() {
  return (
    <div className=" pt-[130px] bg-linear-to-b from-[#F8F8F8] to-[#DFC8A5] px-10">
      <p className="text-center min-[580px]:text-3xl min-[400px]:text-2xl text-xl text-[#604825]">All Categories</p>
      <p className="text-center text-primaryColor mt-4 min-[400px]:text-[13px] text-[12px]">
        Find your new everyday favorite with our collection men and women
      </p>
      <div className="grid md:grid-cols-3 min-[500px]:grid-cols-2 grid-cols-1 py-20  gap-6">
        <NavLink to="/products/necklaces" className="AllCategories ">
          Necklaces
        </NavLink>
        <NavLink to="/products/rings" className="AllCategories ">
          Rings
        </NavLink>
        <NavLink to="/products/sets" className="AllCategories ">
          sets
        </NavLink>
        <NavLink to="/products/earrings" className="AllCategories ">
          earrings
        </NavLink>
        <NavLink to="/products/bracelets" className="AllCategories ">
          Bracelets
        </NavLink>
      </div>
    </div>
  );
}
