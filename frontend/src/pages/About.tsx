import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-950">

      <Navbar />

      <div className="flex-grow pt-20">

        <div className="max-w-3xl mx-auto px-6 py-16">

          <h1 className="text-4xl font-bold mb-8">
            About
          </h1>

          <p className="text-gray-400 leading-relaxed mb-6">
            Intelligent AI Stack is a platform focused on understanding how artificial intelligence is being integrated into modern SaaS products and business systems.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            The goal is to explore how software is evolving from systems that store data to systems that assist in decision-making.
          </p>

          <p className="text-gray-400 leading-relaxed">
            This space is used to document insights, break down concepts, and analyze real-world applications of AI in software.
          </p>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default About;