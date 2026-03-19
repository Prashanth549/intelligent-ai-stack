type Props = {
  src: string;
  alt?: string;
  caption?: string;
  width?: string; // 👈 NEW
};

function ArticleImage({ src, alt, caption, width = "max-w-3xl" }: Props) {
  return (
    <div className="my-10 pl-1">
      <img
        src={src}
        alt={alt}
        className={`rounded-2xl border border-gray-800 shadow-lg hover:scale-[1.01] transition ${width}`}
      />
      {caption && (
        <p className="text-sm text-gray-500 mt-3">{caption}</p>
      )}
    </div>
  );
}

export default ArticleImage;