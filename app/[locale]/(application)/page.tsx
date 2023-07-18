import getPopularMovies from "@/actions/getPopularMovies";
import getTopRatedMovies from "@/actions/getTopRatedMovies";
import getTrendingMovies from "@/actions/getTrendingMovies";
import getUpcomingMovies from "@/actions/getUpcomingMovies";
import { HomeHero, MoviesSlider } from "@/app/components";

const HomePage = async () => {
  const trendingMovies = await getTrendingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  const upcomingMovies = await getUpcomingMovies();

  return (
    <>
      <HomeHero
        title="Welcome"
        subtitle="Millions of movies, TV shows and people to discover. Explore now."
      />

      <MoviesSlider title="Trending" movies={trendingMovies.results} />
      <MoviesSlider
        title="Upcoming"
        movies={upcomingMovies.results}
        className="bg-primary-foreground dark:bg-popover"
      />
      <MoviesSlider title="Top rated" movies={topRatedMovies.results} />
      <MoviesSlider
        title="Popular"
        movies={popularMovies.results}
        className="bg-primary-foreground dark:bg-popover"
      />
    </>
  );
};

export default HomePage;
