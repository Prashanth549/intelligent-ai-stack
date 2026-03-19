type Props = {
  children: React.ReactNode;
};

function ArticleContainer({ children }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-12 text-gray-300 leading-relaxed">
      {children}
    </div>
  );
}

export default ArticleContainer;