import { useContext } from "react";
import MenuContext from "../context/ContexMenu";
import { IoIosHeart } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router";

export default function Likes() {
  const { favorite, dispatchFavorite } = useContext(MenuContext);
  return (
    <div className="min-h-[500px] bg-linear-to-b pt-[130px] gap-y-6 from-[#F8F8F8] to-[#DFC8A5] flex flex-col items-center">
      <p className="text-center min-[580px]:text-3xl min-[400px]:text-2xl text-xl text-[#604825]">
        Favorites
      </p>
      {favorite && favorite.length > 0 ? (
        <div className="grid md:grid-cols-2 grid-cols-1 w-full lg:px-20 sm:px-10 px-5 gap-5 pt-5 pb-16">
          {favorite.map((any) => (
            <NavLink
              to={`/products/${any.category}/${any.id}`}
              className="flex justify-between p-2 bg-[rgba(194,137,120,0.8)] relative overflow-hidden rounded-lg gap-x-2 "
            >
              <div className="flex gap-x-3">
                <img
                  src={any.image}
                  className="rounded-lg min-[450px]:h-24 min-[450px]:w-30 h-20 w-24"
                  alt=""
                />
                <div className="">
                  <p className="text-[12px]">{any.name}</p>
                  <p>15.99</p>
                </div>
              </div>
              <div className="flex gap-x-3">
                <IoIosHeart className=" text-red-600" />
                <IoMdClose
                  className="cursor-pointer "
                  size={15}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    dispatchFavorite({ type: "delete", payload: any });
                  }}
                />
              </div>
            </NavLink>
          ))}
        </div>
      ) : (
        <p className=" text-primaryColor">No Items in Your Favorites</p>
      )}
    </div>
  );
}
