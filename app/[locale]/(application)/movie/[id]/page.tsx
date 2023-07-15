import { MovieHero } from "@/app/components/movie/MovieHero";

interface Params {
  id: string;
}

const MovieDetails = ({ params }: { params: Params }) => {
  return (
    <div>
      <MovieHero id={params?.id} />
    </div>
  );
};

export default MovieDetails;
