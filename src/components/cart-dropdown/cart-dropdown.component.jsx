import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { cartDropdownContext } from "../../contexts/cart-dropdown.context";

const CartDropdown = () => {
  const { cartItems } = useContext(cartDropdownContext);
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={() => navigate("/checkout")}>Check out</Button>
    </div>
  );
};

export default CartDropdown;
