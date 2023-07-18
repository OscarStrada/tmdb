import { RecommendationCard } from "@/app/components";

interface Props {
  recommendations: any;
  title: string;
  movieTitle: string;
}

const RecommendationsSlider = ({
  recommendations,
  title,
  movieTitle,
}: Props) => {
  const imageUrl = process.env.NEXT_PUBLIC_API_IMAGE_URL;

  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-xl font-medium capitalize">{title}</h3>
      {recommendations.length > 0 ? (
        <div className="overflow-y-scroll scrollbar-hide">
          <div className="flex gap-6">
            {recommendations.map((recommendation: any) => (
              <RecommendationCard
                key={recommendation.id}
                title={recommendation.title}
                imageSrc={`${imageUrl}/${recommendation.backdrop_path}`}
                imageAlt={`${recommendation.title} image`}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>
          {`We don't have enough data to suggest any movies based on ${movieTitle}`}
        </p>
      )}
    </section>
  );
};

export default RecommendationsSlider;
