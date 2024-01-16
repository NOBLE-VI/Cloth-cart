import { useContext } from "react";
import {
  CartIconContainer,
  ShoppingIconSvg,
  ItemCount,
} from "./cart-icon.styles.jsx";

import { cartDropdownContext } from "../../contexts/cart-dropdown.context";

const CartIcon = () => {
  const { cartCount, isCartDropdownOpen, setIsCartDropdownOpen } =
    useContext(cartDropdownContext);

  const toggleCartDropdown = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
  };

  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingIconSvg />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
