export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>BE THE FIRST TO KNOW</h4>
          <input placeholder="Enter your e-mail..." />
        </div>

        <div>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettämuse.com</p>
          <p className="currency">Currency : USD</p>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <p>Instagram · Linkedin</p>
        </div>
      </div>

      <p className="copy">© 2023 mettä muse</p>
    </footer>
  );
}
