import { createContext } from "react";
import all_product from "../Components/Assets/all_product.js";

export const ShopContext = createContext(null); //creating the context

const ShopContextProvider = (props) => {
  // here henceforth we are creating the provider component
  const contextValue = { all_product};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
