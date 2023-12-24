import { createContext, useState } from "react";

export const cartDropdownContext = createContext({
  products: [],
  isCartDropdownOpen: null,
  setIsCartDropdownOpen: () => null,
});

export const CartDropdownProvider = ({ children }) => {
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const value = { isCartDropdownOpen, setIsCartDropdownOpen };

  return (
    <cartDropdownContext.Provider value={value}>
      {children}
    </cartDropdownContext.Provider>
  );
};
