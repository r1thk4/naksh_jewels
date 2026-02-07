import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1 className="heading-main">Trendy Jewellery - </h1>
        <h2 className="heading-sub">your personal designing</h2>

        <p>
          Each piece is a unique expression of understated luxury,
          crafted with precision and elegance.
        </p>

        <Link to="/products">
          <button className="primary-btn">Explore Collection</button>
        </Link>
      </div>

      <div className="landing-image"></div>
    </div>
  );
};

export default Landing;
