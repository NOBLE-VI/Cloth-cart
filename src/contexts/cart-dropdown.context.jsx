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

  const decrementCartItem = (cartItems, productToDecrement) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === productToDecrement.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

    // Filter out items with quantity less than 1
    const filteredCartItems = updatedCartItems.filter(
      (item) => item.quantity >= 1
    );

    return filteredCartItems;
  };

  const removeCartItem = (cartItems, productToRemove) => {
    const itemsIndex = cartItems.findIndex(
      (item) => item.id === productToRemove.id
    );
    return cartItems.toSpliced(itemsIndex, 1);
  };

  export const cartDropdownContext = createContext({
    cartItems: [],
    isCartDropdownOpen: false,
    setIsCartDropdownOpen: () => {},
    addItemToCart: () => {},
    cartCount: 0,
    totalCartAmount: 0,
    decreaseCartItemCount: () => {},
    removeFromCart: () => {},
  });

  export const CartDropdownProvider = ({ children }) => {
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
    const [cartItems, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalCartAmount, setTotalCartAmount] = useState(0);

    useEffect(() => {
      const totalCartItems = cartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0
      );
      const totalAmount = cartItems.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0
      );
      setTotalCartAmount(totalAmount);
      setCartCount(totalCartItems);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
      setCartItem(addCartItem(cartItems, productToAdd));
    };

    const decreaseCartItemCount = (productToDecrease) => {
      setCartItem(decrementCartItem(cartItems, productToDecrease));
    };

    const removeFromCart = (productToRemove) => {
      setCartItem(removeCartItem(cartItems, productToRemove));
      // removeCartItem(cartItems, productToRemove);
    };

    const value = {
      isCartDropdownOpen,
      setIsCartDropdownOpen,
      addItemToCart,
      cartItems,
      cartCount,
      totalCartAmount,
      decreaseCartItemCount,
      removeFromCart,
    };

    return (
      <cartDropdownContext.Provider value={value}>
        {children}
      </cartDropdownContext.Provider>
    );
  };
