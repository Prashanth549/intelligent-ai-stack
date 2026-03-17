import { Link } from "react-router-dom";


function Navbar() {
  return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="flex justify-between items-center px-8 py-4 max-w-5xl mx-auto">

      <h1 className="text-lg font-semibold tracking-tight">Intelligent AI Stack</h1>
      <div className="space-x-6 text-gray-400">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <a href="#">AI in SaaS</a>
        <a href="#">AI Systems</a>
        <a href="#">Case Studies</a>
        <a href="#">Newsletter</a>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;