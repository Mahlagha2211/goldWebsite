import { useEffect } from "react";
import { createContext, useReducer, useState } from "react";

const MenuContext = createContext();
const cartAbility = (state, { type, payload }) => {
  switch (type) {
    case "add":
      const newItem = {
        id: payload.id,
        image: payload.image,
        name: payload.name,
        count: 1,
        totalPrice: 15.99,
      };
      return [...state, newItem];
    case "increment":
      return state.map((item) =>
        item.id == payload.id
          ? {
              ...item,
              count: item.count + 1,
              totalPrice: Number((item.totalPrice + 15.99).toFixed(2)),
            }
          : item
      );
    case "decrease":
      return state.map((item) =>
        item.id == payload.id
          ? item.count > 1
            ? {
                ...item,
                count: item.count - 1,
                totalPrice: Number((item.totalPrice - 15.99).toFixed(2)),
              }
            : item
          : item
      );
    case "delete":
      return state.filter((item) => item.id != payload.id);
  }
};
export function ContextMenu({ children }) {
  const [cartShop, dispatch] = useReducer(cartAbility, []);
  const [allPriceShop, setAllPriceShop] = useState();
  useEffect(() => {
    let money = 0;
    cartShop.map((item) => (money += Number(item.totalPrice)));
  
    setAllPriceShop(money.toFixed(2));
  }, [cartShop]);

  return (
    <MenuContext.Provider value={{ cartShop, dispatch, allPriceShop }}>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuContext;
