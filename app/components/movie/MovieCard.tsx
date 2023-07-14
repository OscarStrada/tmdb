import Image from "next/image";

interface Props {
  imageSrc: string;
  imageAlt: string;
  title: string;
  date: string;
  voteAverage: number;
}

const MovieCard = ({ imageSrc, imageAlt, title, date, voteAverage }: Props) => {
  const votes = Math.round(voteAverage) * 10;

  return (
    <div className="flex flex-col gap-10 last:pr-8">
      <div className="w-44 h-56 rounded-md relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="aspect-auto rounded-md w-full h-full object-cover"
        />
        <div
          className="
            absolute 
            -bottom-7 
            left-2 
            flex 
            h-11 
            w-11 
            rounded-full 
            items-center 
            justify-center 
            text-sm 
            font-semibold
            text-white
            bg-gradient-to-br 
            from-cyan-500
            to-cyan-700
          "
        >
          {votes}%
        </div>
      </div>

      <div>
        <p className="font-semibold pb-2">{title}</p>
        <span className="font-light text-sm">{date}</span>
      </div>
    </div>
  );
};

export default MovieCard;
