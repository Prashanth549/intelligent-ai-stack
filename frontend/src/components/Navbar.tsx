import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItemClass =
  "text-sm tracking-wide text-gray-400 hover:text-white transition";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
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

          {/* Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} />
          </button>

        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6">

          {/* Close Button */}
        <button
          className="text-gray-400 hover:text-white transition self-end"
          onClick={() => setOpen(false)}
        >
          <X size={22} />
        </button>

          {/* Links */}
          <Link to="/" onClick={handleNavClick}>Home</Link>
          <Link to="/articles" onClick={handleNavClick}>Articles</Link>
          <a href="#" onClick={() => setOpen(false)}>AI in SaaS</a>
          <a href="#" onClick={() => setOpen(false)}>AI Systems</a>
          <a href="#" onClick={() => setOpen(false)}>Case Studies</a>
          <Link to="/about" onClick={handleNavClick}>About</Link>

        </div>
      </div>
    </>
  );
}

export default Navbar;