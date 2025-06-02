import { NavLink } from "react-router";

export default function AllCategory() {
  return (
    <div className=" pt-[130px] bg-linear-to-b from-[#F8F8F8] to-[#DFC8A5]">
      <p className="text-center text-3xl text-[#604825]">All Categories</p>
      <p className="text-center text-primaryColor mt-4">
        Find your new everyday favorite with our collection and women
      </p>
      <div className="grid grid-cols-3 py-20 px-10 gap-6">
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
