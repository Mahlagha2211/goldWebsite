import { NavLink } from "react-router";
import { IoSearchSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import DrawerNav from "./DrawerNav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-bgMain shadow-md px-10 py-4 absolute w-full">
      <div className="flex justify-between w-full items-center max-md:hidden ">
        <div>
          <ul className="flex gap-x-4 text-gray-600">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-primaryColor font-bold" : "text-gray-600"
                  } max-[992px]:text-[14px]`
                }
              >
               HOME
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/releases"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-primaryColor font-bold" : "text-gray-600"
                  } max-[992px]:text-[14px]`
                }
              >
                NEW RELEASES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gifts "
                className={({ isActive }) =>
                  `${
                    isActive ? "text-primaryColor font-bold" : "text-gray-600"
                  } max-[992px]:text-[14px]`
                }
              >
                GIFTS
              </NavLink>
            </li>
          </ul>
        </div>
        <img src="/image/logo.png" className="w-12" alt="" />
        <div className="flex items-center gap-3 text-gray-600">
          <IoPerson className="cursor-pointer" />
          <IoSearchSharp className="cursor-pointer" />
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `border rounded-2xl px-2 py-2 ${
                isActive
                  ? "text-primaryColor border-primaryColor "
                  : "text-gray-600 border-gray-600"
              } max-[992px]:text-[14px]`
            }
          >
            Product Catelog
          </NavLink>
        </div>
      </div>
      <div className="flex justify-between items-center md:hidden ">
        <img src="/image/logo.png" className="w-12" alt="" />
        <IoMenu
          size={25}
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        /> 
      </div>
      <DrawerNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
