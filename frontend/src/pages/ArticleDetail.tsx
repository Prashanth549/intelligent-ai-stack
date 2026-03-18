import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { articles } from "../data/articles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";

function ArticleDetail() {
  const { id } = useParams();
  const [content, setContent] = useState("");

  const article = articles.find((a) => a.id === id);

  // ✅ Safe related articles logic (category-based + fallback)
  const relatedArticles = article
    ? articles
        .filter(
          (a) =>
            a.id !== article.id &&
            a.category === article.category
        )
        .slice(0, 2)
    : [];

  const fallbackArticles =
    article && relatedArticles.length === 0
      ? articles.filter((a) => a.id !== article.id).slice(0, 2)
      : relatedArticles;

  useEffect(() => {
    if (article) {
      fetch(`/content/${article.file}`)
        .then((res) => res.text())
        .then((text) => setContent(text));

      document.title = `${article.title} | Intelligent AI Stack`;

      // Optional: update meta description
      const meta = document.querySelector("meta[name='description']");
      if (meta) {
        meta.setAttribute("content", article.description);
      }

       
    }
  }, [article]);

  if (!article) {
    return <div className="text-white p-10">Article not found</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen bg-gradient-to-b from-black to-gray-950 flex flex-col">

      <Navbar />

      {/* Content */}
      <div className="flex-grow pt-20">

        <div className="max-w-3xl mx-auto px-6 py-10">

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            {article.title}
          </h1>

          {/* Metadata */}
          <div className="text-sm text-gray-500 mb-8 flex items-center gap-4 flex-wrap">
            <span>{article.date}</span>
            <span className="text-gray-600">•</span>
            <span>{article.readTime}</span>
            <span className="text-gray-600">•</span>
            <span className="uppercase tracking-wide">{article.category}</span>
          </div>

          {/* Article Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>

        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-900 my-16"></div>

      {/* Related Articles */}
      <div className="max-w-5xl mx-auto px-6 pb-24">

        {fallbackArticles.length > 0 && (
          <>
            <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest">
              Related Articles
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {fallbackArticles.map((item) => (
                <ArticleCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  date={item.date}
                  readTime={item.readTime}
                />
              ))}
            </div>
          </>
        )}

      </div>

      <Footer />

    </div>
  );
}

export default ArticleDetail;