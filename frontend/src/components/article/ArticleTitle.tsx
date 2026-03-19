type Props = {
  children: React.ReactNode;
};

function ArticleTitle({ children }: Props) {
  return (
    <h1 className="text-4xl font-semibold text-white mb-6 leading-tight">
      {children}
    </h1>
  );
}

export default ArticleTitle;