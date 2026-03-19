type Props = {
  children: React.ReactNode;
};

function ArticleHighlight({ children }: Props) {
  return (
    <div className="relative bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-gray-700 rounded-xl p-5 my-8">
      <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-xl"></div>
      <p className="text-white font-medium leading-relaxed">
        {children}
      </p>
    </div>
  );
}

export default ArticleHighlight;