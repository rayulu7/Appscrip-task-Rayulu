import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <main className="container">
        <section className="hero">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </section>

        <section className="plp">
          <Filters />
          <ProductGrid />
        </section>
      </main>

      <Footer />
    </>
  );
}
