import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import TableOfContents from "../components/article/TableOfContents";
import AIChat from "../components/AIChat";
import { componentMap } from "@/data/componentMap";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleText from "@/components/article/ArticleText";
import ArticleList from "@/components/article/ArticleList";
import { staticArticles } from "@/data/articles";
import { motion } from "framer-motion";

function ArticleDetail() {
  const { id } = useParams();

  const [apiArticles, setApiArticles] = useState<any[]>([]);
  const [jsonContent, setJsonContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 🔥 Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // 🔥 Fetch API articles
useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/articles`)
    .then((res) => res.json())
    .then((data) => {
      setApiArticles(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching articles:", err);
      setLoading(false);
    });
}, []);

  // 🔥 Merge articles
  const articles = [...staticArticles, ...apiArticles];

  // 🔥 Find article
  const article = articles.find((a) => a.id === id);

  // 🔥 Custom component mapping
  const CustomComponent = componentMap[article?.id];

  // 🔥 Fetch JSON content
  useEffect(() => {
    if (!article) return;

    if (article.file) {
      fetch(`/content/${article.file}`)
        .then((res) => res.json())
        .then((data) => setJsonContent(data))
        .catch(() => setJsonContent(null));
    }

    document.title = `${article.title} | Intelligent AI Stack`;

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", article.description);
    }
  }, [article]);

  // 🔥 Loading
  if (loading) {
    return <div className="text-white p-10">Loading...</div>;
  }

  if (!article) {
    return <div className="text-white p-10">Article not found</div>;
  }

  // 🔥 Related articles
  const relatedArticles = articles
    .filter(
      (a) =>
        a.id !== article.id &&
        a.category === article.category
    )
    .slice(0, 2);

  const fallbackArticles =
    relatedArticles.length === 0
      ? articles.filter((a) => a.id !== article.id).slice(0, 2)
      : relatedArticles;

  return (
    <motion.div
      initial={{ opacity: 0.98 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.98 }}
      transition={{ duration: 0.12 }}
      className="bg-black text-white min-h-screen bg-gradient-to-b from-black to-gray-950 flex flex-col"
    >
      <Navbar />

      {/* MAIN */}
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* TOC */}
          {article.toc && (
            <TableOfContents sections={article.toc} />
          )}

          {/* CONTENT COLUMN */}
          <div className="flex-1">

            {/* ARTICLE */}
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

              {/* CONTENT */}
              {CustomComponent ? (
                <CustomComponent />
              ) : jsonContent ? (
                <>
                
                  {jsonContent.sections?.map((section: any, index: number) => (
                    <div key={index} className="mb-10">

                      <ArticleSection title={section.title} />

                      {section.content?.map((text: string, i: number) => (
                        <ArticleText key={i}>{text}</ArticleText>
                      ))}

                      {section.list && (
                        <ArticleList items={section.list} />
                      )}

                    </div>
                  ))}
                </>
              ) : (
                <p className="text-gray-500">Loading content...</p>
              )}

            </div>

            {/* 🔥 AI CHAT (NOW BELOW ARTICLE) */}
            <div className="max-w-3xl mx-auto mt-6">
              <AIChat
                context={
                  article?.aiContext ||
                  jsonContent?.sections
                    ?.map((s: any) => s.content?.join(" "))
                    .join(" ") ||
                  ""
                }
              />
            </div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-900 my-6"></div>

      {/* RELATED */}
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
    </motion.div>
  );
}

export default ArticleDetail;