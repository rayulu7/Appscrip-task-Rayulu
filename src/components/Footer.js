import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettä muse.</p>

          <div className="footer-input-group">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              aria-label="Email address"
              
            />
            <button type="button">SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4 className="footer-currency-title">CURRENCY</h4>
          <div className="footer-currency">
            <span>🇺🇸</span>
            <strong>USD</strong>
          </div>
          <p className="footer-currency-note">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-links">
        <div>
          <h5>mettā muse</h5>
          <a href="/">About Us</a>
          <a href="/">Stories</a>
          <a href="/">Artisans</a>
          <a href="/">Boutiques</a>
          <a href="/">Contact Us</a>
          <a href="/">EU Compliances Docs</a>
        </div>

        <div>
          <h5>QUICK LINKS</h5>
          <a href="/">Orders & Shipping</a>
          <a href="/">Join/Login as a Seller</a>
          <a href="/">Payment & Pricing</a>
          <a href="/">Return & Refunds</a>
          <a href="/">FAQs</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
        </div>

        <div>
          <h5>FOLLOW US</h5>
          <div className="footer-socials">
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>
</div>

          <h5 className="footer-accepts-title">mettā muse ACCEPTS</h5>
          <div className="footer-payments">
            <span>GPay</span>
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>ApplePay</span>
            <span>OPay</span>
          </div>
        </div>
      </div>

      <p className="footer-copy">
        Copyright © 2023 metttä muse. All rights reserved.
      </p>
    </footer>
  );
}
