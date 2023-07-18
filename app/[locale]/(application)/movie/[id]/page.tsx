import getMovieById from "@/actions/getMovieById";
import getReviewById from "@/actions/getReviewsById";
import { ActorsSlider, MovieHero, ReviewCard, Sidebar } from "@/app/components";

interface Params {
  id: string;
}

const MovieDetails = async ({ params }: { params: Params }) => {
  const movie = await getMovieById(params.id);
  const reviews = await getReviewById(params.id);
  const firstReview = reviews.results[0];

  return (
    <div>
      <MovieHero movie={movie} />

      <div className="w-full container flex">
        <div className="w-3/4 flex flex-col gap-14">
          <ActorsSlider title={"Top billed cast"} actors={movie.credits.cast} />
          <hr />

          <ReviewCard review={firstReview} />
        </div>

        <Sidebar movie={movie} />
      </div>
    </div>
  );
};

export default MovieDetails;
