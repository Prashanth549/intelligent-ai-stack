import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";
import { articles } from "../data/articles";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {

  // Sort articles by date (latest first)
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get featured article
  const featuredArticle = articles.find((a) => a.featured);

  return (
    <div className="bg-black text-white min-h-screen bg-gradient-to-b from-black to-gray-950 flex flex-col">

      <Navbar />

      <Helmet>
      <title>Intelligent AI Stack | AI in SaaS, Data & Systems</title>
      <meta
        name="description"
        content="Exploring how AI is applied across SaaS platforms, data systems, and real-world applications."
        />
      </Helmet>

      {/* Main Content */}
      <div className="flex-grow pt-20">

        {/* Hero */}
        <Hero />

        {/* Featured Article */}
        {featuredArticle && (
         <section className="max-w-5xl mx-auto px-6 mb-16">

        <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
          Featured
        </p>

        <Link to={`/article/${featuredArticle.id}`} className="block group">

          <div className="border border-gray-800 p-8 rounded-2xl transition duration-300 hover:border-gray-500 hover:bg-gray-900/40">

            <h2 className="text-2xl font-semibold mb-3 group-hover:text-white">
              {featuredArticle.title}
            </h2>

            <p className="text-gray-400">
              {featuredArticle.description}
            </p>

          </div>

        </Link>

      </section>
        )}

        {/* Latest Articles */}
        <section className="max-w-5xl mx-auto px-6 pb-24">

          <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
            Latest Articles
          </p>

          <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
            {sortedArticles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                description={article.description}
              />
            ))}
          </div>

        </section>

      </div>

      <Footer />

    </div>
  );
}

export default Home;