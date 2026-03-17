type Props = {
  title: string;
  description: string;
};

function ArticleCard({ title, description }: Props) {
  return (
    <div className="border border-gray-800 p-5 rounded-xl hover:border-gray-600 transition">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

export default ArticleCard;