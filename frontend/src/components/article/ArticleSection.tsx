type Props = {
  title: string;
  id?: string;
};

function ArticleSection({ title, id }: Props) {
  return (
    <h2
      id={id}
      className="text-2xl font-semibold text-white mt-12 mb-4 scroll-mt-24"
    >
      {title}
    </h2>
  );
}

export default ArticleSection;