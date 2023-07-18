import getUpcomingMovies from "@/actions/getUpcomingMovies";
import { MovieCard } from "@/app/components";

const UpcomingPage = async () => {
  const upcomingMovies = await getUpcomingMovies();
  const baseImageUrl = process.env.NEXT_PUBLIC_API_IMAGE_URL;

  return (
    <div className="container py-10">
      <h1 className="text-xl font-medium pb-10">Upcoming movies</h1>

      <div
        className="
          flex
          flex-wrap
          gap-10
        "
      >
        {upcomingMovies.results.map((movie: any) => (
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

export default UpcomingPage;
