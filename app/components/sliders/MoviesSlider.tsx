"use client";

import { cn } from "@/lib/utils";
import { MovieCard } from "@/app/components";

interface Props {
  title: string;
  movies: any;
  className: string;
}

const Carrousel = ({ title, movies, className }: any) => {
  const baseImageUrl = process.env.NEXT_PUBLIC_API_IMAGE_URL;

  return (
    <section className={cn("py-8 flex flex-col gap-6", className)}>
      <h3 className="container text-xl font-medium capitalize">{title}</h3>
      <div className="overflow-y-scroll scrollbar-hide">
        <div className="flex gap-6 container">
          {movies?.map((movie: any) => (
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
    </section>
  );
};

export default Carrousel;
