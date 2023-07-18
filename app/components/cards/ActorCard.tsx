import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  originalName: string;
  character: string;
  imageSrc: string;
  imageAlt: string;
}

const ActorCard = ({
  id,
  originalName,
  character,
  imageSrc,
  imageAlt,
}: Props) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/person/${id}`)}
      className="flex flex-col gap-2 cursor-pointer border shadow-md rounded-md"
    >
      <div className="w-36 h-44 rounded-md relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="aspect-auto rounded-t-md w-full h-full object-cover"
        />
      </div>

      <div className="px-3">
        <h4 className="font-semibold">{originalName}</h4>
        <h5 className="font-light text-sm">{character}</h5>
      </div>
    </div>
  );
};

export default ActorCard;
