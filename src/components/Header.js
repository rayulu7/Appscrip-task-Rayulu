export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">LOGO</div>

        <nav className="nav">
          <a>SHOP</a>
          <a>SKILLS</a>
          <a>STORIES</a>
          <a>ABOUT</a>
          <a>CONTACT US</a>
        </nav>

        <div className="header-icons">
          <span>🔍</span>
          <span>♡</span>
          <span>🛒</span>
          <span>👤</span>
          <span className="lang">ENG ⌄</span>
        </div>
      </div>
    </header>
  );
}
