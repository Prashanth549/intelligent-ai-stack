function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Intelligent AI Stack
        </p>

        {/* Center */}
        <p className="text-gray-600 text-sm">
          AI + SaaS + Real World Applications
        </p>



      </div>
    </footer>
  );
}

export default Footer;