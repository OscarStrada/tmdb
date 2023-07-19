import getTopRatedMovies from "@/actions/getTopRatedMovies";
import { MovieCard } from "@/app/components";

const TopRatedPage = async () => {
  const topRatedMovies = await getTopRatedMovies();
  const baseImageUrl = process.env.NEXT_PUBLIC_API_IMAGE_URL;

  return (
    <div className="container py-10">
      <h1 className="text-xl font-medium pb-10">Top rated movies</h1>

      <div
        className="
          flex
          flex-wrap
          gap-10
        "
      >
        {topRatedMovies.results.map((movie: any) => (
          <MovieCard
            key={movie.id}
            imageSrc={`${baseImageUrl}/${movie.poster_path}`}
            imageAlt="Movie wallpaper"
            title={movie.original_title}
            date="June 06, 2023"
            voteAverage={movie.vote_average}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRatedPage;
