import { useContext } from "react";
import {
  ProductCartContainer,
  Image,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";
import Button, { BUTTON_TYPE_CLASS } from "../button/button.component";
import { cartDropdownContext } from "../../contexts/cart-dropdown.context";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(cartDropdownContext);
  const { name, id, price, imageUrl } = product;

  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <ProductCartContainer>
      <img src={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASS.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
