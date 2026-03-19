type Props = {
  children: React.ReactNode;
};

function ArticleText({ children }: Props) {
  return <p className="mb-4">{children}</p>;
}

export default ArticleText;