import { Link } from "react-router-dom";
import { useState } from "react";

const navItemClass =
  "relative group text-sm tracking-wide text-gray-400 hover:text-white transition";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false); // close menu on click
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">

        {/* Logo */}
        <Link to="/" onClick={handleNavClick}>
          <h1 className="text-lg font-semibold tracking-tight text-white">
            Intelligent AI Stack
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" onClick={handleNavClick} className={navItemClass}>Home</Link>
          <Link to="/articles" onClick={handleNavClick} className={navItemClass}>Articles</Link>
          <a href="#" className={navItemClass}>AI in SaaS</a>
          <a href="#" className={navItemClass}>AI Systems</a>
          <a href="#" className={navItemClass}>Case Studies</a>
          <Link to="/about" onClick={handleNavClick} className={navItemClass}>About</Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4">
          <Link to="/" onClick={handleNavClick} className="block text-gray-300 hover:text-white">Home</Link>
          <Link to="/articles" onClick={handleNavClick} className="block text-gray-300 hover:text-white">Articles</Link>
          <a href="#" className="block text-gray-300 hover:text-white">AI in SaaS</a>
          <a href="#" className="block text-gray-300 hover:text-white">AI Systems</a>
          <a href="#" className="block text-gray-300 hover:text-white">Case Studies</a>
          <Link to="/about" onClick={handleNavClick} className="block text-gray-300 hover:text-white">About</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;