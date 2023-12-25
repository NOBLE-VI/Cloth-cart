import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/svg/shopping-bag.svg";

import { cartDropdownContext } from "../../contexts/cart-dropdown.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { cartCount, isCartDropdownOpen, setIsCartDropdownOpen } =
    useContext(cartDropdownContext);

  const toggleCartDropdown = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
