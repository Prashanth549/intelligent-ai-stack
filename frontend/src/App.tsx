import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import About from "./pages/About";
import GenerateArticle from "./pages/GenerateArticle";
import ScrollToTop from "@/components/ScrollToTop";
import ProtectedRoute from "@/routes/ProtectedRoute";
import AdminLogin from "./pages/AdminLogin";

function App() {
  const location = useLocation(); // 🔥 CRITICAL

  return (
    <>
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
          path="/admin/generate-8392"
          element={
            <ProtectedRoute>
              <GenerateArticle />
            </ProtectedRoute>
          }
        />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;