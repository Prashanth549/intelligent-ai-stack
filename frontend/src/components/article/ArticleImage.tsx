type Props = {
  src: string;
  alt?: string;
  caption?: string;
  width?: string;
};

function ArticleImage({ src, alt, caption, width = "max-w-3xl" }: Props) {
  return (
    <div className="my-10 w-full flex flex-col items-start">

      <img
        src={src}
        alt={alt}


        className={`w-full ${width} h-auto rounded-2xl border border-gray-800 shadow-lg transition`}

      />

      {caption && (
        <p className="text-sm text-gray-500 mt-3">
          {caption}
        </p>
      )}

    </div>
  );
}

export default ArticleImage;