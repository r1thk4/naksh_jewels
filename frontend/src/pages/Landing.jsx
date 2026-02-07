import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1 className="heading-main">Jewellery Designed to Be Remembered</h1>
        <h2 className="heading-sub">A curated collection where form, detail, and craftsmanship come together.</h2>

        <Link to="/products">
          <button className="primary-btn">Explore Collection</button>
        </Link>
      </div>

      <div className="landing-image"></div>
    </div>
  );
};

export default Landing;
