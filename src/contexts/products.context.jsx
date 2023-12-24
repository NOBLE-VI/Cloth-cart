import { createContext, useEffect, useState } from "react";
import PRODUCTS from "../shop data/shop-data.json";

export const productsContext = createContext({
  PRODUCTS: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};
