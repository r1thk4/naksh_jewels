import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button className="primary-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
