import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { articles } from "../data/articles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";



function ArticleDetail() {
  const { id } = useParams();
  const [content, setContent] = useState("");

  const article = articles.find((a) => a.id === id);

  

  useEffect(() => {
    if (article) {
      fetch(`/content/${article.file}`)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [article]);

  if (!article) {
    return <div className="text-white p-10">Article not found</div>;
  }

  return (

    <>
    
    <Helmet>
        <title>{article.title} | Intelligent AI Stack</title>
        <meta name="description" content={article.description} />
        </Helmet> 
   
    <div className="bg-black text-white min-h-screen bg-gradient-to-b from-black to-gray-950 flex flex-col">

      <Navbar />

       
      

      {/* Content */}
      <div className="flex-grow pt-20">

        <div className="max-w-3xl mx-auto px-6 py-10">

        
          <article className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>

        </div>

      </div>

      

      <Footer />

    </div>
    </>
  );
}

export default ArticleDetail;