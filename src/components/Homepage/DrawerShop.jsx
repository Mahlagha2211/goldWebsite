import { Drawer, ThemeProvider, createTheme } from "flowbite-react";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import MenuContext from "../context/ContexMenu";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function DrawerShop({ shopOpen, setShopOpen }) {
  const { cartShop, dispatch, allPriceShop } = useContext(MenuContext);
  const customTheme = createTheme({
    drawer: {
      root: {
        base: "!bg-bgMain text-[#666666]",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Drawer
          open={shopOpen}
          onClose={() => setShopOpen(false)}
          position="right"
          className="!overflow-x-hidden  px-0 transition-all duration-700 ease-in-out space-y-6  text-xl "
        >
          <div className="flex justify-between px-4">
            <p>Menu</p>
            <IoMdClose
              className="cursor-pointer "
              size={25}
              onClick={() => setShopOpen(false)}
            />
          </div>
          <hr />
          <div className="space-y-5 relative">
            {cartShop.map((item) => (
              <div key={item.id} className="flex px-3 items-center gap-x-1  ">
                <IoMdClose
                  onClick={() => dispatch({ type: "delete", payload: item })}
                  className="cursor-pointer text-[15px]"
                />
                <div className="flex items-center gap-x-2">
                  <img
                    src={item.image}
                    className="w-16 h-16 rounded-lg"
                    alt=""
                  />
                  <p className="text-[12px] w-24 ">
                    {item.name.split(" ").slice(0, 2).join(" ")}
                  </p>
                  <div className="flex text-[12px] items-center border rounded-lg gap-x-1 p-1">
                    <FaPlus
                      onClick={() =>
                        dispatch({ type: "increment", payload: item })
                      }
                    />
                    <p>{item.count}</p>
                    <FaMinus
                      onClick={() =>
                        dispatch({ type: "decrease", payload: item })
                      }
                    />
                  </div>
                  <p className="text-[15px] font-bold">{item.totalPrice}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="fixed bottom-0 w-[320px]   space-y-2 py-2 z-50 bg-[#D9B8A7] shadow shadow-black   px-3  text-black">
            <div className="flex w-full justify-between">
              <p className="text-[18px] ">totalPrice:</p>
              <p className="font-bold">${allPriceShop} </p>
            </div>
            <div className="text-center bg-bgMain py-1 rounded-lg shadow-[0_0_1px_black]">CheckOut</div>
          </div>
        </Drawer>
      </ThemeProvider>
    </>
  );
}
