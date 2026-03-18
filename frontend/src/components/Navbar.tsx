import { Link } from "react-router-dom";

const navItemClass =
  "relative group text-sm tracking-wide text-gray-400 hover:text-white transition";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      
      <div className="flex justify-between items-center px-8 py-4 max-w-5xl mx-auto">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <h1 className="text-lg font-semibold tracking-tight text-white">
            Intelligent AI Stack
          </h1>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-8">

          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={navItemClass}
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/articles"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={navItemClass}
          >
            Articles
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={navItemClass}
          >
            AI in SaaS
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={navItemClass}
          >
            AI Systems
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={navItemClass}
          >
            Case Studies
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          <Link
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={navItemClass}
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;