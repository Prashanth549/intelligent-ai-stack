import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { staticArticles } from "@/data/articles";

function Home() {
  const [apiArticles, setApiArticles] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 🔥 Fetch AI articles
  useEffect(() => {
    fetch("http://127.0.0.1:8000/articles")
      .then((res) => res.json())
      .then((data) => setApiArticles(data));
  }, []);

  // 🔥 SEO
  useEffect(() => {
    document.title =
      "Intelligent AI Stack – AI Systems, SaaS & Real-World Applications";
  }, []);

  // 🔥 Merge static + API
  const allArticles = [...staticArticles, ...apiArticles];

  // 🔥 Remove duplicates
  const articles = allArticles.filter(
    (article, index, self) =>
      index === self.findIndex((a) => a.id === article.id)
  );

  // 🔥 Featured article
  const featuredArticle = articles.find((a) => a.featured);

  // 🔥 Categories
  const categories = ["All", "AI in SaaS", "AI Systems", "Data & Analytics"];

  // 🔥 Filtered articles
  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="bg-black text-white min-h-screen bg-gradient-to-b from-black to-gray-950 flex flex-col">

      <Navbar />

      {/* Main Content */}
      <div className="flex-grow pt-20">

        {/* Hero */}
        <Hero />

        {/* Featured Article */}
        {featuredArticle && (
          <section className="max-w-5xl mx-auto px-6 mb-20">

            <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest">
              Featured
            </p>

            <Link to={`/article/${featuredArticle.id}`}>
              <div className="border border-gray-800 p-10 rounded-2xl hover:border-gray-600 transition duration-300 bg-gradient-to-b from-gray-900/40 to-black cursor-pointer">

                <h2 className="text-3xl font-semibold mb-4 leading-snug">
                  {featuredArticle.title}
                </h2>

                <p className="text-gray-400 mb-6 max-w-2xl">
                  {featuredArticle.description}
                </p>

                <span className="text-sm text-white border-b border-gray-600 hover:border-white transition">
                  Read Article →
                </span>

              </div>
            </Link>

          </section>
        )}

        {/* Categories */}
        <section className="max-w-5xl mx-auto px-6 mb-16">

          <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest">
            Categories
          </p>

          <div className="flex flex-wrap gap-3">

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-sm rounded-full border transition
                  ${
                    selectedCategory === cat
                      ? "border-white text-white"
                      : "border-gray-800 text-gray-400 hover:border-gray-500"
                  }`}
              >
                {cat} (
                {cat === "All"
                  ? articles.length
                  : articles.filter((a) => a.category === cat).length}
                )
              </button>
            ))}

          </div>

        </section>
        
        {/* Topics */}
        <section className="max-w-5xl mx-auto px-6 mb-16">

        <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest">
          Topics
        </p>

        <div className="flex flex-wrap gap-3">

          {[
            "AI Copilots",
            "RAG Systems",
            "AI in Sales",
            "AI in Support",
            "Workflow Automation",
            "AI Architecture"
          ].map((topic) => (
            <span
              key={topic}
              className="px-4 py-2 text-sm border border-gray-800 rounded-full text-gray-400"
            >
              {topic}
            </span>
          ))}

        </div>

      </section>

        {/* Latest Articles */}
        <section className="max-w-5xl mx-auto px-6 pb-28">

          <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest">
            Latest Articles
          </p>

          <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                description={article.description}
                category={article.category}
                date={article.date}
                readTime={article.readTime}
              />
            ))}
          </div>

        </section>

      </div>

      <section className="max-w-5xl mx-auto px-6 pb-20 text-center">

        <h3 className="text-2xl font-semibold mb-4">
          Explore the Future of Software
        </h3>

        <p className="text-gray-400 mb-6">
          Dive deeper into how AI is shaping modern SaaS systems and real-world applications.
        </p>

        <a
          href="/articles"
          className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
        >
          View All Articles
        </a>

      </section>

      <Footer />

    </div>
  );
}

export default Home;