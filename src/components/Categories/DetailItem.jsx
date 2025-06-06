import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { BeatLoader } from "react-spinners";
import MenuContext from "../context/ContexMenu";
import { toast } from "react-toastify";

export default function DetailItem() {
  const { category, id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedShape, setSelectedShape] = useState();
  const { cartShop, dispatch } = useContext(MenuContext);
  const addhandle = (dt) => {
    const before = cartShop.find((item) => item.id == dt.id);
    before
      ? dispatch({ type: "increment", payload: dt })
      : dispatch({ type: "add", payload: dt });
    toast.success("add to cart successful");
  };

  const fetchdetail = async () => {
    const response = await axios.get("/data/db.json");

    const matchedCategory = response.data.categories.find(
      (item) => item.name === category
    );
    return matchedCategory.products.find((item) => item.id == id);
  };
  const { data, isLoading } = useQuery({
    queryKey: ["item"],
    queryFn: fetchdetail,
  });
  useEffect(() => {
    if (data) {
      setSelectedImage(data.image);
    }
  }, [data, id]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[500px]">
        <BeatLoader loading={isLoading} size={15} color="#C28978" />
      </div>
    );
  const thumbnails = [
    data.image,
    "/image/errings1.webp",
    "/image/errings2.jpg",
    "/image/errings4.jpg",
    "/image/errings6.jpg",
  ];
  const shape = [
    "/image/round.png",
    "/image/ascher.png",
    "/image/oval.png",
    "/image/marquise.png",
    "/image/emerald.png",
    "/image/cushion.png",
    "/image/pear.png",
    "/image/heart.png",
  ];
  return (
    <div className="pt-[130px] py-16 grid min-[710px]:grid-cols-2 grid-cols-1 gap-y-10 md:px-15 max-[400px]:px-5 px-10 bg-linear-to-b from-[#F8F8F8] to-[#DFC8A5]">
      <div className="flex flex-col gap-y-3 items-center min-[710px]:max-lg:items-start">
        <div className="bg-linear-to-t border border-white from-20% from-[rgba(194,137,120,0.5)]  via-70% via-[rgba(255,255,255,0.1)] to-100% to-[rgba(255,255,255,0.4)] min-[900px]:w-[350px] max-[710px]:w-full w-[270px] lg:h-[320px] h-[300px] p-2 rounded-2xl">
          <img
            src={selectedImage}
            className="w-full h-full rounded-2xl "
            alt=""
          />
        </div>
        <div className="grid grid-cols-3 gap-3 min-[900px]:w-[350px] w-[270px] max-[710px]:w-full">
          {thumbnails.map((thumb, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(thumb)}
              className={`border-2 p-1 rounded-2xl transition cursor-pointer ${
                selectedImage === thumb
                  ? "border-primaryColor bg-[rgba(255,255,255,0.6)]"
                  : "border-white bg-[rgba(255,255,255,0.4)]"
              }`}
            >
              <img
                src={thumb}
                className="rounded-lg lg:h-24 max-[710px]:h-24 h-20 w-full object-cover"
                alt=""
              />
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-3 max-[710px]:!justify-self-start  max-md:justify-self-end max-[500px]:text-[12px] min-[500px]:max-[710px]:text-[15px] min-[710px]:max-lg:text-[13px]">
        <p className="lg:text-3xl max-[400px]:text-[15px] min-[500px]:max-[710px]:text-2xl min-[900px]:max-lg:text-2xl text-xl max-[900px]:font-bold text-[#604825]">
          {data.name}
        </p>
        <p className="text-[#5A5A5A]">Ariana Grande x drop earrings</p>
        <p>Crystal pearl, Mixed cuts, White, Rhodium plated</p>
        <p>$15.99</p>
        <p
          onClick={() => addhandle(data)}
          className="bg-primaryColor cursor-pointer inline-block px-3 py-1 rounded-lg text-white"
        >
          add to cart
        </p>
        <p>
          <span className="text-[#604825] font-bold">select your metal:</span>
          Metal: Sterling Silver
        </p>
        <div className="flex gap-x-3">
          <div
            onClick={() => setSelectedColor(1)}
            className={`bg-[radial-gradient(circle_at_top_left,_#545454,_#D9D9D9)] w-7 h-7 rounded-full ${
              selectedColor == 1 ? "border border-black" : ""
            }`}
          ></div>
          <div
            onClick={() => setSelectedColor(2)}
            className={`bg-[radial-gradient(circle_at_top_left,_#C0914B,_#D5B687)] w-7 h-7 rounded-full ${
              selectedColor == 2 ? "border border-black" : ""
            }`}
          ></div>
          <div
            onClick={() => setSelectedColor(3)}
            className={`bg-[radial-gradient(circle_at_top_left,_rgba(194,137,120),_rgba(194,137,120,0.6))] w-7 h-7 rounded-full ${
              selectedColor == 3 ? "border border-black" : ""
            }`}
          ></div>
        </div>
        <p>
          <span className="text-[#604825] font-bold">
            select your stone shape:
          </span>
          heart brilliant-cut
        </p>
        <div className="flex items-center gap-x-3">
          {shape.map((item, index) => (
            <img
              src={item}
              alt=""
              onClick={() => setSelectedShape(index)}
              className={`max-[400px]:w-6 max-[400px]:h-6 w-7 cursor-pointer h-7 p-[2px] rounded-full ${
                selectedShape == index
                  ? " shadow-[0_1px_2px_rgba(194,137,120)] bg-white"
                  : ""
              }`}
            />
          ))}
        </div>
        <p className="text-[#604825] font-bold">select your size: </p>
        <div className="flex gap-x-3">
          <p
            onClick={() => setSelectedSize(1)}
            className={`border cursor-pointer px-4 py-1 rounded-lg ${
              selectedSize == 1 ? " border-black" : "border-primaryColor"
            }`}
          >
            6
          </p>
          <p
            onClick={() => setSelectedSize(2)}
            className={`border cursor-pointer  px-4 py-1 rounded-lg ${
              selectedSize == 2 ? " border-black" : "border-primaryColor"
            } `}
          >
            7
          </p>
          <p
            onClick={() => setSelectedSize(3)}
            className={`border cursor-pointer px-4 py-1 rounded-lg ${
              selectedSize == 3 ? " border-black" : "border-primaryColor"
            }`}
          >
            8
          </p>
          <p
            onClick={() => setSelectedSize(4)}
            className={`border cursor-pointer px-4 py-1 rounded-lg ${
              selectedSize == 4 ? " border-black" : "border-primaryColor"
            }`}
          >
            custom size
          </p>
        </div>
      </div>
    </div>
  );
}
