import Article1 from "@/pages/articles/Article1";
import Article2 from "@/pages/articles/Article2";
import Article3 from "@/pages/articles/Article3";
import type { Article } from "@/types/article";
 

export const staticArticles: Article[] = [


  {
    id: "ai-saas-evolution",
    title: "The Next Evolution of SaaS",
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
  { id: "limitations", label: "Limitations" },
  { id: "next-steps", label: "Newsletter" },
  { id: "final-thought", label: "Final Thought" },

],
aiContext: `
Software-as-a-Service fundamentally changed how organizations adopt and use software...

AI introduces an intelligence layer...

Key capabilities include:
- automated analysis
- predictive insights
- workflow automation

AI shifts SaaS from systems of record to systems of insight.
`,
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
  { id: "shift-in-interaction", label: "From Navigation to Intent" },
  { id: "what-copilots-do", label: "What Is an AI Copilot?" },
  { id: "architecture", label: "Architecture" },
  { id: "the-copilot-loop", label: "The Copilot Loop" },
  { id: "why-it-matters", label: "Why Copilots Matter" },
  { id: "real-world-applications", label: "Applications" },
  { id: "building-your-own-copilot", label: "Building a Copilot" },
  { id: "limitations", label: "Limitations" },
  { id: "future", label: "Where This Is Heading" }

],


aiContext: `
AI copilots act as an orchestration layer on top of SaaS systems.

They:
- interpret intent
- retrieve relevant data (RAG)
- reason using models
- execute workflows

Architecture:
Interface → Reasoning → Context → Action

Copilot loop:
Intent → Understand → Retrieve → Reason → Act → Respond

Key idea:
Copilots reduce the gap between intent and execution.
`
  },


  {
  id: "ai-system-architecture",
  title: "From Prompt to Production",
  description: "Understanding the real architecture behind AI systems.",
  component: Article3,
  category: "AI Systems",
  featured: true,
  date: "March 2026",
  readTime: "6 min read",
  toc: [
    { id: "intro", label: "Introduction" },
    { id: "misconception", label: "Misconception" },
    { id: "ai-stack", label: "AI Stack" },
    { id: "layers", label: "System Layers" },
    { id: "flow", label: "System Flow" },
    { id: "example", label: "Example" },
    { id: "mistakes", label: "Mistakes" },
    { id: "future", label: "Future" },
    { id: "final-thought", label: "Final Thought" },
  ],
  aiContext: `
AI systems are not just prompts.

They consist of multiple layers:
- interface
- backend
- orchestration
- context (RAG)
- model
- memory
- data

The value lies in how these layers work together.
`,
}


];




