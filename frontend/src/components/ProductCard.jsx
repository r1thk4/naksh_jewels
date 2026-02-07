import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div
        style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-soft)",
            padding: "1rem",
            borderRadius: "6px",
            textAlign: "center"
        }}
    >
      <img src={product.image} alt={product.name} width="150" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
