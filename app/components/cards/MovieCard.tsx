import Image from "next/image";
import { useRouter } from "next/navigation";
import CircularLoader from "../circularLoader/CircularLoader";
import { getScoreInPercentage } from "@/utils/formats";

interface Props {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  date: string;
  voteAverage: number;
}

const MovieCard = ({
  id,
  imageSrc,
  imageAlt,
  title,
  date,
  voteAverage,
}: Props) => {
  const userScore = getScoreInPercentage(voteAverage);
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movie/${id}`)}
      className="flex flex-col gap-10 last:pr-8 cursor-pointer"
    >
      <div className="w-44 h-56 rounded-md relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="aspect-auto rounded-md w-full h-full object-cover"
        />
        <div className="absolute -bottom-7 left-2">
          <CircularLoader width="50" score={userScore} fontSize="12" />
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
