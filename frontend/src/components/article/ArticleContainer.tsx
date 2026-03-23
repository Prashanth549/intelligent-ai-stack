type Props = {
  children: React.ReactNode;
};

function ArticleContainer({ children }: Props) {
  return (

<div className="w-full max-w-3xl pt-10 pb-6 text-gray-300 leading-relaxed">
      {children}
      
    </div>
  );
}

export default ArticleContainer;