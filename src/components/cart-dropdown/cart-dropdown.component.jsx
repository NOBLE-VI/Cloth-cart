import { useContext } from "react";
import { useNavigate } from "react-router-dom";


import Button, { BUTTON_TYPE_CLASS } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { cartDropdownContext } from "../../contexts/cart-dropdown.context";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(cartDropdownContext);
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Cart is Empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <Button
        buttonType={BUTTON_TYPE_CLASS.base}
        onClick={() => navigate("/checkout")}
      >
        Check out
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
