import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      <div className="cart-list">
        {cartItems.map((item) => (
        <div key={item.id} className="cart-row">
        <img
          src={item.image}
          alt={item.name}
          className="cart-image"
        />

        <div className="cart-info">
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
        </div>

        <div className="cart-qty">
          <button
            onClick={() =>
              updateQuantity(item.id, item.quantity - 1)
            }
            disabled={item.quantity === 1}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              updateQuantity(item.id, item.quantity + 1)
            }
          >
            +
          </button>
        </div>

        <div className="cart-subtotal">
          ₹{item.price * item.quantity}
        </div>

        <button
          className="cart-remove"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>

        ))}
      </div>

      <div className="cart-checkout">
        <button className="checkout-btn">
          Checkout · ₹{total}
        </button>
      </div>
    </div>
  );
};

export default Cart;
