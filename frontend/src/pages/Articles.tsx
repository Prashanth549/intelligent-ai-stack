import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Articles() {

  // Sort by latest first
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="bg-black text-white min-h-screen bg-gradient-to-b from-black to-gray-950 flex flex-col">

      <Navbar />

      <div className="flex-grow pt-20">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-3xl font-bold mb-8">
            All Articles
          </h1>

          <p className="text-gray-400 mb-10 max-w-2xl">
          A collection of articles exploring AI across software systems, SaaS platforms, and real-world applications.
        </p>

          <div className="grid md:grid-cols-2 gap-8">
            {sortedArticles.map((article) => (
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

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Articles;