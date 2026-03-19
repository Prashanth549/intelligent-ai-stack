import { useState, useEffect } from "react";

type Section = {
  id: string;
  label: string;
};

type Props = {
  sections: Section[];
};

function TableOfContents({ sections }: Props) {
  const [active, setActive] = useState("");

  // 🔥 Scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", // ✅ better balance

        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="hidden lg:block w-56 shrink-0 sticky top-24 h-fit text-sm text-gray-400">

      <p className="text-xs uppercase tracking-widest mb-4 text-gray-500">
        On this page
      </p>

      <ul className="space-y-3">
        {sections.map((section) => (
          <li
            key={section.id}
            onClick={() =>
              document
                .getElementById(section.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`cursor-pointer transition ${
              active === section.id
                ? "text-white font-medium"
                : "hover:text-white"
            }`}
          >
            {section.label}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default TableOfContents;