import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean; // 🔥 optional
};

function ArticleCard({
  id,
  title,
  description,
  category,
  date,
  readTime,
  featured,
}: Props) {
  return (
    <Link to={`/article/${id}`} className="block group h-full">
      <div className="h-full border border-gray-800 p-6 rounded-2xl transition duration-300 
        hover:border-gray-500 hover:bg-gray-900/40 flex flex-col justify-between">

        {/* TOP */}
        <div>

          {/* Category + Badge */}
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              {category}
            </p>

            {featured && (
              <span className="text-[10px] px-2 py-1 border border-gray-700 rounded-full text-gray-400">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h4 className="font-semibold text-lg mb-3 leading-snug text-gray-200 group-hover:text-white transition">
            {title}
          </h4>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* BOTTOM */}
        <div className="mt-6">

          {/* Metadata */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{date}</span>
            <span>{readTime}</span>
          </div>

          {/* CTA */}
          <div className="mt-4 text-xs text-gray-500 group-hover:text-white transition flex items-center gap-1">
            Read
            <span className="transform transition group-hover:translate-x-1">
              →
            </span>
          </div>

        </div>

      </div>
    </Link>
  );
}

export default ArticleCard;