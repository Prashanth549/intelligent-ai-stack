import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { staticArticles } from "@/data/articles"; // ✅ your existing file

function Articles() {
  const [apiArticles, setApiArticles] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/articles")
      .then((res) => res.json())
      .then((data) => setApiArticles(data));
  }, []);

  useEffect(() => {
    document.title = "All Articles | Intelligent AI Stack";
  }, []);

  // 🔥 MERGE BOTH
  const mergedArticles = [...staticArticles, ...apiArticles];

  // 🔥 REMOVE DUPLICATES (important)
  const uniqueArticles = mergedArticles.filter(
    (article, index, self) =>
      index === self.findIndex((a) => a.id === article.id)
  );

  // 🔥 SORT
  const sortedArticles = uniqueArticles.sort(
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