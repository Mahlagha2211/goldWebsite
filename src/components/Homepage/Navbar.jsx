import { NavLink } from "react-router";
import { IoSearchSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="bg-bgMain shadow-md flex justify-between items-center px-10 py-4 absolute w-full">
      <div >
        <ul className="flex gap-x-4 text-gray-600">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-primaryColor font-bold" : "text-gray-600"}`
              }
            >
              JEWELLERY
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/releases" className={({ isActive }) =>
                `${isActive ? "text-primaryColor font-bold" : "text-gray-600"}`
              }>NEW RELEASES</NavLink>
          </li>
          <li >
            <NavLink to="/gifts " className={({ isActive }) =>
                `${isActive ? "text-primaryColor font-bold" : "text-gray-600"}`
              }>GIFTS</NavLink>
          </li>
        </ul>
      </div>
      <img src="/image/logo.png" className="w-12" alt="" />
      <div className="flex items-center gap-3 text-gray-600">
        <IoPerson className="cursor-pointer" />
        <IoSearchSharp className="cursor-pointer"  />
        <NavLink to="/products" className={({ isActive }) =>
                `border rounded-2xl px-2 py-2 ${isActive ? "text-primaryColor border-primaryColor "  : "text-gray-600 border-gray-600"}`
              }>Product Catelog</NavLink>
      </div>
    </div>
  );
}
