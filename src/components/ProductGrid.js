import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(r => r.json())
      .then(setProducts);
  }, []);

  return (
    <section>
      <div className="topbar">
        <div className="left">
          <strong>{products.length} ITEMS</strong>
          <button className="hide">HIDE FILTER</button>
        </div>

        <div className="sort">
          <button onClick={() => setOpen(!open)}>RECOMMENDED ⌄</button>
          {open && (
            <ul className="dropdown">
              <li>✓ Recommended</li>
              <li>Newest first</li>
              <li>Popular</li>
              <li>Price : High to Low</li>
              <li>Price : Low to High</li>
            </ul>
          )}
        </div>
      </div>

      <div className="grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
