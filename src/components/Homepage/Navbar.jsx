import { NavLink, useNavigate } from "react-router";
import { FaShoppingBag } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useContext, useState } from "react";
import DrawerNav from "./DrawerNav";
import DrawerShop from "./DrawerShop";
import MenuContext from "../context/ContexMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [shopOpen, setShopOpen] = useState(false);
  const { numberCart } = useContext(MenuContext);
  return (
    <div className="bg-bgMain shadow-md min-[400px]:px-10 px-5 py-4 relative w-full">
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
                to="/workflow"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-primaryColor font-bold" : "text-gray-600"
                  } max-[992px]:text-[14px]`
                }
              >
                WORKFLOW
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
                FAVORITES
              </NavLink>
            </li>
          </ul>
        </div>
        <img
          src="/image/logo.png"
          onClick={() => navigate("/")}
          className="cursor-pointer w-12"
          alt=""
        />
        <div className="flex items-center relative gap-7 text-gray-600">
          <IoPerson className="cursor-pointer w-6 h-6" />
          <p className="bg-primaryColor text-white px-2 rounded-full absolute bottom-5 left-16">
            {numberCart}
          </p>

          <FaShoppingBag
            className="cursor-pointer w-6 h-6"
            onClick={() => setShopOpen(!shopOpen)}
          />
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
        <img
          src="/image/logo.png"
          className="w-12 cursor-pointer"
          onClick={() => navigate("/")}
          alt=""
        />
        <div className="flex items-center relative gap-x-7">
          <p className="bg-primaryColor text-white px-2 rounded-full absolute bottom-3 left-3">
            {numberCart}
          </p>
          <FaShoppingBag
            className="cursor-pointer w-6 h-6"
            onClick={() => setShopOpen(!shopOpen)}
          />
          <IoMenu
            size={25}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <DrawerNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <DrawerShop shopOpen={shopOpen} setShopOpen={setShopOpen} />
    </div>
  );
}
