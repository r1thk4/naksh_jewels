import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const { addToCart } = useCart();

  return (
    <div className="editorial-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="editorial-info">
        <h4>{product.name}</h4>
        <p>₹{product.price}</p>
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
