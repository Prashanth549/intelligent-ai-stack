type Props = {
  children: React.ReactNode;
};

function ArticleContainer({ children }: Props) {
  return (

    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-6 text-gray-300 leading-relaxed">

      {children}
    </div>
  );
}

export default ArticleContainer;