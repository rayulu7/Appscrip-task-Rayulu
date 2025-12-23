import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ filters }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const filteredProducts = products.filter((product) => {
    
    if (!filters.men && !filters.women && !filters.kids) {
      return true;
    }

    if (filters.men && product.category === "men's clothing") {
      return true;
    }

    if (filters.women && product.category === "women's clothing") {
      return true;
    }

    if (filters.kids && product.category === "electronics") {
      return true;
    }

    return false;
  });

  return (
    <section>
      <div className="topbar">
        <strong>{filteredProducts.length} ITEMS</strong>
      </div>

      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
