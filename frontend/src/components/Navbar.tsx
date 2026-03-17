function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
      <h1 className="text-lg font-semibold">Intelligent AI Stack</h1>
      <div className="space-x-6 text-gray-400">
        <a href="#">AI in SaaS</a>
        <a href="#">AI Systems</a>
        <a href="#">Case Studies</a>
        <a href="#">Newsletter</a>
      </div>
    </nav>
  );
}

export default Navbar;