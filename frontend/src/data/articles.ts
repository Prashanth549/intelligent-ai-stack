import Article1 from "@/pages/articles/Article1";
import Article2 from "@/pages/articles/Article2";
import type { Article } from "@/types/article";

export const articles: Article[] = [
  {
    id: "ai-saas-evolution",
    title: "The Next Evolution of SaaS: Intelligence Built Into Software",
    description: "How AI is beginning to reshape SaaS platforms.",
    component: Article1, // ✅ custom
    category: "AI in SaaS",
    featured: true,
    date: "March 2026",
    readTime: "5 min read",
    toc: [
  { id: "intro", label: "Introduction" },
  { id: "systems-of-record", label: "Systems of Record" },
  { id: "intelligence-layer", label: "Intelligence Layer" },
  { id: "capabilities", label: "Capabilities" },
  { id: "why-saas", label: "Why SaaS + AI" },
  { id: "product-design", label: "Product Design" },
  { id: "business-impact", label: "Business Impact" },
  { id: "final-thought", label: "Final Thought" },
],
  },
  {
    id: "ai-copilots",
    title: "AI Copilots in SaaS",
    description: "How AI assistants are changing software interfaces.",
    component: Article2, // 🔥 switch from markdown → React
    category: "AI Systems",
    featured: false,
    date: "March 2026",
    readTime: "5 min read",
    toc: [
  { id: "intro", label: "Introduction" },
  { id: "shift-in-interaction", label: "Shift in Interaction" },
  { id: "what-copilots-do", label: "What Copilots Do" },
  { id: "why-it-matters", label: "Why It Matters" },
  { id: "limitations", label: "Limitations" },
  { id: "future", label: "Where This Is Heading" },
  { id: "final-thought", label: "Final Thought" },
],
  },
];