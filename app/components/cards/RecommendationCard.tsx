import Image from "next/image";

interface Props {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const RecommendationCard = ({ title, imageSrc, imageAlt }: Props) => {
  return (
    <div>
      <div className="w-64 h-40 rounded-md bg-black relative">
        <Image
          src={imageSrc}
          alt="backdrop"
          fill
          className="object-cover rounded-md w-full h-full"
        />
      </div>

      <p className="pt-2">
        {title.length > 18 ? `${title.slice(0, 18)}...` : title}
      </p>
    </div>
  );
};

export default RecommendationCard;
