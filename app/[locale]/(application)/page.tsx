import { Hero } from "@/app/components/hero/Hero";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Welcome"
        subtitle="Millions of movies, TV shows and people to discover. Explore now."
      />

      <section className="container py-4"></section>
    </>
  );
};

export default HomePage;
