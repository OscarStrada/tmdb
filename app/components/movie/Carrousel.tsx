"use client";

import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

interface Movie {
  id: string;
  poster_path: string;
  original_title: string;
  vote_average: number;
  // Add more properties if required
}

interface Props {
  url: string;
}

const Carrousel = ({ url }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const baseImageUrl = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      };

      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          // Do something with the data
          setMovies(data.results);
        } else {
          // Handle the error if the response is not okay
          console.log("Error:", response.status);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  console.log(movies);

  return (
    <div className="overflow-y-scroll scrollbar-hide">
      <div className="flex gap-6 container">
        {movies?.map((movie) => (
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

export default Carrousel;
