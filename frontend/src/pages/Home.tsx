import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />
      <Hero />

      {/* Featured Article */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <div className="border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-2">
            The Next Evolution of SaaS: Intelligence Built Into Software
          </h3>
          <p className="text-gray-400">
            How AI is beginning to reshape SaaS platforms.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6 pb-20">

        <ArticleCard
          title="AI Copilots in SaaS"
          description="How AI assistants are changing software interfaces."
        />

        <ArticleCard
          title="AI Data Layer"
          description="Understanding the role of data in AI-powered systems."
        />

        <ArticleCard
          title="AI in Customer Support"
          description="Automation and intelligence in support systems."
        />

        <ArticleCard
          title="AI Architecture"
          description="How modern AI systems are built inside products."
        />

      </section>

    </div>
  );
}

export default Home;