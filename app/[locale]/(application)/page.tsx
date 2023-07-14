import { Hero, Carrousel } from "@/app/components";

const HomePage = () => {
  const baseUrl = "https://api.themoviedb.org/3";
  const api_key = "api_key=4f298a53e552283bee957836a529baec";
  const language = "language=en-US";

  return (
    <>
      <Hero
        title="Welcome"
        subtitle="Millions of movies, TV shows and people to discover. Explore now."
      />

      <section className="py-8 flex flex-col gap-6">
        <h3 className="container text-xl font-medium">Trending</h3>
        <Carrousel
          url={`${baseUrl}/trending/movie/day?${api_key}&${language}`}
        />
      </section>

      <section className="py-8 flex flex-col gap-6 bg-primary-foreground dark:bg-popover">
        <h3 className="container text-xl font-medium">Upcoming</h3>
        <Carrousel url={`${baseUrl}/movie/upcoming?${api_key}&${language}`} />
      </section>

      <section className="py-8 flex flex-col gap-6">
        <h3 className="container text-xl font-medium">Top rated</h3>
        <Carrousel url={`${baseUrl}/movie/top_rated?${api_key}&${language}`} />
      </section>

      <section
        className="
          py-8 
          flex 
          flex-col 
          gap-6 
          bg-primary-foreground 
          dark:bg-popover
        "
      >
        <h3 className="container text-xl font-medium">Popular</h3>
        <Carrousel url={`${baseUrl}/movie/popular?${api_key}&${language}`} />
      </section>
    </>
  );
};

export default HomePage;
