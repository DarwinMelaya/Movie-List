import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-brand">
        <Link to="/">
          Movie<span style={{ color: "#e50914" }}>Flix</span>
        </Link>
      </div>
      <div className="navbar-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className={`nav-link ${
            location.pathname === "/favorites" ? "active" : ""
          }`}
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
