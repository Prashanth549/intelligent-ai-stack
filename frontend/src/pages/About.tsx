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
            Intelligent AI Stack is a platform focused on understanding how artificial intelligence is being applied across software systems, data platforms, and real-world business operations.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            The goal is to explore how software is evolving from systems that store data to systems that assist in analysis, decision-making, and execution.
          </p>

          <p className="text-gray-400 leading-relaxed">
            This includes areas such as SaaS platforms, data systems, and operational workflows, where AI is becoming a core layer of functionality.
          </p>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default About;