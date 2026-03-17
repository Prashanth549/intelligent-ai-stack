import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Newsletter() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-950">

      <Navbar />

      <div className="flex-grow pt-20">

        <div className="max-w-3xl mx-auto px-6 py-16 text-center">

          <h1 className="text-4xl font-bold mb-6">
            The AI SaaS Playbook
          </h1>

          <p className="text-gray-400 mb-8 leading-relaxed">
            A newsletter exploring how artificial intelligence is transforming SaaS products, 
            business systems, and real-world applications.
          </p>

          {/* CTA Box */}
          <div className="border border-gray-800 rounded-2xl p-8">

            <p className="text-gray-300 mb-6">
              Get new issues directly in your inbox.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white mb-4 focus:outline-none"
            />

            <button className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              Subscribe
            </button>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Newsletter;