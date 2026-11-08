import "./Navbar.css";

function Navbar() {
  return <header className="site-header">
    <nav className="navbar" aria-label="Main navigation">
      <a href="#hero" className="brand" aria-label="Iris Contado home"><span className="brand-mark">IC</span></a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a className="nav-contact" href="#contact">Contact <span aria-hidden="true">↗</span></a></li>
      </ul>
    </nav>
  </header>;
}
export default Navbar;
