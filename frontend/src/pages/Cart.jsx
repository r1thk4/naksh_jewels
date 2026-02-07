import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="products-page">
      <h2>Cart</h2>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>

          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              updateQuantity(item.id, Number(e.target.value))
            }
          />

          <button
            className="primary-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
