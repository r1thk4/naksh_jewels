import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>
          Trendy Jewellery<br />
          Your Personal Designing
        </h1>

        <p>
          Each piece is a unique expression of understated luxury,
          crafted with precision and elegance.
        </p>

        <Link to="/products">
          <button className="primary-btn">Explore Collection</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
