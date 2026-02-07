import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const { cartItems, addToCart } = useCart();

  const isInCart = cartItems.some(
    (item) => item.id === product.id
  );

  return (
    <div className="editorial-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="editorial-info">
        <h4>{product.name}</h4>
        <p>₹{product.price}</p>

        {isInCart ? (
          <Link to="/cart">
            <button className="primary-btn">
              View Cart
            </button>
          </Link>
        ) : (
          <button
            className="primary-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
