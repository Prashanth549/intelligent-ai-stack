import { Link } from "react-router-dom";


function Navbar() {
  return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="flex justify-between items-center px-8 py-4 max-w-5xl mx-auto">

       <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      > 
      <h1 className="text-lg font-semibold tracking-tight">Intelligent AI Stack</h1>
      </Link>
      <div className="space-x-6 text-gray-400">
       <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Home
      </Link>
        <Link to="/articles" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >Articles</Link>
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >AI in SaaS</a>
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >AI Systems</a>
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >Case Studies</a>
        <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >About</Link>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;