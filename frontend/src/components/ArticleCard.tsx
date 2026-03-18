import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
};

function ArticleCard({ id, title, description, category, date, readTime }: Props) {
  return (
    <Link to={`/article/${id}`} className="block group">
      <div className="h-full border border-gray-800 p-6 rounded-2xl transition duration-300 hover:border-gray-500 hover:bg-gray-900/40 flex flex-col justify-between">

        <div>
          {/* Category */}
          <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">
            {category}
          </p>

          <h4 className="font-semibold text-lg mb-3 group-hover:text-white leading-snug">
            {title}
          </h4>

          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>

    {/* Metadata */}
    <div className="flex items-center justify-between mt-6 text-xs text-gray-500">
      <span>{date}</span>
      <span>{readTime}</span>
    </div>

        {/* CTA */}
        <span className="text-xs text-gray-500 mt-6 group-hover:text-white transition">
          Read →
        </span>

      </div>
    </Link>
  );
}

export default ArticleCard;