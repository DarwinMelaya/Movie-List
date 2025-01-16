import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/Navbar.css";

const Navbar = ({ showNavLinks = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-brand">
        <Link to="/home">
          Mobi<span style={{ color: "#e50914" }}>Flix</span>
        </Link>
      </div>
      {showNavLinks && (
        <>
          <button className="burger-menu" onClick={toggleMenu}>
            <span className={`burger-bar ${isMenuOpen ? "open" : ""}`}></span>
          </button>
          <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
            <Link
              to="/home"
              className={`nav-link ${
                location.pathname === "/home" ? "active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/favorites"
              className={`nav-link ${
                location.pathname === "/favorites" ? "active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Favorites
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
