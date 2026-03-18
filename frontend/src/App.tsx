import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <> <ScrollToTop /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route
      path="/article/:id"
      element={<ArticleDetail key={window.location.pathname} />}
    />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
    
  );
}

export default App;