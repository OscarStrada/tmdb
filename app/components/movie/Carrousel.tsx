"use client";

import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

interface Props {
  url: string;
}

const Carrousel = ({ url }: Props) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
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
          setTrendingMovies(data);
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

  console.log(trendingMovies);

  return (
    <div className="overflow-y-scroll">
      <div className="flex gap-6 container">
        {trendingMovies?.results?.map((movie) => (
          <MovieCard
            key={movie.id}
            imageSrc={`${baseImageUrl}/${movie.poster_path}`}
            imageAlt="Movie wallpaper"
            title={movie.original_title}
            date="June 06, 2023"
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
