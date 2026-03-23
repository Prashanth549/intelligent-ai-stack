import { useState,  useRef } from "react";

type Message = {
  role: "user" | "ai";
  content: string;
};

type Props = {
  context: string;
};

function AIChat({ context }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // ✅ Always scroll to bottom AFTER full response (not during typing)
  const scrollToBottom = () => {
    setTimeout(() => {
      const el = containerRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    }, 50);
  };

  // ✅ SIMPLE typing effect (no aggressive re-renders)
  const typeMessage = async (text: string) => {
    let current = "";

    for (let i = 0; i < text.length; i++) {
      current += text[i];

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "ai",
          content: current,
        };
        return updated;
      });

      await new Promise((res) => setTimeout(res, 5));
    }

    scrollToBottom(); // scroll ONLY after typing finishes
  };

  const askAI = async () => {
    if (!question.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setLoading(true);

    try {
      console.log(import.meta.env.VITE_API_URL);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/ask-ai`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          context,
        }),
      });

      const data = await res.json();

      // Add empty AI message
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "" },
      ]);

      await typeMessage(data.answer || "No response");

    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Error connecting to AI." },
      ]);
    }

    setLoading(false);
  };

const [showConfirm, setShowConfirm] = useState(false);

const clearChat = () => {
  setMessages([]);
  setQuestion("");
  setShowConfirm(false);
};

  return (
    <div className="mt-12 border border-gray-800 rounded-2xl p-6 bg-gray-900/40">

<div className="flex items-center justify-between mb-4">
  <h3 className="text-lg font-semibold text-white">
    💬 Ask AI about this article
  </h3>

  {messages.length > 0 && (
    <div className="relative">

      {!showConfirm ? (
        <button
          onClick={() => setShowConfirm(true)}
          className="text-xs text-gray-400 hover:text-white transition"
        >
          Clear chat
        </button>
      ) : (
        <div className="flex items-center gap-2 text-xs">
          <span className="text-gray-500">Confirm?</span>

          <button
            onClick={clearChat}
            className="text-red-400 hover:text-red-300"
          >
            Yes
          </button>

          <button
            onClick={() => setShowConfirm(false)}
            className="text-gray-400 hover:text-white"
          >
            No
          </button>
        </div>
      )}

    </div>
  )}
</div>

      {/* Chat Box */}
      <div
        ref={containerRef}
        className="overflow-y-auto mb-4 space-y-4 pr-2"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl text-sm max-w-[80%] ${
              msg.role === "user"
                ? "bg-white text-black ml-auto"
                : "bg-black border border-gray-800 text-gray-300"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <p className="text-gray-500 text-sm">AI is thinking...</p>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2 items-end">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              askAI();
            }
          }}
          placeholder="Ask something..."
          rows={Math.min(4, question.split("\n").length)}
          className="flex-1 p-3 rounded-lg bg-black border border-gray-700 text-white text-sm focus:outline-none focus:border-gray-500 resize-none"
        />

        <button
          onClick={askAI}
          disabled={!question.trim() || loading}
          className={`px-4 py-2 text-sm rounded-lg transition ${
            !question.trim() || loading
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          Send
        </button>
      </div>

    </div>
  );
}

export default AIChat;