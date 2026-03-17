import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  description: string;
};

function ArticleCard({ id, title, description }: Props) {
  return (
    <Link to={`/article/${id}`} className="block group">
    <div className="h-full border border-gray-800 p-6 rounded-2xl transition duration-300 hover:border-gray-500 hover:bg-gray-900/40 flex flex-col justify-between">
        <h4 className="font-semibold text-lg mb-2 group-hover:text-white">
          {title}
        </h4>

        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>

      </div>
    </Link>
  );
}

export default ArticleCard;