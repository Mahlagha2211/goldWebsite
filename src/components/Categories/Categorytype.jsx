import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router";

import { BeatLoader } from "react-spinners";
import { useContext } from "react";
import MenuContext from "../context/ContexMenu";
import { toast } from "react-toastify";
import { IoIosHeart } from "react-icons/io";

export default function Categorytype() {
  const { cartShop, dispatch, favorite, dispatchFavorite } =
    useContext(MenuContext);
  const { category } = useParams();
  const addhandle = (dt) => {
    const before = cartShop.find((item) => item.id == dt.id);
    before
      ? dispatch({ type: "increment", payload: dt })
      : dispatch({ type: "add", payload: dt });

    toast.success("add to cart successful");
  };
  const handelFavorite = (dt) => {
    const beforeFavorite = favorite.find((item) => item.id == dt.id);

    if (beforeFavorite) {
      toast.warning("Already added to favorites");
    } else {
      const newFavorite = { ...dt, category: category };
      dispatchFavorite({ type: "add", payload: newFavorite });
      toast.success("Added to favorites successfully!");
    }
  };
  const fetchedData = async () => {
    const response = await axios.get("/data/db.json");
    return response.data.categories.find((item) => item.name == category);
  };
  const { data, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: fetchedData,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[500px]">
        <BeatLoader loading={isLoading} size={15} color="#C28978" />
      </div>
    );
  return (
    <div className=" pt-[130px] md:px-15 px-10 bg-linear-to-b from-[#F8F8F8] to-[#DFC8A5]">
      <p className="text-center min-[580px]:text-3xl min-[400px]:text-2xl text-xl text-[#604825]">
        {data.name}
      </p>
      <p className="text-center text-primaryColor mt-4 min-[400px]:text-[13px] text-[12px]">
        Find your new everyday favorite with our collection of {data.name} for
        men and women
      </p>
      <hr className="text-primaryColor mt-8" />
      <div className="grid lg:grid-cols-3 min-[580px]:grid-cols-2 grid-cols-1 py-20  sm:gap-x-6 gap-x-3 gap-y-8 items-stretch">
        {data.products.map((item) => (
          <div key={item.id} className="flex flex-col h-full">
            <div className="flex-1 rounded-2xl p-2 border border-white overflow-hidden bg-gradient-to-b from-[rgba(255,255,255,0.4)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.4)]">
              <NavLink
                to={`/products/${category}/${item.id}`}
                className="bg-white relative w-full h-full rounded-2xl overflow-hidden flex flex-col"
              >
                <IoIosHeart
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handelFavorite(item);
                  }}
                  className={`absolute right-3 top-3  w-6 h-6  ${
                    favorite.find((favItem) => favItem.id === item.id)
                      ? "text-red-600"
                      : "text-[#d18989]"
                  }`}
                />

                <img
                  src={item.image}
                  className="w-full min-[1100px]:h-72 min-[580px]:h-52 h-40"
                />
                <div className="py-2 sm:px-6 px-4 space-y-2 flex flex-col flex-1">
                  <p className="text-[#C28978] font-bold max-[850px]:text-[13px]">
                    {item.name}
                  </p>
                  <p className="text-justify min-[850px]:text-[14px] min-[400px]:text-[12px] text-[11px] flex-1">
                    Lab-Grown Diamonds by KAY Emerald-Cut Halo Necklace 1/2 ct
                    tw 10K White Gold 18"
                  </p>
                  <p className="text-[#B53A3A]">$15.99</p>
                </div>
              </NavLink>
            </div>
            <div
              className="bg-primaryColor cursor-pointer text-center w-full py-2 text-white rounded-2xl border border-white mt-3"
              onClick={() => addhandle(item)}
            >
              add to card
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
