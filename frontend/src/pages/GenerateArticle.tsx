import { useState } from "react";

function GenerateArticle() {
  const [topic, setTopic] = useState("");
  const [article, setArticle] = useState("");
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    if (!topic.trim()) return;

    setLoading(true);
    setArticle("");
    setFileName("");
    setCopied(false);

    try {
      const res = await fetch("http://127.0.0.1:8000/generate-article", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_ADMIN_API_KEY,
        },
        body: JSON.stringify({ topic }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate article");
      }

      const data = await res.json();

      setArticle(data.article);
      setFileName(data.file);

    } catch (err) {
      setArticle("❌ Failed to generate article. Check API key or server.");
    }

      setLoading(false);
    };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(article);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">
          AI Article Generator
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter topic (e.g. AI Copilots in SaaS)"
            className="flex-1 p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
          />

          <button
            onClick={generate}
            disabled={!topic.trim() || loading}
            className={`px-4 py-2 rounded-lg transition ${
              !topic.trim() || loading
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>

        {/* Saved File Info */}
        {fileName && (
          <div className="mb-4 text-sm text-gray-400">
            ✅ Saved as:{" "}
            <span className="text-white">{fileName}</span>
          </div>
        )}

        {/* Output */}
        {article && (
          <div className="mt-6">

            {/* Actions */}
            <div className="flex justify-between items-center mb-3">
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                Generated Article
              </p>

              <button
                onClick={copyToClipboard}
                className="text-xs text-gray-400 hover:text-white transition"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Article Box */}
            <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl whitespace-pre-wrap leading-relaxed text-gray-300">
              {article}
            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default GenerateArticle;