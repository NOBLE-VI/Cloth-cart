import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // if productToAdd already exist then increment the quantity of that product
  const itemThatExist = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  // return new array with increased quantity if item already exist
  if (itemThatExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return the array if item does not exist
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const cartDropdownContext = createContext({
  cartItems: [],
  isCartDropdownOpen: false,
  setIsCartDropdownOpen: () => {},
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartDropdownProvider = ({ children }) => {
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const totalCartItems = cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    );
    setCartCount(totalCartItems);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartDropdownOpen,
    setIsCartDropdownOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  return (
    <cartDropdownContext.Provider value={value}>
      {children}
    </cartDropdownContext.Provider>
  );
};
