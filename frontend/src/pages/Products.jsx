import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(console.error);
  }, []);

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="products-page">
      <h2>Our Collection</h2>

      {Object.keys(groupedProducts).map((category) => (
        <div key={category} className="category-section">
          <h3>{category}</h3>

          <div className="product-grid">
            {groupedProducts[category].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
