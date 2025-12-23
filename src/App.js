import { useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [filters, setFilters] = useState({
    men: false,
    women: false,
    kids: false,
  });

  return (
    <>
      <Header />

      <main className="container">
        <section className="hero">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque.
          </p>
        </section>

        <section className="plp">
          <Filters filters={filters} setFilters={setFilters} />
          <ProductGrid filters={filters} />
        </section>
      </main>

      <Footer />
    </>
  );
}
