import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { articles } from "../data/articles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import TableOfContents from "../components/article/TableOfContents";

function ArticleDetail() {
  const { id } = useParams();
  const [content, setContent] = useState("");

  const article = articles.find((a) => a.id === id);

  // Related articles
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
    if (!article) return;

    // Fetch markdown ONLY if no custom component
    if (!article.component && article.file) {
      fetch(`/content/${article.file}`)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }

    // Update title
    document.title = `${article.title} | Intelligent AI Stack`;

    // Update meta description
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", article.description);
    }
  }, [article]);

  if (!article) {
    return <div className="text-white p-10">Article not found</div>;
  }

  // Dynamic component rendering
  const CustomComponent = article.component;

  return (
    <div className="bg-black text-white min-h-screen bg-gradient-to-b from-black to-gray-950 flex flex-col">
      
      <Navbar />

      {/* Content + TOC Layout */}
      <div className="flex-grow pt-10">

        <div className="max-w-6xl mx-auto px-6 flex gap-12">

          {/* LEFT TOC (Dynamic) */}
          {article.toc && (
            <TableOfContents sections={article.toc} />
          )}

          {/* ARTICLE CONTENT */}
          <div className="flex-1">

            {CustomComponent ? (
              // 🔥 Custom React Article
              <CustomComponent />
            ) : (
              // 📄 Markdown fallback
              <div className="max-w-3xl mx-auto py-10">

                {/* Title */}
                <h1 className="text-4xl font-bold mb-4 leading-tight">
                  {article.title}
                </h1>

                {/* Metadata */}
                <div className="text-sm text-gray-500 mb-6 flex items-center gap-4 flex-wrap">
                  <span>{article.date}</span>
                  <span className="text-gray-600">•</span>
                  <span>{article.readTime}</span>
                  <span className="text-gray-600">•</span>
                  <span className="uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>

                {/* Markdown Content */}
                <article className="prose prose-invert prose-lg max-w-none">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </article>

              </div>
            )}

          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-900 my-6"></div>

      {/* Related Articles */}
      <div className="max-w-3xl mx-auto px-6 pb-12 mt-6">

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