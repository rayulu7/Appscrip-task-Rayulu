export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <button className="heart">♡</button>

      <h3>{product.title.toUpperCase()}</h3>
      <p className="price">
        Sign in or Create an account to see pricing
      </p>
    </div>
  );
}
