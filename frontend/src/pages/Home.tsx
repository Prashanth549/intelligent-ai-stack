import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";
import { articles } from "../data/articles";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";


function Home() {


   // Sort articles by date (latest first)
  {/* const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  ); */}
 

 

  // Get featured article
  const featuredArticle = articles.find((a) => a.featured);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "AI in SaaS", "AI Systems", "Data & Analytics"];

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

{/* Category UI */}
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
                  : articles.filter(a => a.category === cat).length}
              )
              </button>
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

      <Footer />

    </div>
    
  );
}

export default Home;