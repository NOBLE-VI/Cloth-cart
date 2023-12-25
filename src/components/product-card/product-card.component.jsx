import { useContext } from "react";
import "./product-card.styles.scss";
import Button from "../button/button.component";
import { cartDropdownContext } from "../../contexts/cart-dropdown.context";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(cartDropdownContext);
  const { name, id, price, imageUrl } = product;

  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
