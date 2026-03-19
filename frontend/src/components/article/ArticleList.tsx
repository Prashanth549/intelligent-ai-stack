type Props = {
  items: string[];
};

function ArticleList({ items }: Props) {
  return (
    <ul className="list-disc pl-6 space-y-2 mb-4">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ArticleList;