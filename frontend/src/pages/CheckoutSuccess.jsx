import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ padding: "3rem", textAlign: "center" }}>
      <h1>Order Placed Successfully</h1>
      <p>Thank you for shopping with Naksh.</p>
      <p>You will be redirected to the home page shortly.</p>
    </div>
  );
};

export default CheckoutSuccess;
